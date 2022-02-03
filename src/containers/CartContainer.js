import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import CartCard from "../components/cart/CartCard"

const CartContainer = ({cart, selectedProduct}) => {
  console.log("products in cart:", cart)

// useEffect(() => {
//   setCart(cart => [...cart])
// }, [])

//   console.log("cart:", cart)

// console.log("products list:",selectedProduct)

console.log("cart:",cart)

const eachProductInCart =  
cart.map(product => <CartCard key={product.id} product={product} />)



useEffect(() => { 
  fetch(`http://localhost:3000/products/${selectedProduct.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    "in_cart": true
  })
})
  .then(resp =>  resp.json())
  // .then(addedProduct =>  handleUpdateCart(addedProduct))
  .catch(err => alert(err))
}, [selectedProduct])



// const [ cart, setCart ] = useState([])

//   const inCartAlreadyList = productsList.
  
//   const addToCart = (selectedProduct) => {
    
//     // setCart(inCartAlreadyList)
//     console.log("in cart already list:", inCartAlreadyList);
//     setCart(currentCart => [...currentCart, selectedProduct])

//   }




  return (
    <div>
      <h2>Cart</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>{eachProductInCart}</div>
    </div>
  )
}

export default CartContainer

