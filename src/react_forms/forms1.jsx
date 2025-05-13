import React, { useState } from 'react'

export default function Forms1() {
 let [name,setname]=useState('')

function save(e){
    e.Preventdefault()
    if(!name)alert("enter name ")
        else sessionStorage.setItem
}
function resetFun(){
    alert("data reset")
}


  return (
    <div>
        <form action="" onSubmit={save} onReset={resetFun}>
<input type="text" placeholder='enter name here' value={name} onChange={(e)=>setnam(e.target.value)}/>
{
    !name?<p style={{color:"green"}}>plse enter name here</p>:""
}
<br/>
    <input type="submit"/>
    <input type="reset"/>

        </form>
    </div>
  )

}