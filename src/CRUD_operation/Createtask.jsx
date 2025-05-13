import axios from 'axios'
import React from 'react'
import { useState } from 'react'


export default function Createtask() {

    let[name,setName]=useState('')
    let[age,setAge]=useState(0)
    let[duration,setDuration]=useState('')
    let link=""
    function save(e){
        e.preventdefault()
        axios.post(link,{name,age,duration}).then((s)

    }
  return (

    <div>
        <h1>FORMS DETAILS</h1>
        
        <form onSubmit={save}onReset={}>
            
            <input type="name" placeholder="Enter name here" />
            <input type="age"placeholder='Enter a age here'/>
            <input type="duration"placeholder='Enter a duration'/>
            
            <br/>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
        </form>
    </div>
  )
}
