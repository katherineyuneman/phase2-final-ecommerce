import { useEffect, useState } from "react"
import { Card } from "../../styled-components/styleIndex"

const ProductCard = ({handleAddClick, product}) => {

  
 
  return (
    <Card>
     <h5>{product.department}</h5>
      <h3>{product.name}</h3>
      <img src={product.image} alt="test" />
      <h4>{product.brand}</h4>
      <h6>
        ${product.price_per_unit.toFixed(2)} /
          <br/>
        {product.units}
        </h6>
        

      <button className="add" onClick={() => handleAddClick(product)}>Add to Cart</button>
      {/* {product.inventory < 5 ? <h4 className="stock">Low Stock!</h4> : null} */}
    </Card>
  )
}

export { ProductCard } ;