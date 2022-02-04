import { useState , useEffect} from "react"

const CartCard = ({handleRemoveClick, product, selectedProduct}) => {
  

  return (
    <div style={{border: "solid", width:"100px", margin: "auto", height:"350px", padding:".5em"}}>
     <h5 style={{backgroundColor:"black", color:"white"}}>{product.department}</h5>
      <h4>{product.name}</h4>
      <img src={product.image} alt="test" style={{display:"flex", width:"50px", flexWrap:"wrap"}}/>
      <h5>{product.brand}</h5>
        ${product.price_per_unit.toFixed(2)}
        {product.inventory < 5 ? <h4 style={{backgroundColor:"red", color:"white"}}>Low Stock!</h4> : null}
        Quantity in Cart: {product.in_cart}
      <button onClick={() => handleRemoveClick(product)}>Remove from Cart</button>
    </div>
  )
}

export default CartCard

