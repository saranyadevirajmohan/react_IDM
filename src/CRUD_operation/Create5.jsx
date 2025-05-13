import React, { useState } from 'react'

export default function Create5() {
let[gender,setgender]=useState('')
const genderhandle = (e) =>{
    setgender(e.target.value)
}

}

  return (
    <div>
        <h1>Select your gender</h1>
        <label>
        <input type="radio" value="Male" checked={gender === "Male"} onchange={genderhandle}/>Male
        </label>
        <label>
          <input type="radio" value="Female" checked={gender === "female"} onchange={genderhandle} />Female
        </label>
     <label>
      <input type="radio" value="others" checked={gender === "others"} onchange={genderhandle}/>Others
     </label>
     <p>your selected:{gender}</p>
    </div>
    
  )
}
