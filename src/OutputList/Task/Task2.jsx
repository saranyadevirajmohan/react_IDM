import React, { useState } from 'react'

export default function Task2() {
    
 const [item, setitem]=useState('');
 const[amount, setamount]=useState('');
 const[expense,setexpense]=useState('[]');
 const handle=()=>{
    if(item.trim() !== ''  && amount.trim() !==''){
        const newExpense = {
            item,
            amount

        };
        setexpnse([...expense,newExpense]);
        setitem('');
        setamount('');


    }
    else{
    ("enter valid")

 }
 }

  return (
    <div>
        <h1>Expense Tracker </h1>


        <label htmlFor="item">Item</label>
        <input type="text" placeholder='enter name' value={item}  onChange={(e)=>setitem(e.target.value)}/>
        <input type='text' placeholder='amount'value={amount} onChange={(e)=> setamount(e.target.value)}/>

<button onClick={handle}>Add Expense</button>
<h2>Expense</h2>
<ul>
    {expense.map((exp,index)=>(
<li key={index}>
   Exp {exp.item},Amo{exp.amount}
</li>
    ))}
</ul>


    </div>
  )
}
