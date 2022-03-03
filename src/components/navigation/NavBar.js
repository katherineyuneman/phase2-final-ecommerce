import { NavLink } from 'react-router-dom'
import { Header} from "../../styled-components/styleIndex"

const NavBar = ({totalInCart}) => {

  return (
    <div className='nav-wrapper'>
      <Header>
        <h1>Grocery Store</h1>
        <nav>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/products">
            <li>Products</li>
          </NavLink>
          <NavLink to="/cart">
            <li> Cart ({totalInCart})</li>
          </NavLink>
       </nav>
      </Header>
    </div>
  )
}

export default NavBar;
