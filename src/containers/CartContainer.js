import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import CartCard from "../components/cart/CartCard"

const CartContainer = ({}) => {

  // useEffect(() => {
  //   console.error("useEffect")

  // },[])
  // console.log("SELECTED PRODUCT:", selectedProduct.in_cart)

  // const [ newProductQuantity, setProductQuantity ] = useState(selectedProduct.in_cart)

  // useEffect(() => {
  //   setProductQuantity(currentQuantity => currentQuantity + 1)
  // }, [selectedProduct])

  // console.log("selectedproduct", selectedProduct.in_)
  // useEffect(() => { 
  //   fetch(`http://localhost:3000/products/${selectedProduct.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //   },
  //   body:JSON.stringify({
  //     "in_cart": newProductQuantity
  //   })
  // })
  //   .then(resp =>  resp.json())
  //   .then(addedProduct => console.log("patched product:", addedProduct))
  //   .then(addedProduct => console.log(addedProduct))
  //   .catch(err => alert(err))
  // }, [newProductQuantity])



// // console.log("cart:",cart)
// console.log("full cart array in cartContainer:", cart)
// const eachProductInCart =  
// cart.map(cartItem => <CartCard tempCartItem={tempCartItem} key={cartItem.id} cartItem={cartItem} productQuantity={productQuantity} handleRemoveClick={handleRemoveClick} selectedProduct={selectedProduct} />)



  return (
    <div>
      {/* <h2>Cart</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {cart.length > 0 ? eachProductInCart : <div><h4>Your cart is empty!</h4></div>}
      </div> */}
    </div>
  )
}

export default CartContainer

