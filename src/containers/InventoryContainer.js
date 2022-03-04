import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer';
import CartContainer from '../containers/CartContainer';
import NavBar from '../components/navigation/NavBar';
import Home from '../components/Home';
import ProductDetail from '../components/products/ProductDetail';

const InventoryContainer = (
  { isSubmitted, submitForm, totalInCart, handleAddCartClick,
    selectedRemoval, handleRemoveClick, productsList, cart, handleAddClick
}) => {

  return (
    <div>
      <Router>
        <NavBar totalInCart={totalInCart}/>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/cart">
            <CartContainer
              isSubmitted={isSubmitted}
              submitForm={submitForm}
              selectedRemoval={selectedRemoval}
              productsList={productsList}
              cart={cart}
              handleRemoveClick={handleRemoveClick}
              handleAddCartClick={handleAddCartClick}
            />
          </Route>
          <Route exact path="/products">
            <ProductsContainer
              productsList={productsList}
              handleAddClick={handleAddClick}
            />
          </Route>
          <Route path="/products/:id" component={ProductDetail}/>
        </Switch>
      </Router>
    </div>
  )
}

export default InventoryContainer;