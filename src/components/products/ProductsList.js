import { ProductCard } from "./ProductCard"
const ProductsList = ({handleClick, productsList}) => {

  const mappingProducts = productsList.map(product => <ProductCard key={product.id} product={product} handleClick={handleClick}/>)
  return (
    <div>
      <h2>Products</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>{mappingProducts}</div>
    </div>
  )
}

export default ProductsList;
