import React, { useEffect, useRef, useState } from 'react'

export default function Ref() {
    let [name,setName]=useState("")
    let count=useRef(0)

    useEffect(()=>{
        count.current+=1
    },[name])
  return (
    <div>
        <input type="text" placeholder='enter name here' value={name} onChange={(e)=>setName(e.target.value)} />

        <h1>
            {name}
            <br />
            total rendered count {count.current}
        </h1>
    </div>
  )
}
