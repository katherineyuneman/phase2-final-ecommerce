import { NavLink } from 'react-router-dom'

const linkStyle = {
  width: "100%",
  margin: "5% 0 1%",
  padding: "1em",
  color: "black",
  backgroundColor: "rgb(2555,120,44)",
  fontWeight: "bold",

}

const NavBar = () => {
  return (
    <div>
      <NavLink
      activeStyle={{
        fontWeight: "bolder",
        color: "red"
      }}
        exact
        style={linkStyle}
        to="/"

      >
        Home
      </NavLink>

      <NavLink
      activeStyle={{
        fontWeight: "bolder",
        color: "red"
      }}
        exact
        style={linkStyle}
        to="/products"

      >
        Products
      </NavLink>

      <NavLink
      activeStyle={{
        fontWeight: "bolder",
        color: "red"
      }}
        exact
        style={linkStyle}
        to="/cart"

      >
        Cart
      </NavLink>


    </div>
  )
}

export default NavBar;
