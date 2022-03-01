import { CartCardStyle, LeftPiece, MiddleDescription, Quantity,TotalCost } from "../../styled-components/styleIndex"

const CartCard = ({handleAddCartClick, selectedRemoval, handleRemoveClick, cartFetch, cartProduct}) => {

  return (
    <CartCardStyle>
      <LeftPiece>
        <img src={cartProduct.image} alt="test"/>
      </LeftPiece>
      <MiddleDescription>
        {cartProduct.name}
        <br/>
        ${cartProduct.price_per_unit.toFixed(2)} / {cartProduct.units}
        {/* {cartProduct.inventory < 5 ? <h4 style={{backgroundColor:"red", color:"white"}}>Low Stock!</h4> : null} */}
      </MiddleDescription>
      <Quantity>
        <button onClick={() => handleRemoveClick(cartProduct)}>-</button>
        {selectedRemoval.product_id === cartProduct.id ? selectedRemoval.quantity : cartFetch.map(item => (item.product_id === cartProduct.id ? item.quantity : null))}
        <button onClick={() => handleAddCartClick(cartProduct)}>+</button>
      </Quantity>
      <TotalCost>
        ${cartFetch.map(item => (item.product_id === cartProduct.id ? (item.quantity * cartProduct.price_per_unit).toFixed(2) : null) )}
      </TotalCost> 
    </CartCardStyle>
  )
}

export default CartCard
