import '@testing-library/jest-dom/extend-expect';
import calculate from '../logic/calculator';

const data = {
  total: '',
  next: '',
  operation: '',
};

const emptyData = () => {
  data.total = '';
  data.next = '';
  data.operation = '';
};

// TESTING -- OPERATORs --

test('total should be 1', () => {
  const result = calculate(data, '1');
  expect(result.total).toEqual('1');
});

test('operator should be +', () => {
  emptyData();
  let result = calculate(data, '1');
  result = calculate(result, '+');
  expect(result.operation).toEqual('+');
});

test('operator should be -', () => {
  emptyData();
  let result = calculate(data, '1');
  result = calculate(result, '-');
  expect(result.operation).toEqual('-');
});

test('operator should be x', () => {
  emptyData();
  let result = calculate(data, '1');
  result = calculate(result, 'x');
  expect(result.operation).toEqual('x');
});

test('operator should be ÷', () => {
  emptyData();
  let result = calculate(data, '1');
  result = calculate(result, '÷');
  expect(result.operation).toEqual('÷');
});

test('operator should be falsy', () => {
  emptyData();
  let result = calculate(data, '1');
  result = calculate(result, 'x');
  expect(result.operation === '-').toBeFalsy();
});

test('total should be 0.3', () => {
  emptyData();
  let result = calculate(data, '.');
  result = calculate(result, '3');
  expect(result.total).toEqual('0.3');
});

// TESTING CALCULATIONS

test('Result should be 0.03', () => {
  emptyData();
  let result = calculate(data, '3');
  result = calculate(result, '%');
  expect(result.total).toEqual('0.03');
});

test('Result should be -3', () => {
  emptyData();
  let result = calculate(data, '3');
  result = calculate(result, '+/-');
  expect(result.total).toEqual(-3);
});

test('Result of multiplying should be 15', () => {
  emptyData();
  let result = calculate(data, '3');
  result = calculate(result, 'x');
  result = calculate(result, '5');
  result = calculate(result, '=');
  expect(result.total).toEqual('15');
});

test('Result of division should be 3', () => {
  emptyData();
  let result = calculate(data, '9');
  result = calculate(result, '÷');
  result = calculate(result, '3');
  result = calculate(result, '=');
  expect(result.total).toEqual('3');
});

test('Result of adding should be 8', () => {
  emptyData();
  let result = calculate(data, '3');
  result = calculate(result, '+');
  result = calculate(result, '5');
  result = calculate(result, '=');
  expect(result.total).toEqual('8');
});

test('Result of minus should be 3', () => {
  emptyData();
  let result = calculate(data, '9');
  result = calculate(result, '-');
  result = calculate(result, '6');
  result = calculate(result, '=');
  expect(result.total).toEqual('3');
});
