'use client'

import { Button } from '../Button/Button'
import { BackgroundImg, SectionHeroContainer, DivHeroContent } from './style'
import BgImg from '../../assets/BackgroundImg.svg'

export default function Hero() {
  return (
    <SectionHeroContainer id="hero">
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
        <Button type="button" background="gold" color="white">
          Vamos explorar!
        </Button>
      </DivHeroContent>
    </SectionHeroContainer>
  )
}
