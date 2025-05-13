import React, { useState } from 'react'

export default function State() {
    let [a,b]=useState("Saranya");
    let [number,setNumber]=useState(0)
  return (
    <div>
        <h1 onClick={()=>b("Devi")}>
            {a}
            <br />
            initial value {number}
        </h1>
        <button onClick={()=>setNumber(number+1)}>
            Add
        </button>
        <button onClick={()=>setNumber(number-1)}>
            Minus
        </button>
        <button onClick={()=>setNumber(number*1)}>
            mul
        </button>
        <button onClick={()=>setNumber(0)}>
            Reset
        </button>
        <button onClick={()=>setNumber(number%1)}>
            div
        </button>

    </div>
  )
}
