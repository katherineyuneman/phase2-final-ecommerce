import { useEffect, useState } from "react"

const ProductCard = ({handleAddClick, product}) => {


  const [ clicks, setClicks ] = useState(0)
  const [ productClicked, setProductClicked ] = useState ({})
  const [ objectClicked, setObjectClicked ] = useState([])



  useEffect (() => {
    setObjectClicked([])
    if (product.id === productClicked.id){
    setProductClicked(product)
    setClicks(clicks => clicks + 1)
    setObjectClicked({"item": productClicked.id, "countClick": clicks})
    } else {
    setProductClicked(product)
    setClicks(clicks + 1)
    setObjectClicked({"item": productClicked.id, "countClick": clicks})
    }
    }, [handleAddClick])
  
    
  
 
  return (
    <div style={{border: "solid", width:"150px", margin: "auto", height:"350px", padding:"1em"}}>
     <h5 style={{backgroundColor:"#8DA878", color:"white"}}>{product.department}</h5>
      <h3>{product.name}</h3>
      <img src={product.image} alt="test" style={{display:"flex", width:"100px", flexWrap:"wrap"}}/>
      <h4>{product.brand}</h4>
      <h6>
        ${product.price_per_unit.toFixed(2)}
          <br/>
        {product.units}
        </h6>
        {product.inventory < 5 ? <h4 style={{backgroundColor:"red", color:"white"}}>Low Stock!</h4> : null}
        

      <button className="add" onClick={() => handleAddClick(product, objectClicked )}>Add to Cart</button>
    </div>
  )
}

export { ProductCard } ;
