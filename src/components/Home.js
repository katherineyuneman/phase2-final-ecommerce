import { HomeContainer } from "../styled-components/styleIndex"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Grocery Store</h1>
      <br />
      <Link
          exact
          // style={linkStyle}
          to="/products"

        >
        <button>Start Shopping {'>>'} </button>
      </Link>
      </HomeContainer>
  )
}

export default Home
