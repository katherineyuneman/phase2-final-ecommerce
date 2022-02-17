import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer';
import { ProductCard } from '../components/products/ProductCard';
import CartContainer from '../containers/CartContainer';
import NavBar from '../components/navigation/NavBar';

const InventoryContainer = ({selectedRemoval, handleRemoveClick, productsList, cart, selectedProduct, handleAddClick}) => {

 
  // console.log("SELECTED PRODUCT:", productQuantity, selectedProduct, selectedProduct.in_cart)



  // console.log("product quantity passed down:",productQuantity);
  // const updatedProduct = {...product, in_cart: productQuantity}
  
  // console.log("updated product:", updatedProduct)

  // useEffect(() => {
  //   const clicksPluSQuant = countAddClicks + selectedProduct.in_cart
  //   setProductQuantity(clicksPluSQuant)
  // }, [selectedProduct])

  // console.log("selectedproduct", selectedProduct.in_cart)

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
  //   .catch(err => alert(err))
  // }, [countAddClicks])
  

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


  // useEffect(() => { 
  //   fetch(`http://localhost:3000/products/${removeProduct.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //   },
  //   body:JSON.stringify({
  //     "in_cart": productQuantity
  //   })
  // })
  //   .then(resp =>  resp.json())
  //   .then(removedProduct => console.log("removed product:", removedProduct))
  //   // .then(addedProduct => handleSetCart(addedProduct))
  //   .catch(err => alert(err))
  // }, [removeProduct])


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
            <ProductsContainer productsList={productsList} handleAddClick={handleAddClick}/>
          </Route>
          <Route path ="/cart">
            <CartContainer selectedRemoval={selectedRemoval} productsList={productsList} cart={cart} handleRemoveClick={handleRemoveClick}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default InventoryContainer;