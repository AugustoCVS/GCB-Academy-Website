import { render, screen, fireEvent } from '@testing-library/react'

import { Button } from './Button'
import { defaultTheme } from '@/styles/themes/defaultTheme'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'

describe('Button', () => {
  it('should render Button', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button type="button" background="gold" color="white">
          Test
        </Button>
      </ThemeProvider>,
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('should render Button with background white', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button type="button" background="white" color="gold">
          Test
        </Button>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')

    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(button).toHaveStyleRule('backgroundColor: white')
    expect(button).toHaveStyleRule('color: gold')
  })

  it('should render Button with background gold', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button type="button" background="gold" color="white">
          Test
        </Button>
      </ThemeProvider>,
    )

    const button = screen.getByRole('button')

    expect(screen.getByText('Test')).toBeInTheDocument()
    expect(button).toHaveStyleRule('backgroundColor: gold')
    expect(button).toHaveStyleRule('color: white')
  })

  it('should call onClick when the button is clicked', () => {
    const handleClick = jest.fn()

    render(
      <Button
        type="button"
        background="gold"
        color="white"
        onClick={handleClick}
      >
        Test Button
      </Button>,
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})
