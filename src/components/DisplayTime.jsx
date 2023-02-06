import React from 'react';

function DisplayTime({ unit, minutes, seconds }) {
  return (
    <div>
      {unit && (
      <p>
        {unit === 'Minutes' ? `${minutes} Minutes is equal to ${seconds} Seconds` : `${seconds} Seconds is equal to ${minutes} Minutes`}
      </p>
      )}
    </div>
  );
}

export default DisplayTime;
