import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import InventoryContainer from '../containers/InventoryContainer';


function App() {

  const [ productsList, setProductsList ] = useState([])
  const [ temporaryCart, setTemporaryCart ] = useState([])
  const [ cartFetch, setCartFetch] = useState([])
  const [ selectedRemoval, setSelectedRemoval ] = useState({})
  const [ isSubmitted, setIsSubmitted ] = useState(false)

  const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:3000/products")
      const data = await resp.json()
      setProductsList(data)
    } catch (error) {
       alert(error)
      }
  }

  const fetchCart = async () => {
    try {
      const resp = await fetch("http://localhost:3000/cart")
      const data = await resp.json()

      setCartFetch(data)
    } catch (error) {
       alert(error)
      }
  }

  useEffect(() => {
    fetchData();
    fetchCart();
  }, [])



useEffect(() => {
  fetchCart();
  console.log("re-rendered the cart fetch")
 },[temporaryCart, selectedRemoval])

 

  const handleAddClick = (product) => {
    setIsSubmitted(false);
    // exists in actual cart?
    const cItem = cartFetch.find(item => item.product_id === product.id)
    console.log("citem:", cItem)
    cItem && fetch(`http://localhost:3000/cart/${cItem.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "quantity": cItem.quantity + 1
    })
  })
    .then(resp =>  resp.json())
    .then(newItem => setCartFetch(cartFetch.map(item => newItem.id === item.id ? newItem : item)))
    .catch(err => alert(err))

    // does not exist in actual cart
    
    const tempCItem = temporaryCart.find(item => item.product_id === product.id)
    console.log("temp CItem:", tempCItem)
   if ((!!cItem === false || !!cItem === undefined) && !!tempCItem === false){
     const newTempObj = {
        "product_id": product.id
     }
     setTemporaryCart([...temporaryCart, newTempObj])
        fetch('http://localhost:3000/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            "product_id": product.id,
            "quantity": 1
          })
          })
          .then(resp =>  resp.json())
          .then(newlyAddedPost => console.log(newlyAddedPost))
          .catch(err => alert(err))
        }
}


const handleAddCartClick = (cartProduct) => {
  const removedItem = cartFetch.find(item => item.product_id === cartProduct.id)
  setSelectedRemoval({...removedItem, quantity: (removedItem.quantity + 1)})
  

  fetch(`http://localhost:3000/cart/${removedItem.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    "quantity": removedItem.quantity + 1
  })
})
  .then(resp =>  resp.json())
  .then(newItem => setCartFetch(oldCart => oldCart.map(item => newItem.id === item.id ? newItem : item)))
  .catch(err => alert(err))
  
  console.log("selected removal:", selectedRemoval)
  
 }

 const handleRemoveClick = (cartProduct) => {

  const removedItem = cartFetch.find(item => item.product_id === cartProduct.id)
  setSelectedRemoval({...removedItem, quantity: (removedItem.quantity - 1)})

  
  
  if (removedItem.quantity >= 2){
  fetch(`http://localhost:3000/cart/${removedItem.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
  },
  body:JSON.stringify({
    "quantity": removedItem.quantity - 1
  })
})
  .then(resp =>  resp.json())
  .then(newItem => setCartFetch(oldCart => oldCart.map(item => newItem.id === item.id ? newItem : item)))
  .catch(err => alert(err))
  
  

  } else if (removedItem.quantity < 2){
    fetch(`http://localhost:3000/cart/${removedItem.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
  },
  body:JSON.stringify(removedItem)
})
  .then(resp =>  resp.json())
  .then(removedItem => console.log(removedItem))
  .catch(err => alert(err))
  

  }
 }
//
let initialValue = 0
const totalInCart = cartFetch.reduce(function(total, currentValue){
  return total + currentValue.quantity
}, initialValue)
//


const submitForm = (e) => {
  e.preventDefault();
  setIsSubmitted(true)
  cartFetch.map(cartItem => 
    fetch(`http://localhost:3000/cart/${cartItem.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
  },
  body:JSON.stringify(cartItem)
})
  .then(resp =>  resp.json())
  .then(setCartFetch([]))
  .catch(err => alert(err))
)
}



  return (
    <div className="App">
      <Router>
        <InventoryContainer isSubmitted={isSubmitted} submitForm={submitForm} totalInCart={totalInCart} selectedRemoval={selectedRemoval} productsList={productsList} handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick} handleAddCartClick={handleAddCartClick}/>
      </Router>
    </div>
  );
}

export default App;