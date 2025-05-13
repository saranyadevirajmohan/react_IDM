// // import React, { useEffect, useState } from 'react'


// // export default function Task3() {
// //     let[iteam,setIteam]=useState("")
// //     let[Quantity,setQuantity]=useState("")
// //     let[price,setPrice]=useState("")
// //     let link="https://mockapi.io/projects/6805d8d4ca467c15be6a20f7"
     
// //     function Additeam(e){
// //         e.preventDefault()
// //         axiox.post(link,{iteam,Quantity,price}).then((s)=>{
// //             console.log(s)
// //             alert("form saved")
// //             setIteam("")
// //             setquantity("")
// //             setPrice("")
// //         }
// //         ).catch((err)=>console.log("err"))
// //     }
    
// //     useEffect(()=>{
// //       setIteam(sessionStorage.getItem("iteam"))
// //       setquantity(sessionStorage.getItem("Quantity"))
// //       setPrice(sessionStorage.getItem("price"))
// //   },[])

// //   function remove(id){
// //     console.log(id)
// //     console.log(link+"/"+iteam)
// //     axios.delete(link+"/"+iteam.then(()=>{
// //         alert("data deleted")
// //     }).catch((err)=>console.log(err))
// // }

// //   return (


// //     <div>
// //         <table>
// //             <tr>
// //                 <th>Iteam</th>
// //                 <th>Quantity</th>
// //                 <th>price</th>
// //             </tr>
// //             {
// //                 data.map((item,index)=>(
// //                     <tr>
// //                         <td>{index+1}</td>
// //                         <td>{item.Qualtity}</td>
// //                         <td>{item.price}</td>
// //                         <td>
// //                             <button onClick={()=>remove(item.id)}>Deleted</button>
// //                             <button onClick={()=>remove(item)}>Deleted</button>
// //                         </td>
// //                     </tr>
// //                 ))
// //             }
// //         </table>

// //     <div>
// //         <h1>Bill/Invoice Generator</h1>
// //         <form onSubmit={Additeam}>
// //             <label htmlFor="">Iteam:</label>
// //             <input type="text" value={iteam} onChange={(e)=>setName(e.target.value)}/>
// //             <label htmlFor="">Quantity:</label>
// //             <input type="text" value={Qualtity} onChange={(e)=>setquantity(e.target.value)}/>
// //             <label htmlFor="">Price:</label>
// //             <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
// //             <button type="button">AddIteam</button>
            
                    
            
// //               </form>
// //     </div>
// //     </div>
// //   )
// // }



// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // export default function Task3() {
// //     const [item, setItem] = useState('');
// //     const [quantity, setQuantity] = useState('');
// //     const [price, setPrice] = useState('');
// //     const [data, setData] = useState([]);

// //     const API_URL = "https://6805d8d4ca467c15be6a20f6.mockapi.io/react_idm/saranya"

    
// //     useEffect(() => {
// //         setItem(sessionStorage.getItem('item') || '');
// //         setQuantity(sessionStorage.getItem('quantity') || '');
// //         setPrice(sessionStorage.getItem('price') || '');

// //         fetchItems();
// //     }, []);

// //     const fetchItems = () => {
// //         axios.get(API_URL)
// //             .then((res) => setData(res.data))
// //             .catch((err) => console.error('Error fetching data:', err));
// //     };

  
// //     const handleAddItem = (e) => {
// //         e.preventDefault();

// //         if (!item || !quantity || !price) {
// //             alert("Please fill all fields.");
// //             return;
// //         }

// //         const newItem = {
// //             item,
// //             quantity,
// //             price: parseFloat(price)
// //         };

// //         axios.post(API_URL, newItem)
// //             .then((res) => {
// //                 alert('Item added successfully!');
// //                 setData([...data, res.data]);

// //                 sessionStorage.setItem('item', item);
// //                 sessionStorage.setItem('quantity', quantity);
// //                 sessionStorage.setItem('price', price);

        
// //                 setItem('');
// //                 setQuantity('');
// //                 setPrice('');
// //             })
// //             .catch((err) => console.error('Error saving item:', err));
// //     };


// //     const handleDelete = (id) => {
// //         axios.delete(`${API_URL}/${id}`)
// //             .then(() => {
// //                 alert('Item deleted successfully!');
// //                 setData(data.filter((entry) => entry.id !== id));
// //             })
// //             .catch((err) => console.error('Error deleting item:', err));
// //     };

// //     return (
// //         <div style={styles.container}>
// //             <h1>🧾 Invoice Generator</h1>

// //             <form onSubmit={handleAddItem} style={styles.form}>
// //                 <input
// //                     type="text"
// //                     placeholder="Item"
// //                     value={item}
// //                     onChange={(e) => setItem(e.target.value)}
// //                     style={styles.input}
// //                 />
// //                 <input
// //                     type="number"
// //                     placeholder="Quantity"
// //                     value={quantity}
// //                     onChange={(e) => setQuantity(e.target.value)}
// //                     style={styles.input}
// //                 />
// //                 <input
// //                     type="number"
// //                     placeholder="Price"
// //                     value={price}
// //                     onChange={(e) => setPrice(e.target.value)}
// //                     style={styles.input}
// //                 />
// //                 <button type="submit" style={styles.button}>Add Item</button>
// //             </form>

