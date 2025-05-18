import React, { useState } from 'react';

const Program = () => {
  const [name, setName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [genderSplit, setGenderSplit] = useState({ male: 50, female: 50 });
  const [visibleInSchedule, setVisibleInSchedule] = useState(true);
  const [automaticCancellation, setAutomaticCancellation] = useState(false);
  const [requiredMembers, setRequiredMembers] = useState(0);
  const [timeBeforeStart, setTimeBeforeStart] = useState(0);

  return (
    <div style={{ backgroundColor }}>
      <h1>Program Details</h1>
      
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <br />

      <label>
        Background Color:
        <input 
          type="color" 
          value={backgroundColor} 
          onChange={(e) => setBackgroundColor(e.target.value)} 
        />
      </label>
      <br />

      <label>
        Equal Split by Gender (Male %):
        <input 
          type="number" 
          value={genderSplit.male} 
          onChange={(e) => setGenderSplit({ ...genderSplit, male: e.target.value, female: 100 - e.target.value })} 
          min="0" 
          max="100" 
        />
      </label>
      <br />

      <label>
        Visible in the Schedule:
        <input 
          type="checkbox" 
          checked={visibleInSchedule} 
          onChange={(e) => setVisibleInSchedule(e.target.checked)} 
        />
      </label>
      <br />

      <label>
        Automatic Cancellation:
        <input 
          type="checkbox" 
          checked={automaticCancellation} 
          onChange={(e) => setAutomaticCancellation(e.target.checked)} 
        />
      </label>
      <br />

      <label>
        How Many Signed Up Members Are Required?
        <input 
          type="number" 
          value={requiredMembers} 
          onChange={(e) => setRequiredMembers(e.target.value)} 
        />
      </label>
      <br />

      <label>
        For How Long Before Classes Start? (in minutes)
        <input 
          type="number" 
          value={timeBeforeStart} 
          onChange={(e) => setTimeBeforeStart(e.target.value)} 
        />
      </label>
      <br />
      LEVELS / RANKS
      <select>
        <option value={1}>1</option>
        <option value={1}>2</option>
        <option value={1}>3</option>
      </select>
    </div>
  );
};

export default Program;
