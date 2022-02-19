import { useState, useEffect } from "react";
import ProductsFilter from "../components/products/ProductsFilter";
import ProductsList from "../components/products/ProductsList";
import ProductsSearch from "../components/products/ProductsSearch";

const ProductsContainer = ({productsList, handleAddClick}) => {


  
  const [ filteredProductsList, setFilteredProductsList ] = useState(productsList)

  const handleChangeDept = (event) => {
    console.log(event.target.value)
    setFilteredProductsList(productsList)

    if (event.target.value === "All"){
      setFilteredProductsList(productsList)
    } else {
      console.log("inside else")
      const filtered = productsList.filter(filterProducts => filterProducts.department === event.target.value)
      setFilteredProductsList(filtered)
      console.log("filtered products from product container:", filteredProductsList)
      
    }
  }

  
console.log("filtered product list:", filteredProductsList)


  return (
    <div>
      <ProductsFilter handleChangeDept={handleChangeDept}/>
      <ProductsList filteredProductsList={filteredProductsList} productsList={productsList} handleAddClick={handleAddClick}/>
      
    </div>
  )
}

export default ProductsContainer;