import { ProductCard } from "./ProductCard"
import styled from 'styled-components'


const ProductsList = ({handleAddClick, productsList, filteredProductsList}) => {

let mappingProducts
if (filteredProductsList.length === 0){
  mappingProducts = productsList.map(product => <ProductCard key={product.id} handleAddClick={handleAddClick} product={product} />)
} else if (filteredProductsList.length > 0){
  mappingProducts = filteredProductsList.map(product => <ProductCard key={product.id} handleAddClick={handleAddClick} product={product} />)
}

  
  return (
    <div>
      <h2>Products</h2>
      <Container>{mappingProducts}</Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

// style={{display:"flex", flexWrap:"wrap"}}

export default ProductsList;