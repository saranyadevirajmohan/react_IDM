import React, { useEffect, useState } from 'react'

export default function Effect() {
  let [num,setNum]=useState(0)

  useEffect(()=>{
    document.title="page rendered:"+num;
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  },[num])
  return (
    <div>
      <h1>
        {num}
      </h1>
      <button onClick={()=>setNum(num+1)}>
        Click to add
      </button>
    </div>
  )
}
