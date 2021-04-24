import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: '',
        next: '',
        operation: '',
      },
    };
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick = (btnName) => {
    /* eslint-disable-next-line */
    const oldData = this.state.data;
    const newResult = calculate(oldData, btnName);
    /* eslint-disable-next-line */
    newResult
      ? this.setState({ data: newResult })
      : this.setState({
        data: {
          total: '',
          next: '',
          operation: '',
        },
      });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Display result={data} />
        <ButtonPanel btnClick={this.btnClick} />
      </div>
    );
  }
}

export default App;
