import React, { Component } from 'react';

class Toggle extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }

  render() {
    const clickHandler = () => {
      this.setState((state) => ({ show: !state.show }));
    };
    const { show } = this.state;

    return (
      <div>
        <button onClick={clickHandler} type="button">{show ? 'Hide' : 'Show'}</button>
        {show && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae beatae autem accusamus aut consequatur veniam earum libero quis maiores itaque voluptatem, optio labore? Tenetur ratione quisquam soluta natus consectetur repudiandae.</p>}
      </div>
    );
  }
}

export default Toggle;
