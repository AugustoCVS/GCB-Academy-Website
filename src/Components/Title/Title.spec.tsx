import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { Title } from './Title'

describe('Title', () => {
  it('should render a heading element with the correct text and style', () => {
    render(
      <Title type="h1" color="white">
        Hello World
      </Title>,
    )

    const titleElement = screen.getByText('Hello World')

    expect(titleElement.tagName).toBe('H1')

    expect(titleElement).toHaveTextContent('Hello World')

    expect(titleElement).toHaveStyleRule('color: white')
  })

  it('should render a different heading element when the "type" prop is "h2"', () => {
    render(
      <Title type="h2" color="darkGold">
        Hello World
      </Title>,
    )

    const titleElement = screen.getByText('Hello World')

    expect(titleElement.tagName).toBe('H2')
  })
})
