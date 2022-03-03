import { DropDown } from "../../styled-components/styleIndex"

const ProductsFilter = ({handleChangeDept}) => {

  return (
    <DropDown>
      <h4>Department Filter</h4>
        <select id="departments" onChange={handleChangeDept}>
        <option value="All">All</option>
	      <option value="Produce">Produce</option>
	      <option value="Dairy + Eggs">Dairy + Eggs</option>
	      <option value="Meat + Seafood">Meat + Seafood</option>
        <option value="Dry Goods + Pasta">Dry Goods + Pasta</option>
        </select>
    </DropDown>
  )
}

export default ProductsFilter