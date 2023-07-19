import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, UserCredential } from 'firebase/auth'
import { login, logOut, onAuthChanged } from '../../utils/firebase/authService'

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<User>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = async (
    email: string,
    password: string,
  ): Promise<User> => {
    try {
      const userCredential: UserCredential = await login(email, password)
      setUser(userCredential.user) // Set the user after a successful login
      return userCredential.user
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.')
    }
  }

  const handleLogout = async (): Promise<void> => {
    try {
      await logOut()
      setUser(null) // Set the user to null after logging out
    } catch (error) {
      throw new Error('Logout failed. Please try again.')
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthChanged((user) => {
      setUser(user)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const auth = useContext(AuthContext)
  if (!auth) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return auth
}
