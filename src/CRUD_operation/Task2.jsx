import React, { useState } from 'react'

export default function Task2() {

    let [iteam, setIteam] = useState("")
    let [quantity, setquantity] = useState("1")
    let [price, setPrice] = useState("0")
    let [emsg, setEmg] = useState("")
    const AddIteam = () => {
        if (!iteam.trim()) {
            setEmg("plse enter a input field")
            return;
        }
        if (!/^[a-zA-Z]+$/.test(item)) {
            setEmg("enter only alphabetical character")
            return;

        }
        const newItem = { item, quantity, price };
        onAddItem(newItem);
        setItem('');
        setQuantity(1);
        setPrice(0);
        setErrorMessage('');
    };



    return (
        <div>
            <h1>Bill / INVOICE GENERATOR</h1>
            <label htmlFor="">Item:</label>
            <input type="text" value={iteam} onChange={(e) => setIteam(e.target.value)} />
            <label htmlFor="">Quantity:</label>
            <input type="text" value={quantity} onChange={(e) => setquantity(e.target.value)} />
            <label htmlFor="">Price:</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            <label htmlFor="">Price:</label>
            <button
                onClick={AddIteam}>AddIteam
            </button>
            <p style={{ color: "red" }}>{errormessage}</p>
            <div className="iteam-list">
                <h1>Iteam List</h1>
                {iteam.map((iteam, index) => (<div className="item" key={index}>
                    <div>{item.item}</div>
                    <div>Quantity: {item.Quantity}</div>
                    <div>Price: ${item.price}</div>
                    <button onClick={() => DeleteItem(index)}>Delete</button>
                </div>)
)

}
