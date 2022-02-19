import { useState } from "react";

const ProductsSearch = ({handleSubmitSearch}) => {

  const [ trackText, setTrackText ] = useState("")

  const handleSearchInputs = (e) => {
    console.log(e.target.value)
    setTrackText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={e => {e.preventDefault();
        handleSubmitSearch(trackText)}
      }>
      <label htmlFor="search">Search product name</label>
        <input type="text" onChange={handleSearchInputs}></input>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default ProductsSearch;