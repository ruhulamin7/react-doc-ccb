import React from 'react';
import DisplayTime from './DisplayTime';
import TimeInput from './TimeInput';

class TimeCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      duration: '',
      unit: '',
    };
  }

  changeHandler = (e, unit) => {
    const { value } = e.target;
    const val = parseFloat(value);
    this.setState({ duration: Number.isNaN(val) ? '' : val, unit });
  };

  render() {
    const { duration, unit } = this.state;
    // const { name } = this.props;
    let minutes;
    let seconds;
    if (unit === '' && duration === '') {
      minutes = 0;
      seconds = 0;
    } else if (unit === 'Minutes' && duration) {
      minutes = duration;
      seconds = duration * 60;
    } else if (unit === 'Seconds' && duration) {
      seconds = duration;
      minutes = duration / 60;
    } else {
      minutes = 0;
      seconds = 0;
    }

    return (
      <div>
        <br />
        <TimeInput unit="Minutes" val={minutes} changeHandler={this.changeHandler} />
        <br />
        <TimeInput unit="Seconds" val={seconds} changeHandler={this.changeHandler} />

        {/* <label htmlFor="seconds">
          Seconds:
          <input value={seconds || ''} onChange={(e) => this.changeHandler(e, 'Seconds')} type="number" name="seconds" id="seconds" placeholder="Input Seconds" />
        </label> */}

        <DisplayTime unit={unit} minutes={minutes} seconds={seconds} />

      </div>
    );
  }
}

export default TimeCalculator;
