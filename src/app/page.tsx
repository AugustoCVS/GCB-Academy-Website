'use client'

import { ThemeProvider } from 'styled-components'

import AcademyNews from '@/Components/AcademyNews/AcademyNews'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import Hero from '@/Components/Hero/Hero'
import Journey from '@/Components/Journey/Journey'
import UsersReviews from '@/Components/UsersReviews/UsersReviews'
import AboutUs from '@/Components/AboutUs/AboutUs'

import { MainContainer } from '@/styles/pages.style'
import { defaultTheme } from '@/styles/themes/defaultTheme'
import { AuthProvider } from '@/context/AuthContext'

export default function Home() {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <MainContainer>
          <Header />
          <Hero />
          <Journey />
          <AboutUs />
          <UsersReviews />
          <AcademyNews />
          <Footer />
        </MainContainer>
      </ThemeProvider>
    </AuthProvider>
  )
}
