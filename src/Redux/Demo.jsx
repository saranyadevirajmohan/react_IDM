import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './slicer'

export default function Demo() {
    let a=useSelector((state)=>state.count)
    let d=useDispatch()
    console.log(a)
  return (
    <div>
        <h3>
            {a}
        </h3>
        <button onClick={()=>d(increment())}>
            increment
        </button>
    </div>
  )
}
