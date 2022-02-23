import React from 'react'
import {PopupCheckout} from "../../styled-components/styleIndex"

const CheckoutForm = () => {
  return (
    <PopupCheckout>
    <div>
      <div className="popup-box">
      <div className="box">
      <span className="close-icon" >x</span>
      <h2> Check-Out</h2>
      </div>
    </div>
    </div>
    </PopupCheckout>
  )
}

export default CheckoutForm
