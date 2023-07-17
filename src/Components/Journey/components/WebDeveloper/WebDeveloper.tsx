'use client'

import Image from 'next/image'

import { DivContainer, DivContent } from './styles'
import WebDeveloperImg from '@/assets/Celular.svg'

export default function WebDeveloper() {
  return (
    <DivContainer>
      <Image src={WebDeveloperImg} alt="imagem de um computador" />
      <DivContent>
        <h3>Web Developer</h3>
        <p>21 sugestões</p>
        <span>*****</span>
      </DivContent>
    </DivContainer>
  )
}
