import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import InventoryContainer from '../containers/InventoryContainer';


function App() {
  

  return (
    <div className="App">
      <Router>
        <InventoryContainer />
      </Router>
    </div>
  );
}

export default App;
