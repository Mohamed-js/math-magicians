import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* name: 'hay' */
    };
  }

  render() {
    return (
      <div className="container">
        <Display result="15" />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
