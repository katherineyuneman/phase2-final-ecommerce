import { useState , useEffect} from "react"

const CartCard = ({eachProductsData, tempCartItem, cartFetch, cartProduct, selectedProduct, productQuantity}) => {
  // console.log("///combined cart in cartcard:", cartItem)
  
  // console.log("///////temp cart item", tempCartItem)
  
  // console.log("selectedProduct:", selectedProduct)
  // {console.log("products inside cart:", product)}

 

  return (
    <div style={{border: "solid", width:"100px", margin: "auto", height:"350px", padding:".5em"}}>
     <h5 style={{backgroundColor:"black", color:"white"}}>{cartProduct.department}</h5>
      <h4>{cartProduct.product_id}</h4>
      <img src={cartProduct.image} alt="test" style={{display:"flex", width:"50px", flexWrap:"wrap"}}/>
      <h5>{cartProduct.name}</h5>
        ${cartProduct.price_per_unit.toFixed(2)} / {cartProduct.units}
        <br/>
        {cartProduct.inventory < 5 ? <h4 style={{backgroundColor:"red", color:"white"}}>Low Stock!</h4> : null}
        Quantity in Cart: 
        {cartFetch.map(item => (item.product_id === cartProduct.id ? item.quantity : null) )}
        <br/>
        Total Cost: ${cartFetch.map(item => (item.product_id === cartProduct.id ? (item.quantity * cartProduct.price_per_unit).toFixed(2) : null) )}
        
        
        
      <button >Remove from Cart</button>
    </div>
  )
}

export default CartCard
