import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from './Hero'

describe('Hero', () => {
  it('should render the hero section with correct content', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 2 })
    const paragraph = screen.getByText(
      'Desde 2021, o GCB Academy tem ajudado pessoas a crescerem profissionalmente.',
    )
    const exploreButton = screen.getByRole('button', {
      name: 'Vamos explorar!',
    })

    expect(heading).toBeInTheDocument()
    expect(paragraph).toBeInTheDocument()
    expect(exploreButton).toBeInTheDocument()
  })

  it('should render a background image with the correct alt text', () => {
    render(<Hero />)

    const backgroundImg = screen.getByRole('img')

    expect(backgroundImg).toBeInTheDocument()
    expect(backgroundImg).toHaveAttribute('alt', 'Papel de parede')
  })
})
