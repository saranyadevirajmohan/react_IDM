import React, { useState } from 'react'

export default function Forms() {
    let [name,setName]=useState("")
    function save(e){
        e.preventDefault()
        if(!name) alert("enter name ")
            else sessionStorage.setItem("name",name)
    }
    function resetFun(){
        alert('Data reseted')
    }
  return (
    <div>
        <form action="" onSubmit={save} onReset={resetFun}>
            <input type="text" placeholder='enter name here' value={name} onChange={(e)=>setName(e.target.value)} />
            {
                !name?<p style={{color:"red"}}>Please enter name</p>:""
            }
            <br />
            <input type="submit" />
            <input type="reset" />
        </form>
    </div>
  )

}