import { NavLink } from 'react-router-dom'
import { Header} from "../../styled-components/styleIndex"

// const linkStyle = {
//   width: "100%",
//   margin: "5% 0 1%",
//   padding: "1em",
//   color: "black",
//   backgroundColor: "#8DA878",
//   fontWeight: "bold"

// }

const NavBar = ({totalInCart}) => {

  return (
    <div className='nav-wrapper'>
      <Header>
        <h1>Grocery Store</h1>
        <nav>
        <NavLink
          exact
          // style={linkStyle}
          to="/"

        ><li>
        Home
        </li>
      </NavLink>

      <NavLink
        exact
        // style={linkStyle}
        to="/products"

      >
       <li>
        Products
        </li>
      </NavLink>

      <NavLink
      
        exact
        // style={linkStyle}
        to="/cart"

      >
       <li>
        Cart ({totalInCart})
        </li>
      </NavLink>
      </nav>
    </Header>
    </div>
  )
}

export default NavBar;
