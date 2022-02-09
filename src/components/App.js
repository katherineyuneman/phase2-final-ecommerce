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
  const [ arrayClickedObjects, setArrayClickedObjects ] = useState([])
  const [ countClicks, setCountClicks ] = useState(0)

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


  const handleAddClick = (product) => {
//     console.log("props product:", product, "props timesClicked:", click)
//   let updatedProductItemWithClicks = productsList.filter(intakeProduct => intakeProduct.id === product.id)
//   console.log("pre-updated array:", updatedProductItemWithClicks)
//   updatedProductItemWithClicks = {...product, "in_cart": product.in_cart + click}
// console.log("updated object/array:", updatedProductItemWithClicks)
// debugger;


    console.log(product)
  setCountClicks(previousClicks => previousClicks + 1)
const updatedProductsArray = productsList.map(item => {
  if (item.id === product.id) {
    return {...item, in_cart: item.in_cart + countClicks}
  } else { return item }
})
setArrayClickedObjects(updatedProductsArray)
console.log("arrayClickedObjects:", arrayClickedObjects.in_cart)

const selectedItem_inCart = updatedProductsArray.filter(item => item.id === product.id).map(item => {
  return {...item, in_cart: item.in_cart + countClicks}})

console.log("selected item in cart", (selectedItem_inCart), selectedItem_inCart.in_cart)
 


    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "in_cart": selectedItem_inCart.in_cart
    })
  })
    .then(resp =>  resp.json())
    .then(addedProduct => console.log("patched product:", addedProduct, selectedItem_inCart.in_cart, product.id))
    .catch(err => alert(err))

    


  
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
