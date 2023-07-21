import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import Input from './Input'

describe('Input', () => {
  it('should render the input with the provided color and placeholder', () => {
    const placeholder = 'Enter your name'
    render(
      <Input color="black" placeholder={placeholder} data-testid="input" />,
    )

    const inputElement = screen.getByTestId('input')

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveStyleRule('color: black')
    expect(inputElement).toHaveStyleRule('border-color: white')
  })

  it('should be rendered on the screen', () => {
    const placeholder = 'Enter your name'
    render(
      <Input color="black" placeholder={placeholder} data-testid="input" />,
    )

    const inputElement = screen.getByTestId('input')

    expect(inputElement).toBeInTheDocument()
  })
})
