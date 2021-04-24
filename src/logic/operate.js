import Big from 'big.js';

const operate = (n1, n2, sign) => {
  let ans;

  const one = n1 === '' ? 0 : Big(n1);
  const two = n2 === '' ? 0 : Big(n2);

  if (sign === 'x') {
    ans = one.times(two);
  }
  if (sign === '+') {
    ans = one.plus(two);
  }
  if (sign === '-') {
    ans = one.minus(two);
  }
  if (sign === '÷') {
    ans = one.div(two);
  }
  if (sign === '%') {
    ans = one.div(Big('100'));
  }

  ans = ans !== NaN ? ans.toPrecision() : 'NaN';

  return ans;
};

export default operate;
