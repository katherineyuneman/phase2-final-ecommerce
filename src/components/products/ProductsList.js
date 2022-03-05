import { ProductCard } from "./ProductCard"
import { Container } from "../../styled-components/styleIndex"

const ProductsList = ({ numberInput, handleAddClick, productsList, filteredProductsList }) => {

  let mappingProducts
  if (filteredProductsList.length === 0){
    mappingProducts = productsList.map(product => 
      <ProductCard key={product.id} handleAddClick={handleAddClick} product={product} numberInput={numberInput} />)
  } else if (filteredProductsList.length > 0){
      mappingProducts = filteredProductsList.map(product =>
        <ProductCard key={product.id} handleAddClick={handleAddClick} product={product} numberInput={numberInput}/>)
  }
    
    return (
      <div>
        <h2>Products</h2>
        <Container>{mappingProducts}</Container>
      </div>
    )
  }

export default ProductsList;