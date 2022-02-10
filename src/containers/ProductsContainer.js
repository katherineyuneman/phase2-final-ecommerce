import { useState, useEffect } from "react";
import ProductsFilter from "../components/products/ProductsFilter";
import ProductsList from "../components/products/ProductsList";
import ProductsSearch from "../components/products/ProductsSearch";

const ProductsContainer = ({productsList, handleAddClick}) => {

  // console.log("product container list:", productsList)

  const [ selectedDepartment, setSelectedDepartment] = useState("all")

  function handleDeptOnChange (e) {
    console.log(e.target.value)
    setSelectedDepartment(e.target.value)
    
  }

  // console.log("selectedDepartment:", selectedDepartment)

  const filteredProductsList = productsList.filter(filterProducts => filterProducts.department.toLowerCase() === selectedDepartment.toLowerCase())
// console.log("filteredProductsList:", filteredProductsList)

  return (
    <div>
      <ProductsFilter handleDeptOnChange={handleDeptOnChange}/>
      <ProductsList productsList={productsList} handleAddClick={handleAddClick}/>
      
    </div>
  )
}

export default ProductsContainer;