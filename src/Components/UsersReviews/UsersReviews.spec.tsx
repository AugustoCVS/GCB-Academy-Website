import React from 'react'
import { render, screen } from '@testing-library/react'
import UsersReviews from './UsersReviews'

describe('UsersReviews', () => {
  it('should render the title correctly', () => {
    render(<UsersReviews />)
    const titleElement = screen.getByText(
      'Veja o que outros colaboradores dizem!',
    )
    expect(titleElement).toBeInTheDocument()
  })

  it('should render each comment with the correct information', () => {
    render(<UsersReviews />)
    const comments = screen.getAllByTestId(/user-comment-\d+/)
    expect(comments).toHaveLength(4)

    const commentData = [
      {
        title: 'Levi Ciarrochi',
        stars: '****',
        comment:
          'Que oportunidade incrível! Consigo ver um futuro brilhante aqui no GCB Academy. Ainda há muito a melhorar, mas estamos no caminho certo.',
      },
      {
        title: 'Gustavo Wuelta',
        stars: '**',
        comment: 'Alcancei um potencial absurdo graças ao GCB Academy.',
      },
      {
        title: 'Rogério Coelho',
        stars: '****',
        comment: 'Transforme seu futuro no GCB Academy.',
      },
      {
        title: 'Augusto Santana',
        stars: '****',
        comment: 'Incrivel experiência',
      },
    ]

    comments.forEach((commentElement, index) => {
      const titleElement = screen.getByText(commentData[index].title)
      const starsElements = screen.getAllByText(commentData[index].stars)
      const commentTextElement = screen.getByText(commentData[index].comment)

      expect(titleElement).toBeInTheDocument()
      starsElements.forEach((starElement) => {
        expect(starElement).toBeInTheDocument()
      })
      expect(commentTextElement).toBeInTheDocument()
    })
  })
})
