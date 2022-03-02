import React, { useState, useEffect } from 'react';
import { DetailCard, Container } from "../../styled-components/styleIndex"
import { Link } from 'react-router-dom';


function ProductDetail(props) {

const [ productDetail, setProductDetail ] = useState({})

useEffect(() => {
    fetch (`http://localhost:3000/products/${props.match.params.id}`)
    .then(response => response.json())
    .then(data => setProductDetail(data))
    .catch(err => alert(err))
}, [])

console.log("product detail:",productDetail)

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
            <h4>${productDetail.price_per_unit} / {productDetail.units}</h4>
        </DetailCard>
        <Link to="/products">
            <button>{"< <"} Back to Products</button>
        </Link>
    </div>
  )
}

export default ProductDetail;