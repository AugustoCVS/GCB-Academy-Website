'use client'

import {
  IntroButton,
  BackgroundImg,
  SectionHeroContainer,
  DivHeroContent,
} from './style'
import BgImg from '@/assets/BackgroundImg.svg'

export default function Hero() {
  return (
    <SectionHeroContainer>
      <BackgroundImg
        src={BgImg}
        alt="Papel de parede"
        layout="cover"
        height={910}
      />
      <DivHeroContent>
        <h2>Eleve sua jornada para o próximo nível com excelência!</h2>
        <p>
          Desde 2021, o GCB Academy tem ajudado pessoas a crescerem
          profissionalmente.
        </p>
        <IntroButton>Vamos Explorar!</IntroButton>
      </DivHeroContent>
    </SectionHeroContainer>
  )
}
