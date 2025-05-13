// import React, { useState } from 'react';
// import BillDetails from './Component/About';
// import ItemList from './Component/Contact';
// import TotalAmount from './Component/Header';
// import { jsPDF } from 'jspdf';
// import './App.css';

// function Bill() {
//     const [items, setItems] = useState([]);

//     const handleAddItem = (item) => {
//         setItems((prevItems) => [...prevItems, item]);
//     };

//     const handleDeleteItem = (index) => {
//         setItems((prevItems) => prevItems.filter((_, i) => i !== index));
//     };

//     const calculateTotalAmount = () => {
//         return items.reduce((total, item) => total + item.quantity * item.price, 0);
//     };

//     const handleDownloadPDF = () => {
//         const pdf = new jsPDF();
//         pdf.text('Invoice', 20, 20);

//         items.forEach((item, index) => {
//             const yPos = 30 + index * 10;
//             pdf.text(`Item: ${item.item}, Quantity: ${item.quantity}, Price: $${item.price}`, 20, yPos);
//         });

//         const totalAmount = calculateTotalAmount();
//         pdf.text(`Total Amount: $${totalAmount.toFixed(2)}`, 20, 180);

//         pdf.save('invoice.pdf');
//     };

//     return (
//         <div className="App">
//             <h1>Bill / Invoice Generator</h1>
//             <BillDetails onAddItem={handleAddItem} />
//             <ItemList items={items} onDeleteItem={handleDeleteItem} />
//             <TotalAmount total={calculateTotalAmount()} />
//             <button onClick={handleDownloadPDF}>Download PDF</button>
//         </div>
//     );
// }

// export default Bill;
