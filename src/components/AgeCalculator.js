import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AgeCalculator = () => {
  const [startDate, setStartDate] = useState(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (startDate) {
      const birthDate = new Date(startDate);
      const today = new Date();
      const ageDiff = today - birthDate;
      const calculatedAge = new Date(ageDiff);
      setAge(Math.abs(calculatedAge.getUTCFullYear() - 1970));
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
        className="date-picker"
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;

