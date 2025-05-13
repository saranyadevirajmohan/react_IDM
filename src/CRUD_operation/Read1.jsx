import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Read1() {
    let link="https://6805d8d4ca467c15be6a20f6.mockapi.io/react_idm/devi"
    let[data ,setData]=useState([])
    let[uname,setUname]=useState([])
    let[id,setId]=useState(0)
    let[uage,setuage]=useState(0)
    useEffect(()=>{
        axios.get(link).then((s)=>{
            // console.log(s.data)
            setData(s.data)
        }).catch((err)=>console.log(err))
    },[link,data])

    function remove (id){
        console.log(id)
        console.log(link+"/"+id)
    axios.delete(link+"/"+id).then(()=>{
        alert("data deleted")

    }).catch((err)=>console.log(err))
        

    }
    function ed(item){
        console.log(item)
        sessionStorage.setItem("id",item.id)
        sessionStorage.setItem("name",item.name)
        sessionStorage.setItem("age",item.age)

    }
    useEffect(()=>{
        setId(sessionStorage.getItem("id"))
        setUname(sessionStorage.getItem("name"))
        setuage(sessionStorage.getItem("age"))

    },[]);


    function editUser(e){
        e.preventDefault()
        axios.put(link+"/"+id,{name:uname,age:uage}).then((s)=>{
            alert("data updated")
            setUname("")
            setuage("")
            
        }).catch((err)=>console.log(err))
    }

        
  return (
    <div>
        <table>
            <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {
                data.map((item,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>
                            <button onClick={()=>remove(item.id)}>Remove</button>
                            <button onClick={()=>ed(item)}>Edit</button>
                        </td>

                    </tr>
                ))

            }

        </table>
        <form action="" onSubmit={editUser}>
            <input type="text" value={uname} onChange={(e)=>setUname(e.target.value)}/>
            <input type='text'value={uage} onChange={(e)=>setuage(e.target.value)}/>
            <input type="submit" />

        </form>
    </div>
  )
}
