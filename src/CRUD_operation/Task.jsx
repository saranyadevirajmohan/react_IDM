import React, { useState } from 'react'

let [name,setName]=useState('')
let [age ,setAge]=useState(0)

export default function Task() {
  return (
    <div>

        <form action="">
            <input type="text" name="" id="" placeholder='enter name here' value={name}onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='enter age here' value={age}onChange={(e)=>setAge(e.target.value)} />
  <button type="submit">submit</button>
  <button type="reset-"></button>
        </form>
    </div>
  )
}
