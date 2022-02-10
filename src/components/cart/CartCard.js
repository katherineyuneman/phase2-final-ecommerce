import { useState , useEffect} from "react"

const CartCard = ({tempCartItem,handleRemoveClick, cartItem, selectedProduct, productQuantity}) => {
  console.log("///////temp cart item", tempCartItem)
  console.log("cart in cartcard:", cartItem)
  console.log("selectedProduct:", selectedProduct)
  // {console.log("products inside cart:", product)}

  return (
    <div style={{border: "solid", width:"100px", margin: "auto", height:"350px", padding:".5em"}}>
     <h5 style={{backgroundColor:"black", color:"white"}}>{cartItem.department}</h5>
      <h4>{cartItem.name}</h4>
      <img src={cartItem.image} alt="test" style={{display:"flex", width:"50px", flexWrap:"wrap"}}/>
      <h5>{cartItem.brand}</h5>
        ${cartItem.price_per_unit.toFixed(2)}
        {cartItem.inventory < 5 ? <h4 style={{backgroundColor:"red", color:"white"}}>Low Stock!</h4> : null}
        Quantity in Cart: 
        {selectedProduct.id === cartItem.id ?
          (selectedProduct.in_cart)
        : 
          (cartItem.in_cart)
        }
        
        
      <button onClick={() => handleRemoveClick(cartItem)}>Remove from Cart</button>
    </div>
  )
}

export default CartCard

