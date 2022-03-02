import React, { useState, useEffect } from 'react';
import { DetailCard, DetailButton } from "../../styled-components/styleIndex"
import { Link } from 'react-router-dom';


function ProductDetail(props) {

const [ productDetail, setProductDetail ] = useState({})

useEffect(() => {
    fetch (`http://localhost:3000/products/${props.match.params.id}`)
    .then(response => response.json())
    .then(data => setProductDetail(data))
    .catch(err => alert(err))
}, [])


  return (
    <div>
        <br/><br/><br/>
        <h1>Product Details</h1>
        <DetailCard>
            <h5>{productDetail.department}</h5>
            <h3>{productDetail.name}</h3>
            <img src={productDetail.image} alt="test" />
            <h4>{productDetail.description}</h4>
            <h3>{productDetail.brand}</h3>
            {/* <h4>${productDetail.price_per_unit.toFixed(2)} / {productDetail.units}</h4> */}
        </DetailCard>
        <DetailButton>
        <Link to="/products">
            <button>{"< <"} Back to Products</button>
        </Link>
        </DetailButton>
    </div>
  )
}

export default ProductDetail;