import { useState } from "react";
import ProductsFilter from "../components/products/ProductsFilter";
import ProductsList from "../components/products/ProductsList";
import ProductsSearch from "../components/products/ProductsSearch";
import { ProductFeatureContainer, DropDown, SearchStyle } from "../styled-components/styleIndex";


const ProductsContainer = ({productsList, handleAddClick}) => {

  const [ filteredProductsList, setFilteredProductsList ] = useState(productsList)

  const handleChangeDept = (event) => {
    setFilteredProductsList(productsList)
    if (event.target.value === "All"){
      setFilteredProductsList(productsList)
    } else {
        const filtered = productsList.filter(filterProducts => filterProducts.department === event.target.value)
        setFilteredProductsList(filtered)
    }
  }

const handleSubmitSearch = (trackText) => {
  const filtered = productsList.filter(filterProducts => filterProducts.name.toLowerCase().includes(trackText.toLowerCase()))
  setFilteredProductsList(filtered)
}

const handleSearchReset = () => {
  setFilteredProductsList(productsList)
  document.querySelector('[name="searchInput"]').value=''
}

  return (
    <div>
      <ProductFeatureContainer>
        <DropDown>
          <ProductsFilter handleChangeDept={handleChangeDept}/>
        </DropDown>
        <SearchStyle>
          <ProductsSearch handleSubmitSearch={handleSubmitSearch} handleSearchReset={handleSearchReset}/>
        </SearchStyle>
      </ProductFeatureContainer>
      <ProductsList
        filteredProductsList={filteredProductsList}
        productsList={productsList}
        handleAddClick={handleAddClick}
      />
    </div>
  )
}

export default ProductsContainer;