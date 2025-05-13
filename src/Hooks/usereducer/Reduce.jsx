import React, { useReducer } from 'react'

export default function Reduce() {
    let [a,b]=useReducer(function(a,action){
        if(action.operation==="+") return {count:a.count+1} 
        else if (action.operation==="-") return {count:a.count-1}
    },{count:0})
    console.log(a)
  return (
    <div>
        <h1>
            count {a.count}
        </h1>

        <button onClick={()=>b({operation:"+"})}>
            plus (+)
        </button>

        <button onClick={()=>b({operation:"-"})}>
            minus (-)
        </button>
    </div>
  )
}
