import React, { useState } from 'react';

function GenderForm() {
  const [gender, setGender] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <h2>Select Your Gender</h2>.
      <label>
        <input
          type="radio"
          value="Male"
          checked={gender === 'Male'}
          onChange={handleGenderChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="Female"
          checked={gender === 'Female'}
          onChange={handleGenderChange}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          value="Other"
          checked={gender === 'Other'}
          onChange={handleGenderChange}
        />
        Other
      </label>

      <p>You selected: {gender}</p>
    </div>
  );
}

export default GenderForm;
