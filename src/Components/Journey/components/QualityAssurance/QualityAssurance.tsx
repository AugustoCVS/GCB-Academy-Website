'use client'

import Image from 'next/image'

import { DivContainer, DivContent } from './styles'
import QAImg from '@/assets/QA.svg'

export default function QualityAssurance() {
  return (
    <DivContainer>
      <Image src={QAImg} alt="imagem de um computador" />
      <DivContent>
        <h3>Quality Assurance</h3>
        <p>21 sugestões</p>
        <span>*****</span>
      </DivContent>
    </DivContainer>
  )
}
