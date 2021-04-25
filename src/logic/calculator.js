import operate from './operate';

const calculate = (pdata, btnName) => {
  const data = pdata;
  const { total, next, operation } = data;

  if (btnName === 'AC') {
    data.total = '';
    data.next = '';
    data.operation = '';
    return data;
  }

  if (btnName === '%') {
    if (total && !next) {
      data.operation = btnName;
    }
    const tot = operate(data.total, data.next, data.operation);
    data.total = tot;
    data.next = '';
    data.operation = '';
    return data;
  }

  if (btnName === '+/-') {
    if (total && !next) {
      data.total = total * -1;
    }
    if (next) {
      data.next = next * -1;
    }
  }

  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(btnName)) {
    if (!total || (total && !operation)) {
      data.total += btnName;
    }

    if (total && operation) {
      data.next += btnName;
    }
    return data;
  }

  if (['+', '-', 'x', '÷'].includes(btnName)) {
    if (total && !next) {
      data.operation = btnName;
    }
    if (total && next && operation) {
      data.total = operate(total, next, operation);
      data.next = '';
      data.operation = btnName;
    }
    return data;
  }

  if (btnName === '.') {
    if (!total) {
      data.total = '0.';
    }
    if (total && !operation) {
      data.total += '.';
    }
    if (total && operation && next) {
      data.next += '.';
    }
    if (total && operation && !next) {
      data.next += '0.';
    }

    return data;
  }

  if (btnName === '=') {
    if (total && !next) {
      data.total = total;
    }
    if (total && next && operation) {
      data.total = operate(total, next, operation);
      data.next = '';
      data.operation = '';
    }

    return data;
  }
  return data;
};

export default calculate;
