import React, { useState } from 'react';

function BirthdayDifference() {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [difference, setDifference] = useState(null);
  let [check,setCheck]=useState(false)
  console.log(check)

  const calculateDifference = () => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDifference(diffDays);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Birthday Date Difference Calculator</h2>

      <label>
        Birthday 1:
        <input
          type="date"
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
        />
      </label>
      <br /><br />

      <label>
        Birthday 2:
        <input
          type="date"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
        />
      </label>
      <br /><br />

      <button onClick={calculateDifference}>Calculate Difference</button>

      {difference !== null && (
        <p>Difference: <strong>{difference}</strong> days</p>
      )}


      <form action="">

        <input type="checkbox" checked={check} onChange={(e)=>setCheck(e.target.checked)}/>

        {check?"checked":"no check"}
      </form>
    </div>
  );
}

export default BirthdayDifference;
