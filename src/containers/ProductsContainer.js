import { useState, useEffect } from "react";
import ProductsFilter from "../components/products/ProductsFilter";
import ProductsList from "../components/products/ProductsList";
import ProductsSearch from "../components/products/ProductsSearch";

const ProductsContainer = () => {

  const [ products, setProducts ] = useState([])

  const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:3000/products")
      const data = await resp.json()
      setProducts(data)
    } catch (error) {
       alert(error)
      }

  }

 useEffect(() => {
  fetchData()
 }, [])

  return (
    <div>
      <ProductsFilter />
      <ProductsList products={products}/>
      <ProductsSearch />

      
    </div>
  )
}

export default ProductsContainer;