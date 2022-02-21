import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import CartCard from "../components/cart/CartCard"

const CartContainer = ({handleAddCartClick, selectedRemoval, handleRemoveClick, productsList, selectedProduct }) => {
  const [ cartFetch, setCartFetch] = useState([])

  
  useEffect(() => {
    fetch ('http://localhost:3000/cart')
    .then(response => response.json())
    .then(data => setCartFetch(data))
    .catch(err => alert(err))
  },[selectedProduct, selectedRemoval])


let productCartFilter = productsList.filter(product => cartFetch.some(cartItem => product.id === cartItem.product_id));




const eachProductInCart = productCartFilter.map(cartProduct => <CartCard handleAddCartClick={handleAddCartClick} selectedRemoval={selectedRemoval} handleRemoveClick={handleRemoveClick} key={cartProduct.product_id} cartProduct={cartProduct} cartFetch={cartFetch}/>)





  return (
    <div>
      <h2>Cart</h2>
      Totals:
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {/* {productCartFilter.length > 0 ? {eachProductInCart} : "Your cart is empty!"} */}
        {eachProductInCart}
        
      </div>
    </div>
  )
}

export default CartContainer
