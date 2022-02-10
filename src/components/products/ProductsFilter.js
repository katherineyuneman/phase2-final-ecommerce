import { useState } from "react/cjs/react.development"

const ProductsFilter = ({handleDeptOnChange}) => {

  
  return (
    <div>
      <span>
      <h4>Department Filter</h4>
        <select id="departments" onChange={handleDeptOnChange}>
        <option value="all">All</option>
	      <option value="produce">Produce</option>
	      <option value="dairy">Dairy + Eggs</option>
	      <option value="meat">Meat + Seafood</option>
        <option value="drygoods">Dry Goods + Pasta</option>
        </select>
      </span>

    </div>
  )
}

export default ProductsFilter
