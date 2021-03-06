import { Card } from "../../styled-components/styleIndex"
import { Link } from "react-router-dom"
import { useState } from "react"

const ProductCard = ({numberInput, handleAddClick, product}) => {

  const [ number, setNumber ] = useState(0)
  
  const handleIncrement = () => {
    console.log(parseInt(numberInput))
    setNumber(number => number + parseInt(numberInput))
  }

  return (
    <Card>
     <h5>{product.department}</h5>
     <h3>{product.name}</h3>
     <Link to={`/products/${product.id}`}>
        <img src={product.image} alt="test" />
     </Link>
     <h4>{product.brand}</h4>
     <h6> ${product.price_per_unit.toFixed(2)} / {product.units} </h6>
     <button className="quantity" onClick={handleIncrement}>{number}</button>
     <button className="add" onClick={() => handleAddClick(product)}>Add to Cart</button>
    </Card>
  )
}

export { ProductCard } ;