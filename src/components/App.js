import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import InventoryContainer from '../containers/InventoryContainer';


function App() {

  const [ selectedProduct, setSelectedProduct ] = useState({})
  const [ productsList, setProductsList ] = useState([])
  const [ cart, setCart ] = useState([])
  const [ removeProduct, setRemoveProduct ] = useState({})
  const [ countAddClicks, setCountAddClicks ] = useState(0)

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

  const productsInCart = productsList.filter(product => product.in_cart > 0)

  useEffect(() => {
    setCart(productsInCart)
  }, [productsList])

  const handleAddClick = (product) => {
    console.log("product after click:", product)
    setCountAddClicks(startClicks => startClicks + 1)
    if (!cart.includes(product)){
      setSelectedProduct(product)
      setCart(currentCart => [...currentCart, product])
    } else {
      setSelectedProduct(product)
    

  }
}

const handleRemoveClick = (product) => {
  setRemoveProduct(product)
  setCart(currentCart => currentCart.filter(removeItem => product.id !== removeItem.id && removeItem.in_cart === 0))
}


  return (
    <div className="App">
      <Router>
        <InventoryContainer countAddClicks={countAddClicks} productsList={productsList} cart={cart} selectedProduct={selectedProduct} removeProduct={removeProduct} handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick}/>
      </Router>
    </div>
  );
}

export default App;
