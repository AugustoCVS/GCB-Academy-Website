import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/themes/defaultTheme'
import AcademyNews from './AcademyNews'

interface ImgProps {
  src: string
  alt: string
}

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: ImgProps) => (
    <img src={src} alt={alt} data-testid="mocked-next-image" />
  ),
}))

describe('AcademyNews', () => {
  it('should render AcademyNews component', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <AcademyNews />
      </ThemeProvider>,
    )

    const title = screen.getByText('Inscreva-se no Academy News')
    const description = screen.getByText(
      'Receba as últimas notícias, atualizações e outras coisas da semana.',
    )
    const inputEmail = screen.getByPlaceholderText('Seu e-mail aqui')
    const button = screen.getByRole('button', { name: 'Assine' })

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should render AcademyNews component with image', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <AcademyNews />
      </ThemeProvider>,
    )

    const imageContainer = screen.getByTestId('mocked-next-image')

    expect(imageContainer).toBeInTheDocument()
    expect(imageContainer).toHaveAttribute(
      'alt',
      'imagem de uma caixa de correio',
    )
  })
})
