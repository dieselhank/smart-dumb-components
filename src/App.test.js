import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders instructions', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Select one of the links above/i);
  expect(linkElement).toBeInTheDocument();
});
