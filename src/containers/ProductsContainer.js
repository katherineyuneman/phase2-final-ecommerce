import { useState, useEffect } from "react";
import ProductsFilter from "../components/products/ProductsFilter";
import ProductsList from "../components/products/ProductsList";
import ProductsSearch from "../components/products/ProductsSearch";
import { ProductFeatureContainer } from "../styled-components/styleIndex";


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

const handleSubmitSearch = (trackText) => {
  console.log(trackText)
  const filtered = productsList.filter(filterProducts => filterProducts.name.toLowerCase().includes(trackText.toLowerCase()))
  setFilteredProductsList(filtered)
}

const handleSearchReset = (event) => {
  console.log(event.target.value)
}



  return (
    <div>
      <ProductFeatureContainer>
      <ProductsFilter handleChangeDept={handleChangeDept}/>
      <ProductsSearch handleSubmitSearch={handleSubmitSearch} handleSearchReset={handleSearchReset}/>
      </ProductFeatureContainer>
      
      <ProductsList filteredProductsList={filteredProductsList} productsList={productsList} handleAddClick={handleAddClick}/>
    </div>
  )
}

export default ProductsContainer;