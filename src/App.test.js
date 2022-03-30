import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the Hidle title', () => {
  render(<App />)
  const title = screen.getByText(/Hidle/i)
  expect(title).toBeInTheDocument()
})
