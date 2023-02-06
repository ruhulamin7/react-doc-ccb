import React from 'react';

function TimeInput({ unit, val, changeHandler }) {
  return (
    <div>
      <label htmlFor={unit}>
        {unit}:
        <input value={val || ''} onChange={(e) => (changeHandler(e, unit))} type="number" name={unit} id={unit} placeholder={unit} />
      </label>
    </div>
  );
}

export default TimeInput;
