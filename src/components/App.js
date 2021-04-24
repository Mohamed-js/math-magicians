import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import operate from '../logic/operate';
import calculate from '../logic/calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 20,
    };
    this.calc = calculate.bind(this);
  }

  render() {
    return (
      <div className="container">
        <Display result={this.state.result.toString()} />
        <ButtonPanel calc={this.calc} />
      </div>
    );
  }
}

export default App;
