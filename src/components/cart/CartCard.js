import { useState , useEffect} from "react"

const CartCard = ({selectedRemoval, handleRemoveClick, cartFetch, cartProduct}) => {
  // console.log("///combined cart in cartcard:", cartItem)
  
  // console.log("///////temp cart item", tempCartItem)
  
  // console.log("selectedProduct:", selectedProduct)
  // {console.log("products inside cart:", product)}


//   const [ selectedRemoval, setSelectedRemoval ] = useState({})

//   useEffect(() => {
//     fetch ('http://localhost:3000/cart')
//     .then(response => response.json())
//     .then(data => setNewCart(data))
//     .catch(err => alert(err))
//   },[selectedRemoval])

//  const handleRemoveClick = () => {
   
//   const removedItem = cartFetch.filter(item => item.product_id === cartProduct.id)
//   // setSelectedRemoval(removedItem)
//   console.log("removed item", removedItem[0].product_id, removedItem[0].quantity)


//   if (removedItem[0].quantity === 0){
//     console.log("inside if quantity:", removedItem[0].quantity)
//     fetch(`http://localhost:3000/cart/${removedItem[0].product_id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify(removedItem)
//   })
//     .then(resp =>  resp.json())
//     .then(removedItem => {
//       setSelectedRemoval(removedItem);
//     })
//     .catch(err => alert(err))

//   }


//   else 
//   if (removedItem[0].quantity > 0) 
//   {
//     console.log("inside else quantity:",removedItem[0].quantity )
//     fetch(`http://localhost:3000/cart/${removedItem[0].product_id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify({
//       "quantity": removedItem[0].quantity - 1
//     })
//   })
//     .then(resp =>  resp.json())
//     .then(newItem => {
//       setSelectedRemoval(newItem);
//     })
//     .catch(err => alert(err))
//   }

//  }

//  let quantityInCart
//  if (selectedRemoval.id === cartProduct.id) {
//    quantityInCart = selectedRemoval.quantity
//  } else {
//    quantityInCart = newCart.map(item => (item.product_id === cartProduct.id ? item.quantity : null))
//  }


      

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
        {selectedRemoval.product_id === cartProduct.id ? selectedRemoval.quantity : cartFetch.map(item => (item.product_id === cartProduct.id ? item.quantity : null))}
        <br/>
        Total Cost: ${cartFetch.map(item => (item.product_id === cartProduct.id ? (item.quantity * cartProduct.price_per_unit).toFixed(2) : null) )}
        
        
        
      <button onClick={() => handleRemoveClick(cartProduct)}>Remove from Cart</button>
    </div>
  )
}

export default CartCard
