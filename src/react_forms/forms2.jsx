import React, { useState } from 'react'

export default function Forms2() {
    let[name,setname]=useState('')
    function save(e){
        e.paraventdefault()
        if(!name)alert("enter name here")
            else sessionStorage.setItem('name',name)

    }
    function resetFun(){
        alert("data reset")
    }

    


  return (
    <div>
        <form action="" onSubmit={save} onReset={resetFun}>
            <input type="text" placeholder='enter name here' value={name}onChange={(e)=>setname(e.target.value)}/>
            {
                
                !name?<p style={{color:"red"}}>plse enter name here</p>:""
            }
            <input type='submit'/>
            <input type='reset'/>6
        </form>
    </div>
  )
}
