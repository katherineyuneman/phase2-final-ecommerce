import { ProductCard } from "./ProductCard"

const ProductsList = ({products}) => {
  const eachProduct = products.map(product => <ProductCard product={product}/>)

  return (
    <div>
      {eachProduct}
    </div>
  )
}

export default ProductsList
