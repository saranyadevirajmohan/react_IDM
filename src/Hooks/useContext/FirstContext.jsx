import React, { useContext } from 'react'
import { context } from './MainContext'

export default function FirstContext() {
    let datas=useContext(context)
    console.log(datas)
  return (
    <div>
        <h1>
            {datas.user},{datas.location} <br />
            {datas.obj.name},
            {datas.obj.courses[0].software} 
        </h1>
    </div>
  )
}
