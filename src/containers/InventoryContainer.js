import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductsContainer from '../containers/ProductsContainer';
import CartContainer from '../containers/CartContainer';
import NavBar from '../components/navigation/NavBar';
import Home from '../components/Home';

const InventoryContainer = (
  { isSubmitted, submitForm, totalInCart, handleAddCartClick,
    selectedRemoval, handleRemoveClick, productsList, cart, handleAddClick
}) => {

  return (
    <div>
      <Router>
        <NavBar totalInCart={totalInCart}/>
        <Switch>
          <Route path ="/products">
            <ProductsContainer
              productsList={productsList}
              handleAddClick={handleAddClick}
            />
          </Route>
          <Route path ="/cart">
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
          <Route path ="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default InventoryContainer;