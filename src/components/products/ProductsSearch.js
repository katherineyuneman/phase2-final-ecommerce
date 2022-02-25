import { useState } from "react";
import { SearchStyle } from "../../styled-components/styleIndex"


const ProductsSearch = ({handleSubmitSearch, handleSearchReset}) => {

  const [ trackText, setTrackText ] = useState("")

  const handleSearchInputs = (e) => {
    setTrackText(e.target.value)
  }

  return (
    <SearchStyle>
      <form onSubmit={e => {e.preventDefault();
        handleSubmitSearch(trackText)}
      }>
      <label htmlFor="search">Search product name</label><br/>
        <input type="text" onChange={handleSearchInputs}></input>
        <br />
        <input type="submit" value="Search" />
        {/* <input type="button" value="Reset" onClick={(e) => handleSearchReset}/> */}
        
      </form>
      </SearchStyle>
  )
}

export default ProductsSearch;