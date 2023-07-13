'use client'

import AcademyNews from '@/Components/AcademyNews/AcademyNews'
import Footer from '@/Components/Footer/Footer'
import Introducao from '@/Components/Introducao/Introducao'
import Jornadas from '@/Components/Jornadas/Jornadas'
import OutrosDizem from '@/Components/OutrosDizem/OutrosDizem'
import SobreNos from '@/Components/SobreNos/SobreNos'

import { MainContainer } from '@/styles/pages.style'

export default function Home() {
  return (
    <MainContainer>
      <Introducao />
      <Jornadas />
      <SobreNos />
      <OutrosDizem />
      <AcademyNews />
      <Footer />
    </MainContainer>
  )
}
