import React, { useState } from 'react';

export default function Task1() {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = () => {
    if (item.trim() !== '' && amount.trim() !== '') {
      const newExpense = {
        item,
        amount
      };
      setExpenses([...expenses, newExpense]);
      setItem('');
      setAmount('');
    }
    else{
        alert("Enter valid ")
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <label htmlFor="item">Item</label>
      <input
        type="text"
        id="item"
        placeholder="Enter item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        id="amount"
        placeholder="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleAddExpense}>Add Expense</button>

      <h2>Expenses:</h2>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            Expense:{exp.item} ,amount:₹{exp.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
