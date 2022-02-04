import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import CartCard from "../components/cart/CartCard"

const CartContainer = ({cart, selectedProduct, handleRemoveClick}) => {
  console.log("products in cart:", cart)

console.log("cart:",cart)

const eachProductInCart =  
cart.map(product => <CartCard key={product.id} product={product} handleRemoveClick={handleRemoveClick} />)



  return (
    <div>
      <h2>Cart</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {cart.length > 0 ? eachProductInCart : <div><h4>Your cart is empty!</h4></div>}
      </div>
    </div>
  )
}

export default CartContainer

