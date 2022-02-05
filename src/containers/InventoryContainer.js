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
  const [ removeProduct, setRemoveProduct ] = useState({})
  const [ productQuantity, setProductQuantity ] = useState(selectedProduct.in_cart)
  
  
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

  const productsInCart = productsList.filter(product => product.in_cart > 0)

  useEffect(() => {
    setCart(productsInCart)
  }, [productsList])

 //item click & PATCH request

  const handleAddClick = (product) => {
    console.log("product after click:", product)
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

  // console.log("selectedproduct", selectedProduct.in_)
  // useEffect(() => { 
  //   fetch(`http://localhost:3000/products/${selectedProduct.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //   },
  //   body:JSON.stringify({
  //     "in_cart": productQuantity
  //   })
  // })
  //   .then(resp =>  resp.json())
  //   .then(addedProduct => console.log("patched product:", addedProduct))
  //   // .then(addedProduct => handleSetCart(addedProduct))
  //   .catch(err => alert(err))
  // }, [selectedProduct, productQuantity])


  useEffect(() => { 
    fetch(`http://localhost:3000/products/${removeProduct.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "in_cart": productQuantity
    })
  })
    .then(resp =>  resp.json())
    .then(removedProduct => console.log("removed product:", removedProduct))
    // .then(addedProduct => handleSetCart(addedProduct))
    .catch(err => alert(err))
  }, [removeProduct])


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
            <ProductsContainer productsList={productsList} handleClick={handleAddClick}/>
          </Route>
          <Route path ="/cart">
            <CartContainer cart={cart} selectedProduct={selectedProduct} handleRemoveClick={handleRemoveClick}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default InventoryContainer;
