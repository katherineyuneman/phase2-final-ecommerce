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

  const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:3000/products")
      const data = await resp.json()
      setProductsList(data)
    } catch (error) {
       alert(error)
      }
  }

  useEffect(() => {
    fetchData();
  }, [])

  // set initial cart without any action
const productsInCart = 
productsList.filter(product => product.in_cart > 0)

useEffect(() => {
setCart(productsInCart);
}, [productsList])


  

  const handleAddClick = (product, countItemClick) => {
    console.log("props product:", product, "props timesClicked:", countItemClick)
    // setCountItemClick(countItemClick => countItemClick + 1)
    const updatedQuantity = countItemClick + product.in_cart
    console.log("updated quantity:", updatedQuantity)
    setProductQuantity(updatedQuantity)
    const updatedProductQuant = {...product, in_cart: updatedQuantity}
    console.log("updated product with quant:", updatedProductQuant)

    /// temporarily disabling vvvvv ///

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "in_cart": updatedQuantity
    })
  })
    .then(resp =>  resp.json())
    // .then(addedProduct => console.log("patched product:", addedProduct))
    .catch(err => alert(err))

    // console.log("temporary cart:", temporaryCart)

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
