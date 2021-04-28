import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

// Test rendering Home components
test('renders Home header', () => {
  const { getByText } = render(<Home />);
  const headerText = getByText(/Math Magicians/);
  expect(headerText).toBeInTheDocument();
});

test('renders Home slogan', () => {
  const { getByText } = render(<Home />);
  const headerText = getByText(/Where all the magic happens!/);
  expect(headerText).toBeInTheDocument();
});
