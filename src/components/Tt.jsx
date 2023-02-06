import React from 'react';

function Tt({ seconds, changeHandler }) {
  return (
    <div>
      <label htmlFor="seconds">
        Seconds:
        <input value={seconds || ''} onChange={(e) => changeHandler(e, 'Seconds')} type="number" name="seconds" id="seconds" placeholder="Input Seconds" />
      </label>
    </div>
  );
}

export default Tt;
