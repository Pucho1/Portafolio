import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest'
import HelloWorld from './HelloWorld.jsx'

test('renders name', () => {
  
  render(<HelloWorld name="Vitest" />)

  const buttonElement = screen.getByText(/Vitest/i);

 expect(buttonElement).toBeInTheDocument();
})
