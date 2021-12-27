import { render, screen } from '@testing-library/react';
import App from './App';
import { makeRandomString } from ''

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText('The Pointless App');
  expect(linkElement).toBeInTheDocument();
});
