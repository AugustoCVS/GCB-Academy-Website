import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'
import { logOut, onAuthChanged } from '../../../utils/firebase/authService'
import GcbLogo from '@/assets/GcbLogo.svg'

jest.mock('../../../utils/firebase/authService', () => ({
  logOut: jest.fn(),
  onAuthChanged: jest.fn(),
}))

describe('Header', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the logo on the screen', () => {
    render(<Header />)
    const logo = screen.getByRole('img', { name: 'Logo da Empresa GCB' })
    expect(logo).toBeInTheDocument()
    expect(logo.getAttribute('src')).toEqual(GcbLogo)
  })

  it('should open the login modal when clicking "Entrar"', () => {
    ;(onAuthChanged as jest.Mock).mockImplementation((callback: any) => {
      callback(null)
      return jest.fn()
    })

    render(<Header />)
    const entrarButtons = screen.getAllByText('Entrar')
    expect(entrarButtons.length).toBeGreaterThan(0)

    fireEvent.click(entrarButtons[0])

    const loginModal = screen.getByRole('dialog', { name: 'Entrar' })
    expect(loginModal).toBeInTheDocument()
  })

  it('should call logOut when clicking "Sair"', () => {
    const authenticatedUser = {
      uid: 'user123',
      displayName: 'John Doe',
      email: 'john.doe@example.com',
    }

    ;(onAuthChanged as jest.Mock).mockImplementation((callback: any) => {
      callback(authenticatedUser)
      return jest.fn()
    })

    render(<Header />)
    const sairButtons = screen.getAllByText('Sair')
    expect(sairButtons.length).toBeGreaterThan(0)

    fireEvent.click(sairButtons[0])

    expect(logOut).toHaveBeenCalledTimes(1)
  })
})
