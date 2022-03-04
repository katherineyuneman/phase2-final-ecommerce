import { useState } from "react";
import ProductsFilter from "../components/products/ProductsFilter";
import ProductsList from "../components/products/ProductsList";
import ProductsSearch from "../components/products/ProductsSearch";
import { ProductFeatureContainer, DropDown, SearchStyle } from "../styled-components/styleIndex";


const ProductsContainer = ({productsList, handleAddClick}) => {

  const [ filteredProductsList, setFilteredProductsList ] = useState(productsList)
  const [ sortAsc, setSortAsc ] = useState(false)

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

const handleSort = (event) => {
  const ascText = "Sort $ Low to High"
  const descText = "Sort $ Hight to Low"
  setSortAsc(!sortAsc)

  if (sortAsc === false) {
    event.target.textContent = ascText
    const sortedAscProducts = productsList.sort(function (a,b){
      return a.price_per_unit - b.price_per_unit
    } )
    setFilteredProductsList(priorSorted => [...sortedAscProducts])
  } else {
    event.target.textContent = ascText
    const sortedDescProcuts = productsList.sort(function (a,b){
      return b.price_per_unit - a.price_per_unit
    } )
    setFilteredProductsList(priorSorted => [...sortedDescProcuts])}

}

  return (
    <div>
      <ProductFeatureContainer>
        <DropDown>
          <ProductsFilter handleChangeDept={handleChangeDept}/>
        </DropDown>
        <SearchStyle>
          <ProductsSearch handleSort={handleSort} handleSubmitSearch={handleSubmitSearch} handleSearchReset={handleSearchReset}/>
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