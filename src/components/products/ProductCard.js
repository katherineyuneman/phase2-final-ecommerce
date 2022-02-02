const ProductCard = ({product}) => {
  return (
    <div style={{border: "solid", width:"150px", margin: "auto", height:"225px"}}>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.image} style={{display:"flex", width:"100px", flexWrap:"wrap"}}/>
      <h4>{product.likes}</h4>

    </div>
  )
}

export { ProductCard } ;
