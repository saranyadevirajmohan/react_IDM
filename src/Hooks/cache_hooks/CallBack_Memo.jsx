import React, { useCallback, useMemo, useState } from 'react'

export default function CallBack_Memo() {
    let [num,setNum]=useState(0)

    let memoValue=useMemo(()=>{
        return num*2345678906
    },[num])
0
    let callback=useCallback((a,b)=>{
        return num*a*b
    },[num])
  return (
    <div>
        <h1>
            count {num}
            <br />
            memo value {memoValue}
            <br />
            call back {callback(1,2)}
        </h1>

        <button onClick={()=>setNum(num+1)}>
            click
        </button>
    </div>
  )
}
