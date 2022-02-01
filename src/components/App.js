import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from 'src/components/navigation/NavBar.js';
import Home from './Home';
import ProductsContainer from '../containers/ProductsContainer';
import ProductCard from './products/ProductCard';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
        <Route path ="/products/:id">
            <ProductCard />
          </Route>
          <Route path ="/products">
            <ProductsContainer />
          </Route>
          <Route path ="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
