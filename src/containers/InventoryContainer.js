import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer';
import { ProductCard } from '../components/products/ProductCard';
import CartContainer from '../containers/CartContainer';
import NavBar from '../components/navigation/NavBar';

const InventoryContainer = () => {

  const [ selectedProduct, setSelectedProduct ] = useState({})
  const [ productsList, setProductsList ] = useState([])

  //initial GET request
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
  fetchData()
 }, [])


 //item click & PATCH request

  const handleClick = (product) => {
    setSelectedProduct(product)
  }


  useEffect(() => { 
    fetch(`http://localhost:3000/products/${selectedProduct.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "in_cart": true
    })
  })
    .then(resp =>  resp.json())
    .then(addedProduct =>  console.log(addedProduct.name, addedProduct.id, addedProduct.in_cart))
  }, [selectedProduct])



  return (
    <div>
      <Router>
      <NavBar />
        <Switch>
        <Route path ="/products/:id">
            <ProductCard />
          </Route>
          <Route path ="/products">
            <ProductsContainer productsList={productsList} handleClick={handleClick}/>
          </Route>
          <Route path ="/cart">
            <CartContainer productsList={productsList}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default InventoryContainer;
