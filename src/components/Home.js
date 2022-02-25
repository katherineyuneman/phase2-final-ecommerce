import { HomeContainer } from "../styled-components/styleIndex"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to THE Grocery Store</h1>
      <br />
      <NavLink
          exact
          // style={linkStyle}
          to="/products"

        >
        <button>Start Shopping {'>>'} </button>
      </NavLink>
      </HomeContainer>
  )
}

export default Home
