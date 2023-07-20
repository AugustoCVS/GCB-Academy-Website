'use client'

import { ToastContainer } from 'react-toastify'

import { ThemeProvider } from 'styled-components'
import AcademyNews from '@/Components/AcademyNews/AcademyNews'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import Hero from '@/Components/Hero/Hero'
import Journey from '@/Components/Journey/Journey'
import UsersReviews from '@/Components/UsersReviews/UsersReviews'
import { AboutUs } from '@/Components/AboutUs/AboutUs'
import { MainContainer } from '@/styles/pages.style'
import { defaultTheme } from '@/styles/themes/defaultTheme'

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
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
  )
}
