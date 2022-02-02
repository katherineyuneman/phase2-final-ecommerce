import { useState, useEffect } from "react";
import ProductsFilter from "../components/products/ProductsFilter";
import ProductsList from "../components/products/ProductsList";
import ProductsSearch from "../components/products/ProductsSearch";

const ProductsContainer = ({handleClick, productsList}) => {

  console.log("product container list:", productsList)
  return (
    <div>
      <ProductsList productsList={productsList} handleClick={handleClick}/>
      
    </div>
  )
}

export default ProductsContainer;