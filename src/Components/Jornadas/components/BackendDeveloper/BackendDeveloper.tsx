'use client'

import Image from 'next/image'

import { DivContainer, DivContent } from './styles'
import BackendImg from '../../../../assets/QA.svg'

export default function BackendDeveloper() {
  return (
    <DivContainer>
      <Image src={BackendImg} alt="imagem de um computador" />
      <DivContent>
        <h3>Backend Developer</h3>
        <p>132 sugestões</p>
        <span>**</span>
      </DivContent>
    </DivContainer>
  )
}
