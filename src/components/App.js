import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculator';

const App = () => {
  const [data, setData] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const btnClick = (btnName) => {
    const newResult = calculate(data, btnName);
    const { total, next, operation } = newResult;
    setData({ total, next, operation });
  };

  return (
    <div className="container">
      <Display result={data} />
      <ButtonPanel btnClick={btnClick} />
    </div>
  );
};

export default App;
