import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import CartCard from "../components/cart/CartCard"

const CartContainer = ({productsList, tempCartItem, cart, selectedProduct, productQuantity, handleRemoveClick, }) => {
  const [ cartFetch, setCartFetch] = useState([])

  
  useEffect(() => {
    fetch ('http://localhost:3000/cart')
    .then(response => response.json())
    .then(data => setCartFetch(data))
    .catch(err => alert(err))
  },[selectedProduct])


  // console.log("cartFetch within CartContainer :", cartFetch)
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



// console.log("cart:",cart)
// console.log("full cart array in cartContainer from fetch:", cartFetch)




let productCartFilter = productsList.filter(product => cartFetch.some(cartItem => product.id === cartItem.product_id));

console.log("product cart filter:", productCartFilter)

  // (product.id === cartItem.product_id ? <CartCard key={cartItem.product_id} cartItem={cartItem}/> : console.log(product.id, cartItem.product_id))))
  // console.log("product cart filter:", productCartFilter)


//   cartFetch.filter(cartItem => cartItem.product_id === product.id)
// );

// console.log("product cart filter:", productCartFilter)

const eachProductInCart = productCartFilter.map(cartProduct => <CartCard key={cartProduct.product_id} cartProduct={cartProduct}/>)



  return (
    <div>
      <h2>Cart</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>
        {eachProductInCart}
      </div>
    </div>
  )
}

export default CartContainer
