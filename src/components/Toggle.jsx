import React, { Component } from 'react';

function Bangladesh() {
  return (
    <div>
      <h1>Bangladesh</h1>
      <p>Bangladesh ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, esse quo minus officiis nulla soluta architecto non molestias recusandae, beatae libero odit porro perferendis explicabo quam facilis voluptatibus sapiente eos?</p>
    </div>
  );
}

function India() {
  return (
    <div>
      <h1>India</h1>
      <p>India ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, esse quo minus officiis nulla soluta architecto non molestias recusandae, beatae libero odit porro perferendis explicabo quam facilis voluptatibus sapiente eos?</p>
    </div>
  );
}

class Toggle extends Component {
  constructor() {
    super();
    this.state = { country: 'BD' };
  }

  render() {
    const clickHandler = () => {
      this.setState((state) => ({ country: state.country === 'BD' ? 'IN' : 'BD' }));
    };
    const { country } = this.state;

    // array of fruits
    const fruits = ['Mango', 'Orange', 'Apple', 'Banana'];
    return (
      <div>
        <button onClick={clickHandler} type="button">{country === 'BD' ? 'Show India' : 'Show Bangladesh'}</button>
        {country === 'BD' ? <Bangladesh /> : <India /> }
        <ul>
          {fruits.map((fruit) => <li key={Math.floor(Math.random() * 100) + 1}>{fruit}</li>)}
        </ul>
      </div>
    );
  }
}

export default Toggle;
