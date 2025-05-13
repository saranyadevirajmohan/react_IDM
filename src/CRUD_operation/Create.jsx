import React, { useState } from 'react'
import axios from "axios"
import Read from './Read'
// import Read1 from './Read1'
export default function Create() {
    let [name,setName]=useState("")
    let [age,setAge]=useState(0)
    let link="http://localhost:2000"
    function save(e){
        e.preventDefault()
        axios.post(link,{name,age}).then((s)=>{
            console.log(s)
            alert("data saved!!")
            setAge("")
            setName("")
        }).catch((err)=>console.log(err))
    }
  return (
    <div>
        <form onSubmit={save} onReset={()=>alert("Form reseted!!!")}>
            <input type="text" placeholder='enter name here'  value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="number"  placeholder='enter age here' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <br />
            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
        </form>

        <Read />

    </div>
  )
}
