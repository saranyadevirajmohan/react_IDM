import React from 'react'
import useCount from './useCount'

export default function Demo() {
    let [a,b]=useCount(1)
  return (
    <div>
        <h2>
            {a}
        </h2>

        <button onClick={()=>b()}>
            demo
        </button>
    </div>
  )
}
