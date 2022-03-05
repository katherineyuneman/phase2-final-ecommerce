import React, { useState } from 'react'

const ProductQuant = ({handleChange, numberInput}) => {


  return (
    <div>
       <label>Increment Value:
            <input type="text" name="addvalue" value={numberInput} onChange={handleChange}/>
        </label>
    </div>
  )
}

export default ProductQuant
