import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/themes/defaultTheme'
import { AboutUs } from './AboutUs'

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

describe('About Us', () => {
  it.only('should render AboutUs component', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <AboutUs />
      </ThemeProvider>,
    )

    const Title = screen.getByText('Sobre nós')

    screen.logTestingPlaygroundURL()

    expect(Title).toBeInTheDocument()
  })

  it('should render AboutUs component with image', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <AboutUs />
      </ThemeProvider>,
    )

    const ImageContainers = screen.getAllByTestId('mocked-next-image')

    expect(ImageContainers).toHaveLength(2)
    expect(ImageContainers[0]).toHaveAttribute('alt', 'imagem de uma onda')
    expect(ImageContainers[1]).toHaveAttribute(
      'alt',
      'imagem de uma pessoa mexendo em uma tela gigante',
    )
  })

  it('should test if the accessibility component has the correct description', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <AboutUs />
      </ThemeProvider>,
    )

    const imgContainers = screen.getAllByTestId('mocked-next-image')
    const accessibilityElement = screen.getByAltText(
      'imagem de uma pessoa mexendo em uma tela gigante',
    )

    expect(imgContainers[1]).toContainElement(accessibilityElement)
  })
})
