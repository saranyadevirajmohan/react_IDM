import React, { useState } from 'react'

export default function useCount(initalvalue) {
    let [number,setNumber]=useState(initalvalue)
    function increment(){
        return setNumber(number+1)
    }
  return [number,increment]
}
