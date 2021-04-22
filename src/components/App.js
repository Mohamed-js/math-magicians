import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Display result="15" />
        <ButtonPanel />
      </div>
    );
  }
}



export default App;
