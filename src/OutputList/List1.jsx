import React from 'react'
import "./List1.css"

export default function List1() {
 
      let b=["Rajmohan","Saranyadevi","Aathvika","Kavinkumar","Thangamani","Mohana","Tamil","Aadhi"];
      let ar=[  
        {  
           name:'arun',
           gender:'Male',
           physics:88,
           maths:87,
           english:78
        },
        {  
           name:'rajesh',
           gender:'Male',
           physics:96,
           maths:100,
           english:95
        },
        {  
           name:'moorthy',
           gender:'Male',
           physics:89,
           maths:90,
           english:70
        },
        {  
           name:'raja',
           gender:'Male',
           physics:30,
           maths:25,
           english:40
        },
        {  
           name:'usha',
           gender:'Female',
           physics:67,
           maths:45,
           english:78
        },
        {  
           name:'priya',
           gender:'Female',
           physics:56,
           maths:46,
           english:78
        },
        {  
           name:'Sundar',
           gender:'Male',
           physics:12,
           maths:67,
           english:67
        },
        {  
           name:'Kavitha',
           gender:'Female',
           physics:78,
           maths:71,
           english:67
        },
        {  
           name:'Dinesh',
           gender:'Male',
           physics:56,
           maths:45,
           english:67
        },
        {  
           name:'Hema',
           gender:'Female',
           physics:71,
           maths:90,
           english:23
        },
        {  
           name:'Gowri',
           gender:'Female',
           physics:100,
           maths:100,
           english:100
        },
        {  
           name:'Ram',
           gender:'Male',
           physics:78,
           maths:55,
           english:47
        },
        {  
           name:'Murugan',
           gender:'Male',
           physics:34,
           maths:89,
           english:78
        },
        {  
           name:'Jenifer',
           gender:'Female',
           physics:67,
           maths:88,
           english:90
        }
     ]
  return (
    <div>
        <h1>
            output list
        </h1>
        <ol>
        {
            b.map((item,index)=>
            <li key={index}>{item},{index}
    </li>
            
            )
        }
        </ol>
        <table>
            <tr>
                <th>SNO</th>
                <th>NAME</th>
                <th>Gender</th>
                <th>TOTAL</th>
                

                            </tr>
                            {
                                ar.map((item,index)=>
                                    <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.english+item.maths+item.physics}</td>
                                    </tr>



                                )}
        </table>
    </div>
  )
}
