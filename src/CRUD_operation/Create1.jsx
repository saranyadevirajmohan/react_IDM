import axios from 'axios'
import React, { useState } from 'react'
import Read1 from './Read1'

export default function Create1() {
    let [name,setName]=useState("")
    let [age,setAge]=useState("0")
    let link="https://6805d8d4ca467c15be6a20f6.mockapi.io/react_idm/devi"
 function save(e){
e.preventDefault()

axios.post(link,{name,age}).then((s)=>{
console.log(s)
alert("data saved")
setName("")
setAge("")
}).catch(err).console.log(err);
 }

  return (
    <div>
        <form onSubmit={save} onReset={()=>alert("form reset")}>
            <input type="text"placeholder="enter name here"  value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="enter age here" value={age} onChange={(e)=>setAge(e.target.value)} />

            <br />
             <button type="submit">submit</button>
             <button type="Reset">Reset</button>
        </form>
        <Read1/>
    </div>
  )
}
