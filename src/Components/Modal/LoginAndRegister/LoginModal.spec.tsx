import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import LoginModal from './LoginModal'
import * as authService from '../../../../utils/firebase/authService'

jest.mock('../../../../utils/firebase/authService')

describe('LoginModal', () => {
  it.skip('should render correctly', () => {
    const setLoginOpen = jest.fn()

    render(<LoginModal />)

    const titleModal = screen.getByText('Entrar')
    expect(titleModal).toBeInTheDocument()

    const emailInput = screen.getByPlaceholderText('E-mail')
    expect(emailInput).toBeInTheDocument()

    const passwordInput = screen.getByPlaceholderText('Senha')
    expect(passwordInput).toBeInTheDocument()

    const loginButton = screen.getByRole('button', { name: 'Entrar' })
    expect(loginButton).toBeInTheDocument()
  })

  it.skip('should call handleUserLogin and close modal on successful login', async () => {
    const setLoginOpen = jest.fn()

    const spyFn = jest.spyOn(authService, 'login').mockImplementation()

    render(<LoginModal />)

    const emailInput = screen.getByPlaceholderText('E-mail')
    const passwordInput = screen.getByPlaceholderText('Senha')
    const loginButton = screen.getByRole('button', { name: 'Entrar' })

    fireEvent.change(emailInput, { target: { value: 'augusto@example.com' } })
    fireEvent.change(passwordInput, { target: { value: '12345678*12' } })

    fireEvent.click(loginButton)

    await waitFor(() => expect(authService.login).toHaveBeenCalled())

    expect(authService.login).toHaveBeenCalledWith('augusto@example.com', '12345678*12')

  })
})
