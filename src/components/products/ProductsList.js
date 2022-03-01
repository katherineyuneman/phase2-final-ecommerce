import { ProductCard } from "./ProductCard"
import { Container } from "../../styled-components/styleIndex"

const ProductsList = ({ handleProductClick, handleAddClick, productsList, filteredProductsList }) => {

  let mappingProducts
  if (filteredProductsList.length === 0){
    mappingProducts = productsList.map(product => 
      <ProductCard key={product.id} handleAddClick={handleAddClick} handleProductClick={handleProductClick} product={product} />)
  } else if (filteredProductsList.length > 0){
      mappingProducts = filteredProductsList.map(product =>
        <ProductCard key={product.id} handleAddClick={handleAddClick} handleProductClick={handleProductClick} product={product} />)
  }
    
    return (
      <div>
        <h2>Products</h2>
        <Container>{mappingProducts}</Container>
      </div>
    )
  }

export default ProductsList;