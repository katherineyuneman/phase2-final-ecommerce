import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import InventoryContainer from '../containers/InventoryContainer';


function App() {

  const [ selectedProduct, setSelectedProduct ] = useState({})
  const [ productsList, setProductsList ] = useState([])
  const [ cart, setCart ] = useState([])
  const [ removeProduct, setRemoveProduct ] = useState({})
  const [ productQuantity, setProductQuantity ] = useState(0)
  const [ temporaryCart, setTemporaryCart ] = useState([])
  const [ arrayClickedObjects, setArrayClickedObjects ] = useState([])
  const [ countClicks, setCountClicks ] = useState(0)
  const [ tempCartItem, setTempCartItem] = useState([])

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

      setTempCartItem(data)
    } catch (error) {
       alert(error)
      }
  }



  useEffect(() => {
    fetchData();
    fetchCart();
  }, [])
  console.log("-----------------------------------------------------------------------------")
  console.log(tempCartItem)
  console.log("-----------------------------------------------------------------------------")

  // set initial cart without any action
const productsInCart = 
productsList.filter(product => product.in_cart > 0)

useEffect(() => {
setCart(productsInCart);
}, [productsList])


  const handleAddClick = (product) => {
    const cItem = tempCartItem.find(item => item.product_id === product.id)
    console.log("-----------------------------------------------------------------------------")
    console.log("cartitemclick:", cItem)
    console.log("-----------------------------------------------------------------------------")


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
    .then(newItem => setTempCartItem(tempCartItem.map(item => newItem.id === item.id ? newItem : item)))
    .catch(err => alert(err))





    // console.log("props product:", product, "props timesClicked:", countItemClick)
    // setCountItemClick(countItemClick => countItemClick + 1)
    const updatedQuantity = product.in_cart + 1
    console.log("updated quantity:", updatedQuantity)
    setProductQuantity(updatedQuantity)
    const updatedProductQuant = {...product, in_cart: updatedQuantity}
    console.log("updated product with quant:", updatedProductQuant)

    setTemporaryCart(currentTempCart => [...currentTempCart, updatedProductQuant])

  

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "in_cart": product.in_cart + 1
    })
  })
    .then(resp =>  resp.json())
    // .then(addedProduct => console.log("patched product:", addedProduct))
    .catch(err => alert(err))

    

    setTemporaryCart(currentTempCart => [...currentTempCart, updatedProductQuant])
  if (temporaryCart.filter(obj => obj.id === product.id).length > 0){
    console.log("temporary cart:", temporaryCart)
    if (cart.includes(product)){
      setSelectedProduct(updatedProductQuant)
    } else {
      console.log("hitting this one so why isn't it updating the product??")
      setSelectedProduct(updatedProductQuant)
      // setCart(currentCart => [...currentCart, updatedProductQuant])
    } 
  } else if (temporaryCart.filter(obj => obj.id === product.id).length === 0){
      if (cart.includes(product)){
        setSelectedProduct(updatedProductQuant)
      } else {
      setSelectedProduct(updatedProductQuant)
      setCart(currentCart => [...currentCart, updatedProductQuant])
    }
  }
}


const handleRemoveClick = (product) => {
  setRemoveProduct(product)
  setCart(currentCart => currentCart.filter(removeItem => product.id !== removeItem.id && removeItem.in_cart === 0))
}


  return (
    <div className="App">
      <Router>
        <InventoryContainer productsList={productsList} productQuantity={productQuantity} cart={cart} selectedProduct={selectedProduct} removeProduct={removeProduct} handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick}/>
      </Router>
    </div>
  );
}

export default App;
