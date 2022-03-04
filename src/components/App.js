import './App.css';
import { useState, useEffect } from 'react';
import InventoryContainer from '../containers/InventoryContainer';
import { GeneralStyle } from '../styled-components/styleIndex';

function App() {

  const [ productsList, setProductsList ] = useState([])
  const [ temporaryCart, setTemporaryCart ] = useState([])
  const [ cartFetch, setCartFetch] = useState([])
  const [ selectedRemoval, setSelectedRemoval ] = useState({})
  const [ isSubmitted, setIsSubmitted ] = useState(false)

  //initial data fetches for products and cart

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
  },[temporaryCart, selectedRemoval])

  if (productsList.length <= 0){return <div>Loading...</div>}

  // event handler functions

  const handleAddClick = (product) => {
    setIsSubmitted(false);

    // exists in actual cart?
    const cItem = cartFetch.find(item => item.product_id === product.id)
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
    .catch(err => alert(err))
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
      .catch(err => alert(err))
    }
 }

  const submitForm = (formData) => {
    console.log(Object.values(formData))
    const {address2, ...updatedFormData} = formData
    console.log(updatedFormData)
    const inputValues = Object.values(updatedFormData).some(value => value.trim() === "")
    if (!!inputValues) {
      alert("You must fill out all of the fields!")
  } else if (!!Number(formData.zipcode) === false ){
      alert("Please enter a valid zipcode")
  } else if (formData.state === "default"){
    alert("Please select your state.")
  } else {
    setIsSubmitted(true)
    setTemporaryCart([])
    cartFetch.map(cartItem => 
      fetch(`http://localhost:3000/cart/${cartItem.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
    },
      body:JSON.stringify(cartItem)
    })
      .then(resp =>  {
        if (resp.ok) {
          setCartFetch(cartFetch => cartFetch.filter(c => c.id !== cartItem.id))
        }
      })
      .catch(err => alert(err))
    )
    }
  }

  // aggregation of total quantity in cart for NavBar
  const totalInCart = cartFetch.reduce(function(total, currentValue){
    return total + currentValue.quantity
  }, 0)

  return (
    <div className="App">
      <GeneralStyle>
        <InventoryContainer isSubmitted={isSubmitted} submitForm={submitForm} totalInCart={totalInCart} selectedRemoval={selectedRemoval} productsList={productsList} handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick} handleAddCartClick={handleAddCartClick}/>
      </GeneralStyle>
    </div>
  );
}

export default App;