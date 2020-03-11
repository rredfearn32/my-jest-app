import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello World header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
