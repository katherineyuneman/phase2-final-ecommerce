import { ProductCard } from "./ProductCard"
const ProductsList = ({handleAddClick, productsList}) => {

  const mappingProducts = productsList.map(product => <ProductCard key={product.id} handleAddClick={handleAddClick} product={product} />)
  return (
    <div>
      <h2>Products</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>{mappingProducts}</div>
    </div>
  )
}

export default ProductsList;