import React from 'react'
import "./List.css"
export default function List() {
    let a=["html","css","bootstrap","javascript","react","node js","mongodb"];

  return (
    <div>
        <h1>
            output list
        </h1>
        <ol>
            {
                a.map((item,index)=>
                    <li key={index}>{item},{index}</li>
                )
            }
        </ol>

       
    </div>
  )
}
