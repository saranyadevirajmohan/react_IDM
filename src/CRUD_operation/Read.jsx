import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Read() {
    let link = "http://localhost:2000"
    let [data, setData] = useState([])
    let [id, setId] = useState(0)
    let [uname, setUname] = useState("")
    let [uage, setUage] = useState(0)
    useEffect(() => {
        axios.get(link).then((s) => {
            console.log(s.data.msg)
            setData(s.data.msg)
        }).catch((err) => console.log(err))
    }, [link, data])

    function remove(id) {
        console.log(id)
        console.log(link + "/" + id)
        axios.delete(link + "/" + id).then(() => {
            alert("data deleted")
        }).catch((err) => console.log(err))
    }

    function ed(item) {
        console.log(item)
        sessionStorage.setItem("id", item._id)
        sessionStorage.setItem("name", item.name)
        sessionStorage.setItem("age", item.age)
    }

    useEffect(() => {
        setId(sessionStorage.getItem("id"))
        setUname(sessionStorage.getItem("name"))
        setUage(sessionStorage.getItem("age"))
    }, [])
    function editUser(e) {
        e.preventDefault()
        axios.put(link + "/" + id, { name: uname, age: uage }).then((s) => {
            alert("data updated!!!")
            setUage("")
            setUname("")
        }).catch((err) => consol6e.log(err))
    }
    return (
        <>    
            <form action="" onSubmit={editUser}>
            <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} />
            <input type="number" value={uage} onChange={(e) => setUage(e.target.value)} />
            <input type="submit" />
        </form>
        {
            data.map((item,index)=>
                <li>
                    {item.name},{item.age} <button onClick={()=>remove(item._id)}>Remove</button>
                    <button onClick={()=>ed(item)}>Edit</button>
                </li>
            )
        }
        </>

    )
}
