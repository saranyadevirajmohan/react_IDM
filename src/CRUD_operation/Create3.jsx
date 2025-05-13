import axios from 'axios'
import React, { useState } from 'react'

export default function Create3() {
    let [name,setName]=useState('')
    let[age,setAge]=useState('0')
    let link="https://6805d8d4ca467c15be6a20f6.mockapi.io/react_idm/saranya"
    function save(e){
        e.pareventDefault()
        axios.post
    }



  return (
    <div>
        <form action="">
       <input type="text"  placeholder='enter name here'  value={name} onChange={(e)=>}/>

        </form>

    </div>
  )
}
