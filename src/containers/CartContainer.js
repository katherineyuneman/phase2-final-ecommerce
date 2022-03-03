import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { Link } from 'react-router-dom'
import CartCard from "../components/cart/CartCard"
import CheckoutForm from "../components/cart/CheckoutForm"
import { CartDiv, HomeContainer } from "../styled-components/styleIndex"

const CartContainer = ({
  isSubmitted, submitForm, handleAddCartClick, selectedRemoval,
  handleRemoveClick, productsList, selectedProduct
}) => {
  

  const [ cartFetch, setCartFetch] = useState([])
  const [ PopUpisOpen, SetPopUpisOpen ] = useState(false);

  const togglePopup = () => {
    SetPopUpisOpen(!PopUpisOpen);
  }

  useEffect(() => {
    fetch ('http://localhost:3000/cart')
    .then(response => response.json())
    .then(data => setCartFetch(data))
    .catch(err => alert(err))
  },[selectedProduct, selectedRemoval])

  if (productsList.length <= 0){return <div>Loading...</div>}

  const productCartFilter =
    productsList.filter(product => cartFetch.some(cartItem => product.id === cartItem.product_id));

  const totalCost = cartFetch.reduce((total, ci) => {
    const findProduct = productsList.find(p => ci.product_id === p.id)
    console.log(productsList)
    console.log("ci", ci)
    console.log("find product:", findProduct)
    const costForItem = findProduct.price_per_unit
    const quantity = ci.quantity
    const totalCost = costForItem * quantity
    return (total + totalCost)
    // return findProduct
}, 0)

const eachProductInCart = 
  productCartFilter.map((cartProduct) => 
    <CartCard
      key={cartProduct.id}
      cartProduct={cartProduct}
      handleAddCartClick={handleAddCartClick}
      selectedRemoval={selectedRemoval}
      handleRemoveClick={handleRemoveClick}
      cartFetch={cartFetch}/>)

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
            </div>  
          : 
            null
        }
          <div className="left">
              {productCartFilter.length > 0 ? eachProductInCart : "Your cart is empty!"}
          </div>
        {PopUpisOpen && <CheckoutForm submitForm={submitForm} totalCost={totalCost} togglePopup={togglePopup}/>}
      </CartDiv>
    )
    : 
      <CartDiv>
        <HomeContainer>
          <h1>Thank you for shopping!</h1>
          <br />
          <Link to="/products">
            <button>Shop for more products! {'>>'} </button>
          </Link>
        </HomeContainer>
      </CartDiv>

  )
}

export default CartContainer
