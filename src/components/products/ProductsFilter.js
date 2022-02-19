import { useState } from "react/cjs/react.development"

const ProductsFilter = ({handleChangeDept}) => {


  
  return (
    <div>
      <span>
      <h4>Department Filter</h4>
        <select id="departments" onChange={handleChangeDept}>
        <option value="All">All</option>
	      <option value="Produce">Produce</option>
	      <option value="Dairy + Eggs">Dairy + Eggs</option>
	      <option value="Meat + Seafood">Meat + Seafood</option>
        <option value="Dry Goods + Pasta">Dry Goods + Pasta</option>
        </select>
      </span>

    </div>
  )
}

export default ProductsFilter