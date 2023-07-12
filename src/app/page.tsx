'use client'

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
    </MainContainer>
  )
}
