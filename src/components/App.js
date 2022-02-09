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


  const handleAddClick = (product, objectClicked) => {
//     console.log("props product:", product, "props timesClicked:", click)
//   let updatedProductItemWithClicks = productsList.filter(intakeProduct => intakeProduct.id === product.id)
//   console.log("pre-updated array:", updatedProductItemWithClicks)
//   updatedProductItemWithClicks = {...product, "in_cart": product.in_cart + click}
// console.log("updated object/array:", updatedProductItemWithClicks)
// debugger;
    

    console.log("props product:", product, "props timesClicked:", objectClicked)
    console.log("object clicked inside handleaddclick:", objectClicked)
    console.log("original array of objects:", arrayClickedObjects)
    const updatedArray = [...arrayClickedObjects , objectClicked]
    setArrayClickedObjects(updatedArray)
    // setCountItemClick(countItemClick => countItemClick + 1)
    console.log("updated array", updatedArray)


    let updatedQuantity
    let updatedProductQuant = []
    if (product.id === product.id){
    updatedQuantity = objectClicked.countClick + product.in_cart
    console.log("updated quantity:", updatedQuantity)
    setProductQuantity(updatedQuantity)

    
    updatedProductQuant = productsList.map(item => {
      if (item.id===product.id) { return {...item, in_cart: updatedQuantity} ;
      } else return item
    })
      console.log("updated product with quant:", updatedProductQuant)
     
    
    } else {
      updatedQuantity = product.in_cart
      setProductQuantity(updatedQuantity)
      updatedProductQuant = product
    }
    /// temporarily disabling vvvvv ///

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      "in_cart": updatedQuantity
    })
  })
    .then(resp =>  resp.json())
    // .then(addedProduct => console.log("patched product:", addedProduct))
    .catch(err => alert(err))

    // console.log("temporary cart:", temporaryCart)

  setTemporaryCart(currentTempCart => [...currentTempCart, updatedProductQuant])
  if (temporaryCart.filter(obj => obj.id === product.id).length > 0){
    console.log("temporary cart:", temporaryCart)
    if (cart.includes(product)){
      setSelectedProduct(updatedProductQuant)
    } else {
      console.log("hitting this one so why isn't it updating the product??")
      setSelectedProduct(updatedProductQuant)
      // setCart(currentCart => [...currentCart, updatedProductQuant])
    } 
  } else if (temporaryCart.filter(obj => obj.id === product.id).length === 0){
      if (cart.includes(product)){
        setSelectedProduct(updatedProductQuant)
      } else {
      setSelectedProduct(updatedProductQuant)
      setCart(currentCart => [...currentCart, updatedProductQuant])
    }

      
    }


  
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
