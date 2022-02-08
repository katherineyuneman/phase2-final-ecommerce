import { useState, useEffect } from "react";
import ProductsFilter from "../components/products/ProductsFilter";
import ProductsList from "../components/products/ProductsList";
import ProductsSearch from "../components/products/ProductsSearch";

const ProductsContainer = ({productsList, handleAddClick}) => {

  // console.log("product container list:", productsList)
  return (
    <div>
      <ProductsList productsList={productsList} handleAddClick={handleAddClick}/>
      
    </div>
  )
}

export default ProductsContainer;