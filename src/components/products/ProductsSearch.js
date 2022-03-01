import { useState, useEffect } from "react";
import { SearchStyle } from "../../styled-components/styleIndex"


const ProductsSearch = ({ handleSubmitSearch, handleSearchReset }) => {

  const [ trackText, setTrackText ] = useState("")

  const handleSearchInputs = (e) => {
    setTrackText(e.target.value)
  }

  useEffect(() => {
    setTrackText('')
  },[handleSubmitSearch])

  return (
    <SearchStyle>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmitSearch(trackText)}
      }>
        <label htmlFor="search">Search product name</label><br/>
        <input type="text" name="searchInput" onChange={handleSearchInputs}></input>
        <br />
        <input type="submit" name="submit" value="Search" />
        <br />
        <input type="button" name= "reset" value="Reset Product List" onClick={handleSearchReset}/>
      </form>
    </SearchStyle>
  )
}

export default ProductsSearch;