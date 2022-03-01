import React from 'react';
import { DetailCard, Container } from "../../styled-components/styleIndex"
import { Link } from 'react-router-dom';


function ProductDetail({selectedProductDetail}) {
console.log("inside product detail", selectedProductDetail)
  return (
    <div>
        <br/><br/><br/>
        <h1>Product Details</h1>
        <DetailCard>
        <h5>{selectedProductDetail.department}</h5>
        <h3>{selectedProductDetail.name}</h3>
        <img src={selectedProductDetail.image} alt="test" />
        <h4>{selectedProductDetail.description}</h4>
        <h4>{selectedProductDetail.brand}
        <br/>
        ${selectedProductDetail.price_per_unit.toFixed(2)} / {selectedProductDetail.units} </h4>
        </DetailCard>
        <Link to="/products">
            <button>{"< <"} Back to Products</button>
        </Link>
    </div>
  )
}

export default ProductDetail;