import { ProductCard } from "./ProductCard"

const ProductsList = ({products}) => {
  const mappingProducts = products.map(product => <ProductCard key={product.id} product={product}/>)

  return (
    <div>
      <h2>Products</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>{mappingProducts}</div>
    </div>
  )
}

export default ProductsList
