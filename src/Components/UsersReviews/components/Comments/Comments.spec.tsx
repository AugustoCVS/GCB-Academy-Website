import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Comments, { CommentProps } from './Comments'

import Img from '@/assets/GcbLogo.svg'

describe('Comments', () => {
  const defaultProps: CommentProps[] = [
    {
      id: 1,
      img: Img,
      title: 'Augusto',
      stars: '*****',
      comment: 'This is a great product!',
    },
    {
      id: 2,
      img: Img,
      title: 'Larissa',
      stars: '****',
      comment: 'Really happy with the purchase!',
    },
  ]

  it('should render each comment with the correct information', () => {
    render(
      <>
        {defaultProps.map((comment) => (
          <Comments key={comment.id} {...comment} />
        ))}
      </>,
    )

    for (const comment of defaultProps) {
      const commentElement = screen.getByTestId(`user-comment-${comment.id}`)
      const imageElement = screen.getByAltText(
        `Imagem do usuário ${comment.title}`,
      )
      const titleElement = screen.getByText(comment.title)
      const starsElement = screen.getByText(comment.stars)
      const commentTextElement = screen.getByText(comment.comment)

      expect(commentElement).toBeInTheDocument()
      expect(imageElement).toBeInTheDocument()
      expect(titleElement).toBeInTheDocument()
      expect(starsElement).toBeInTheDocument()
      expect(commentTextElement).toBeInTheDocument()
    }
  })
})
