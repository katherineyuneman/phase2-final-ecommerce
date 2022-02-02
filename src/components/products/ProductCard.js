const ProductCard = ({product}) => {

  const handleClick = (e) => {
    console.log("product name:", product.name, "product inventory:", product.inventory)
  }
  return (
    <div style={{border: "solid", width:"150px", margin: "auto", height:"350px", padding:"1em"}}>
     <h5 style={{backgroundColor:"black", color:"white"}}>{product.department}</h5>
      <h3>{product.name}</h3>
      <img src={product.image} alt="test" style={{display:"flex", width:"100px", flexWrap:"wrap"}}/>
      <h4>{product.brand}</h4>
      <h6>
        ${product.price_per_unit.toFixed(2)}
          <br/>
        {product.units}
        </h6>
        {product.inventory < 5 ? <h4 style={{backgroundColor:"red", color:"white"}}>Low Stock!</h4> : null}
        

      <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}

export { ProductCard } ;
