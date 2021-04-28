import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../components/About';

// Test rendering About components
test('renders About header', () => {
  const { getByText } = render(<About />);
  const headerText = getByText(/Who we are?/);
  expect(headerText).toBeInTheDocument();
});

test('renders About slogan', () => {
  const { getByText } = render(<About />);
  const headerText = getByText(/A group of math lovers/);
  expect(headerText).toBeInTheDocument();
});