// //             <table style={styles.table}>
// //                 <thead>
// //                     <tr>
// //                         <th style={styles.th}>#</th>
// //                         <th style={styles.th}>Item</th>
// //                         <th style={styles.th}>Quantity</th>
// //                         <th style={styles.th}>Price</th>
// //                         <th style={styles.th}>Action</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {data.map((entry, index) => (
// //                         <tr key={entry.id}>
// //                             <td style={styles.td}>{index + 1}</td>
// //                             <td style={styles.td}>{entry.item}</td>
// //                             <td style={styles.td}>{entry.quantity*entry.iteam}</td>
// //                             <td style={styles.td}>₹{parseFloat(entry.price).toFixed(2)}</td>
// //                             <td style={styles.td}>
// //                                 <button onClick={() => handleDelete(entry.id)} style={styles.deleteButton}>
// //                                     Delete
// //                                 </button>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // 8}


// // const styles = {
// //     container: {
// //         padding: '30px',
// //         fontFamily: 'Arial, sans-serif',
// //     },
// //     form: {
// //         display: 'flex',
// //         gap: '10px',
// //         marginBottom: '20px',
// //     },
// //     input: {
// //         padding: '8px',
// //         fontSize: '16px',
// //         width: '150px',
// //     },
// //     button: {
// //         padding: '8px 16px',
// //         backgroundColor: '#007bff',
// //         color: '#fff',
// //         border: 'none',
// //         borderRadius: '4px',
// //         cursor: 'pointer',
// //     },
// //     deleteButton: {
// //         backgroundColor: '#dc3545',
// //         color: '#fff',
// //         padding: '5px 10px',
// //         border: 'none',
// //         borderRadius: '4px',
// //         cursor: 'pointer',
// //     },
// //     table: {
// //         width: '100%',
// //         borderCollapse: 'collapse',
// //     },
// //     th: {
// //         borderBottom: '2px solid #ccc',
// //         padding: '10px',
// //         textAlign: 'left',
// //     },
// //     td: {
// //         borderBottom: '1px solid #eee',
// //         padding: '10px',
// //     },
// // };
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Task3() {
//     const [item, setItem] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [price, setPrice] = useState('');
//     const [data, setData] = useState([]);

//     const API_URL = "https://6805d8d4ca467c15be6a20f6.mockapi.io/react_idm/saranya";

//     useEffect(() => {
//         setItem(sessionStorage.getItem('item') || '');
//         setQuantity(sessionStorage.getItem('quantity') || '');
//         setPrice(sessionStorage.getItem('price') || '');

//         fetchItems();
//     }, []);

//     const fetchItems = () => {
//         axios.get(API_URL)
//             .then((res) => setData(res.data))
//             .catch((err) => console.error('Error fetching data:', err));
//     };

//     const handleAddItem = async (e) => {
//         e.preventDefault();

//         if (!item || !quantity || !price) {
//             alert("Please fill all fields.");
//             return;
//         }

//         const existingItem = data.find((entry) => entry.item.toLowerCase() === item.toLowerCase());

//         if (existingItem) {
//             // Update quantity and price
//             const updatedItem = {
//                 ...existingItem,
//                 quantity: parseInt(existingItem.quantity) + parseInt(quantity),
//                 price: parseFloat(existingItem.price) + parseFloat(price)
//             };

//             axios.put(`${API_URL}/${existingItem.id}`, updatedItem)
//                 .then((res) => {
//                     alert('Item updated!');
//                     setData(data.map(entry => entry.id === existingItem.id ? res.data : entry));
//                     clearForm();
//                 })
//                 .catch((err) => console.error('Error updating item:', err));
//         } else {
//             // Add new item
//             const newItem = {
//                 item,
//                 quantity: parseInt(quantity),
//                 price: parseFloat(price)
//             };

//             axios.post(API_URL, newItem)
//                 .then((res) => {
//                     alert('Item added!');
//                     setData([...data, res.data]);
//                     clearForm();
//                 })
//                 .catch((err) => console.error('Error saving item:', err));
//         }

//         sessionStorage.setItem('item', item);
//         sessionStorage.setItem('quantity', quantity);
//         sessionStorage.setItem('price', price);
//     };

//     const clearForm = () => {
//         setItem('');
//         setQuantity('');
//         setPrice('');
//     };

//     const handleDelete = (id) => {
//         axios.delete(`${API_URL}/${id}`)
//             .then(() => {
//                 alert('Item deleted!');
//                 setData(data.filter((entry) => entry.id !== id));
//             })
//             .catch((err) => console.error('Error deleting item:', err));
//     };

//     const getTotalAmount = () => {
//         return data.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
//     };

//     return (
//         <div style={styles.container}>
//             <h1>🧾 Invoice Generator</h1>

//             <form onSubmit={handleAddItem} style={styles.form}>
//                 <input
//                     type="text"
//                     placeholder="Item"
//                     value={item}
//                     onChange={(e) => setItem(e.target.value)}
//                     style={styles.input}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Quantity"
//                     value={quantity}
//                     onChange={(e) => setQuantity(e.target.value)}
//                     style={styles.input}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Price"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     style={styles.input}
//                 />
//                 <button type="submit" style={styles.button}>Add Item</button>
//             </form>

//             <table style={styles.table}>
//                 <thead>
//                     <tr>
//                         <th style={styles.th}>#</th>
//                         <th style={styles.th}>Item</th>
//                         <th style={styles.th}>Quantity</th>
//                         <th style={styles.th}>Price</th>
//                         <th style={styles.th}>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((entry, index) => (
//                         <tr key={entry.id}>
//                             <td style={styles.td}>{index + 1}</td>
//                             <td style={styles.td}>{entry.item}</td>
//                             <td style={styles.td}>{entry.quantity}</td>
//                             <td style={styles.td}>₹{parseFloat(entry.price).toFixed(2)}</td>
//                             <td style={styles.td}>
//                                 <button onClick={() => handleDelete(entry.id)} style={styles.deleteButton}>
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                     {data.length > 0 && (
//                         <tr>
//                             <td colSpan="3" style={styles.td}><strong>Total</strong></td>
//                             <td style={styles.td}><strong>₹{getTotalAmount()}</strong></td>
//                             <td style={styles.td}></td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// }


// const styles = {
//     container: {
//         padding: '30px',
//         fontFamily: 'Arial, sans-serif',
//     },
//     form: {
//         display: 'flex',
//         gap: '10px',
//         marginBottom: '20px',
//     },
//     input: {
//         padding: '8px',
//         fontSize: '16px',
//         width: '150px',
//     },
//     button: {
//         padding: '8px 16px',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//     },
//     deleteButton: {
//         backgroundColor: '#dc3545',
//         color: '#fff',
//         padding: '5px 10px',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//     },
//     table: {
//         width: '100%',
//         borderCollapse: 'collapse',
//     },
//     th: {
//         borderBottom: '2px solid #ccc',
//         padding: '10px',
//         textAlign: 'left',
//     },
//     td: {
//         borderBottom: '1px solid #eee',
//         padding: '10px',
//     },
// };


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Task3.css';

export default function Task3() {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [data, setData] = useState([]);

    const API_URL = "https://6805d8d4ca467c15be6a20f6.mockapi.io/react_idm/saranya";

    useEffect(() => {
        setItem(sessionStorage.getItem('item') || '');
        setQuantity(sessionStorage.getItem('quantity') || '');
        setPrice(sessionStorage.getItem('price') || '');
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios.get(API_URL)
            .then((res) => setData(res.data))
            .catch((err) => console.error('Error fetching data:', err));
    };

    const handleAddItem = async (e) => {
        e.preventDefault();

        if (!item || !quantity || !price) {
            alert("Please fill all fields.");
            return;
        }

        const numericQuantity = parseInt(quantity);
        const numericPrice = parseFloat(price);
        const total = numericQuantity * numericPrice;

        const existingItem = data.find(entry => entry.item.toLowerCase() === item.toLowerCase());

        if (existingItem) {
            const updatedItem = {
                ...existingItem,
                quantity: parseInt(existingItem.quantity) + numericQuantity,
                price: parseFloat(existingItem.price) + total
            };

            axios.put(`${API_URL}/${existingItem.id}`, updatedItem)
                .then((res) => {
                    alert('Item updated!');
                    setData(data.map(entry => entry.id === existingItem.id ? res.data : entry));
                    clearForm();
                })
                .catch((err) => console.error('Error updating item:', err));
        } else {
            const newItem = {
                item,
                quantity: numericQuantity,
                price: total
            };

            axios.post(API_URL, newItem)
                .then((res) => {
                    alert('Item added!');
                    setData([...data, res.data]);
                    clearForm();
                })
                .catch((err) => console.error('Error saving item:', err));
        }

        sessionStorage.setItem('item', item);
        sessionStorage.setItem('quantity', quantity);
        sessionStorage.setItem('price', price);
    };

    const clearForm = () => {
        setItem('');
        setQuantity('');
        setPrice('');
    };

    const handleDelete = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(() => {
                alert('Item deleted!');
                setData(data.filter(entry => entry.id !== id));
            })
            .catch((err) => console.error('Error deleting item:', err));
    };

    const getTotalAmount = () => {
        return data.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    };

    return (
        <div className="container">
            <h1>🧾 Invoice Generator</h1>

            <form onSubmit={handleAddItem} className="form">
                <input
                    type="text"
                    placeholder="Item"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    className="input"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="input"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="input"
                />
                <button type="submit" className="button">Add Item</button>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={entry.id}>
                            <td>{index + 1}</td>
                            <td>{entry.item}</td>
                            <td>{entry.quantity}</td>
                            <td>₹{parseFloat(entry.price).toFixed(2)}</td>
                            <td>
                                <button onClick={() => handleDelete(entry.id)} className="deleteButton">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {data.length > 0 && (
                        <tr>
                            <td colSpan="3"><strong>Total</strong></td>
                            <td><strong>₹{getTotalAmount()}</strong></td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
