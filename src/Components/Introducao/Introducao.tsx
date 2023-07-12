'use client'

import {
  SectionIntroContainer,
  DivIntroContent,
  IntroButton,
  BackgroundImg,
} from './styles'

import BgImg from '../../assets/BackgroundImg.svg'

export default function Introducao() {
  return (
    <SectionIntroContainer>
      <BackgroundImg
        src={BgImg}
        alt="Papel de parede"
        layout="cover"
        height={910}
      />
      <DivIntroContent>
        <h2>Eleve sua jornada para o próximo nível com excelência!</h2>
        <p>
          Desde 2021, o GCB Academy tem ajudado pessoas a crescerem
          profissionalmente.
        </p>
        <IntroButton>Vamos Explorar!</IntroButton>
      </DivIntroContent>
    </SectionIntroContainer>
  )
}
