import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer';
import { ProductCard } from '../components/products/ProductCard';
import CartContainer from '../containers/CartContainer';
import NavBar from '../components/navigation/NavBar';

const InventoryContainer = () => {

  const [ selectedProduct, setSelectedProduct ] = useState({})
  const [ productsList, setProductsList ] = useState([])
  const [ cart, setCart ] = useState([])
  
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
    fetchData();
  }, [])

  const productsInCart = productsList.filter(product => !!product.in_cart)

  useEffect(() => {
    setCart(productsInCart)
  }, [productsList])

 //item click & PATCH request

  const handleClick = (product) => {
    setSelectedProduct(product)
    setCart(currentCart => [...currentCart, product])
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
    // .then(addedProduct => handleSetCart(addedProduct))
    .catch(err => alert(err))
  }, [selectedProduct])

  // const handleSetCart = (product) => {
  //   setCart(currentCart => [...currentCart, product])
  // }

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
            <CartContainer cart={cart} selectedProduct={selectedProduct}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default InventoryContainer;
