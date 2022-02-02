import CartCard from "../components/cart/CartCard"

const CartContainer = ({productsList}) => {

  
const eachProductInCart =  
  productsList.filter(product => product.in_cart === true).map(product => <CartCard key={product.id} product={product} />)


  return (
    <div>
      <h2>Cart</h2>
      <div style={{display:"flex", flexWrap:"wrap"}}>{eachProductInCart}</div>
    </div>
  )
}

export default CartContainer

