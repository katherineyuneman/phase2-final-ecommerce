import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import CartCard from "../components/cart/CartCard"
import { TotalCost, CartDiv } from "../styled-components/styleIndex"

const CartContainer = ({handleAddCartClick, selectedRemoval, handleRemoveClick, productsList, selectedProduct }) => {
  const [ cartFetch, setCartFetch] = useState([])

  
  useEffect(() => {
    fetch ('http://localhost:3000/cart')
    .then(response => response.json())
    .then(data => setCartFetch(data))
    .catch(err => alert(err))
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
    <CartDiv>
       <h2>Cart</h2>
      <div className="right">
      Subtotal: {totalCost}
      </div>
      <div className="left">
      <div>
        {/* {productCartFilter.length > 0 ? {eachProductInCart} : "Your cart is empty!"} */}
        {eachProductInCart}
        
      </div>
      </div>
      </CartDiv>
  )
}

export default CartContainer
