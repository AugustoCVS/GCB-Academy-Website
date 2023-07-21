import { render, screen } from '@testing-library/react'

import Footer from './Footer'

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

test('should render Footer correctly', () => {
  render(<Footer />)

  const waveTopImg = screen.getByAltText('imagem de uma onda')
  expect(waveTopImg).toBeInTheDocument()

  const facebookLogo = screen.getByRole('link', { name: 'logo do Facebook' })
  expect(facebookLogo).toBeInTheDocument()
  expect(facebookLogo.getAttribute('href')).toBe(
    'https://www.facebook.com/gcbinvestimentos/?locale=pt_BR',
  )

  const instagramLogo = screen.getByRole('link', { name: 'logo do Instagram' })
  expect(instagramLogo).toBeInTheDocument()
  expect(instagramLogo.getAttribute('href')).toBe(
    'https://www.instagram.com/gcbinvestimentos/',
  )

  const twitterLogo = screen.getByRole('link', { name: 'logo do Twitter' })
  expect(twitterLogo).toBeInTheDocument()
  expect(twitterLogo.getAttribute('href')).toBe('https://twitter.com/grupogcb')

  const gcbInvestimentosLink = screen.getByRole('link', {
    name: 'GCB Investimentos',
  })
  expect(gcbInvestimentosLink).toBeInTheDocument()
  expect(gcbInvestimentosLink.getAttribute('href')).toBe(
    'https://gcbinvestimentos.com/',
  )

  const adianteRecebiveisLink = screen.getByRole('link', {
    name: 'Adiante Recebíveis',
  })
  expect(adianteRecebiveisLink).toBeInTheDocument()
  expect(adianteRecebiveisLink.getAttribute('href')).toBe(
    'https://adiantesa.com/',
  )

  const peerBrLink = screen.getByRole('link', { name: 'PeerBR' })
  expect(peerBrLink).toBeInTheDocument()
  expect(peerBrLink.getAttribute('href')).toBe('https://peerbr.com/')

  const fmiLink = screen.getByRole('link', { name: 'FMI' })
  expect(fmiLink).toBeInTheDocument()
  expect(fmiLink.getAttribute('href')).toBe('https://fmisa.com.br/')

  const bmsPartnersLink = screen.getByRole('link', { name: 'BMS Partners' })
  expect(bmsPartnersLink).toBeInTheDocument()
  expect(bmsPartnersLink.getAttribute('href')).toBe(
    'https://bmspartners.com.br/',
  )

  const phoneNumber = screen.getByText('(11) 2500-4699')
  expect(phoneNumber).toBeInTheDocument()

  const email = screen.getByText('academy@gcb.investimentos.com')
  expect(email).toBeInTheDocument()

  const developedByMessage = screen.getByText(
    'Desenvolvido por Augusto Santana. Obrigado!',
  )
  expect(developedByMessage).toBeInTheDocument()
})
