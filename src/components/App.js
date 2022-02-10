import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import InventoryContainer from '../containers/InventoryContainer';


function App() {

  
  const [ productsList, setProductsList ] = useState([])
  const [ cartList, setCartList ] = useState([])
  const [ tempCartList, setTempCartList ] = useState([...cartList])


  const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:3000/products")
      const data = await resp.json()
      setProductsList(data)
    } catch (error) {
       alert(error)
      }
  }

  const fetchCart = async () => {
    try {
      const resp = await fetch("http://localhost:3000/cart")
      const data = await resp.json()

      setCartList(data)
    } catch (error) {
       alert(error)
      }
  }



  useEffect(() => {
    fetchData();
    fetchCart();
  }, [])
  // console.log("-----------------------------------------------------------------------------")
  
  // console.log("-----------------------------------------------------------------------------")

  // set initial cart without any action
// const productsInCart = 
// productsList.filter(product => product.in_cart > 0)

// useEffect(() => {
// setCart(productsInCart);
// }, [productsList])


  const handleAddClick = (product) => {
    console.log(product)
    console.log(productsList, cartList)


  
    

    // setTempCartList(previousCartList => [...previousCartList, {id:0, product_id: product.id, quantity: 1}])
    // console.log(tempCartList)
    // // 
    
    const findProductId = !!tempCartList.find(item => item.product_id === product.id)

    setTempCartList(previousCartList =>[...previousCartList])
    if (!findProductId) {
      setTempCartList(previousCartList =>[...cartList, ...previousCartList, {id:0, product_id: product.id, quantity: 1}])
    }
    
    else {
      console.log("true")
      setTempCartList(previousCartList =>[...cartList, ...previousCartList, {id:0, product_id: product.id, quantity:previousCartList.quantity+1}]
        )
    }
    
   

    console.log(tempCartList)
    
  }



// const handleRemoveClick = (product) => {
//   setRemoveProduct(product)
//   setCart(currentCart => currentCart.filter(removeItem => product.id !== removeItem.id && removeItem.in_cart === 0))
// }


  return (
    <div className="App">
      <Router>
        <InventoryContainer productsList={productsList} handleAddClick={handleAddClick} />
      </Router>
    </div>
  );
}

export default App;
