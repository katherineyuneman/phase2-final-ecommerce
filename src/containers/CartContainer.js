import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import CartCard from "../components/cart/CartCard"
import { TotalCost, CartDiv } from "../styled-components/styleIndex"
import CheckoutForm from "../components/cart/CheckoutForm"

const CartContainer = ({ isSubmitted, submitForm, handleAddCartClick, selectedRemoval, handleRemoveClick, productsList, selectedProduct }) => {
  const [ cartFetch, setCartFetch] = useState([])
  const [ PopUpisOpen, SetPopUpisOpen ] = useState(false);

  const togglePopup = () => {
    SetPopUpisOpen(!PopUpisOpen);
  }
  
  const updatedFetch = () => {
    fetch ('http://localhost:3000/cart')
    .then(response => response.json())
    .then(data => setCartFetch(data))
    .catch(err => alert(err))
  }

  useEffect(() => {
    updatedFetch();
  },[selectedProduct, selectedRemoval])


const productCartFilter = productsList.filter(product => cartFetch.some(cartItem => product.id === cartItem.product_id));
console.log("product cart filter:",productCartFilter)

const ProductCartArrayMerge =
productCartFilter.map(product => ({...cartFetch.find((item) => (item.product_id === product.id) && item.quantity), ...product}
    ));

console.log(ProductCartArrayMerge)

const totalCostArray = ProductCartArrayMerge.map(product => ({...product, "totalCost": product.quantity * product.price_per_unit}))
console.log(totalCostArray)

//
let initialValue = 0
const totalCost = totalCostArray.reduce(function(total, currentValue){
  return total + currentValue.totalCost
}, initialValue)
//
console.log("total cost:", totalCost)

const eachProductInCart = productCartFilter.map(cartProduct => <CartCard handleAddCartClick={handleAddCartClick} selectedRemoval={selectedRemoval} handleRemoveClick={handleRemoveClick} key={cartProduct.product_id} cartProduct={cartProduct} cartFetch={cartFetch}/>)





  return (
    !isSubmitted ? (
    <CartDiv>
      <h2>Cart</h2>
      {productCartFilter.length > 0 ?
      <div className="right">
      Subtotal: ${totalCost.toFixed(2)}
      <br/>
      Taxes: ${(totalCost * .0735).toFixed(2)}
      <br/>
      Total: ${(totalCost * 1.0735).toFixed(2)}
      <br/>
      <br/>
        <button onClick={togglePopup}>Checkout</button>
      </div>  : null}

      <div className="left">
      <div>
        {/* {eachProductInCart} */}
        {productCartFilter.length > 0 ? eachProductInCart : "Your cart is empty!"}
        
      </div>
      </div>
      {PopUpisOpen && <CheckoutForm submitForm={submitForm} totalCost={totalCost} togglePopup={togglePopup}/>}
      </CartDiv>
    ) : <CartDiv>
          <h2>Thank you for submitting your order!</h2>
        </CartDiv>

  )
}

export default CartContainer
