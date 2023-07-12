'use client'

import Image from 'next/image'

import { DivContainer, DivContent } from './styles'
import CelularImg from '../../../../assets/Celular.svg'

export default function MobileDeveloper() {
  return (
    <DivContainer>
      <Image src={CelularImg} alt="imagem de um celular" />
      <DivContent>
        <h3>Mobile Developer</h3>
        <p>41 sugestões</p>
        <span>****</span>
      </DivContent>
    </DivContainer>
  )
}
