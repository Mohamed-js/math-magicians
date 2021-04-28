import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

// Test rendering Buttons of the calculator
test('renders calculator button 1', () => {
  const { getByText } = render(<App />);
  const btnElement1 = getByText(/1/);
  expect(btnElement1).toBeInTheDocument();
});

test('renders calculator button 2', () => {
  const { getByText } = render(<App />);
  const btnElement2 = getByText(/2/);
  expect(btnElement2).toBeInTheDocument();
});

test('renders calculator button 3', () => {
  const { getByText } = render(<App />);
  const btnElement3 = getByText(/3/);
  expect(btnElement3).toBeInTheDocument();
});

test('renders calculator button 4', () => {
  const { getByText } = render(<App />);
  const btnElement4 = getByText(/4/);
  expect(btnElement4).toBeInTheDocument();
});
test('renders calculator button 5', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText(/5/);
  expect(btnElement).toBeInTheDocument();
});

test('renders calculator button 6', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText(/6/);
  expect(btnElement).toBeInTheDocument();
});

test('renders calculator button 7', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText(/7/);
  expect(btnElement).toBeInTheDocument();
});

test('renders calculator button 8', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText(/8/);
  expect(btnElement).toBeInTheDocument();
});

test('renders calculator button 9', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText(/9/);
  expect(btnElement).toBeInTheDocument();
});

test('renders calculator button 0', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText(/0/);
  expect(btnElement).toBeInTheDocument();
});

test('renders calculator display screen', () => {
  const { getByText } = render(<App />);
  const btnElement = getByText(/Casio Atef/);
  expect(btnElement).toHaveClass('logo');
});
