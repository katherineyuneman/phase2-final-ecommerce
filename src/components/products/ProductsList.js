import { ProductCard } from "./ProductCard"
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
      <div style={{display:"flex", flexWrap:"wrap"}}>{mappingProducts}</div>
    </div>
  )
}

export default ProductsList;