import React from 'react'
import {PopupCheckout} from "../../styled-components/styleIndex"

const CheckoutForm = ({totalCost, togglePopup}) => {
  return (
    <PopupCheckout>
    <div>
      <div className="popup-box">
      <div className="box">
      <span className="close-icon" onClick={togglePopup}>x</span>
      <h3> Check-Out</h3>
      <form>
      <label>Address line 1:
        <input type="text" name="address" />
      </label>
      <br />
      <label>Address line 2:
        <input type="text" name="address" />
      </label>
      <br />
      <label>Zip Code:
        <input type="text" name="zipcode" />
      </label>
      <br />
      <label>City:
        <input type="text" name="zipcode" />
      </label>
      <br/>
      <label>State: 
      <select id="country-state" name="country-state">
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AS">American Samoa</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="UM-81">Baker Island</option>
    <option value="CA">California</option>
    <option value="CO">Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="DC">District of Columbia</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="GU">Guam</option>
    <option value="HI">Hawaii</option>
    <option value="UM-84">Howland Island</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
    <option value="IN">Indiana</option>
    <option value="IA">Iowa</option>
    <option value="UM-86">Jarvis Island</option>
    <option value="UM-67">Johnston Atoll</option>
    <option value="KS">Kansas</option>
    <option value="KY">Kentucky</option>
    <option value="UM-89">Kingman Reef</option>
    <option value="LA">Louisiana</option>
    <option value="ME">Maine</option>
    <option value="MD">Maryland</option>
    <option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option>
    <option value="UM-71">Midway Atoll</option>
    <option value="MN">Minnesota</option>
    <option value="MS">Mississippi</option>
    <option value="MO">Missouri</option>
    <option value="MT">Montana</option>
    <option value="UM-76">Navassa Island</option>
    <option value="NE">Nebraska</option>
    <option value="NV">Nevada</option>
    <option value="NH">New Hampshire</option>
    <option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option>
    <option value="NY">New York</option>
    <option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="OH">Ohio</option>
    <option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option>
    <option value="UM-95">Palmyra Atoll</option>
    <option value="PA">Pennsylvania</option>
    <option value="PR">Puerto Rico</option>
    <option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option>
    <option value="SD">South Dakota</option>
    <option value="TN">Tennessee</option>
    <option value="TX">Texas</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="VI">United States Virgin Islands</option>
    <option value="UT">Utah</option>
    <option value="VT">Vermont</option>
    <option value="VA">Virginia</option>
    <option value="UM-79">Wake Island</option>
    <option value="WA">Washington</option>
    <option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option>
    <option value="WY">Wyoming</option>
</select>
</label>
      <br/>
      <br/>
      <div>
      Subtotal: ${totalCost.toFixed(2)}
      <br/>
      Taxes: ${(totalCost * .0735).toFixed(2)}
      <br/>
      Total: ${(totalCost * 1.0735).toFixed(2)}
      <br/>
      <br/>
        <button>Confirm Order</button>
      </div>
      </form>
      </div>
    </div>
    </div>
    </PopupCheckout>
  )
}

export default CheckoutForm
