'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import BackendDeveloper from './components/BackendDeveloper/BackendDeveloper'
import MobileDeveloper from './components/MobileDeveloper/MobileDeveloper'
import QualityAssurance from './components/QualityAssurance/QualityAssurance'
import WebDeveloper from './components/WebDeveloper/WebDeveloper'
import { DivJornadaContent, SectionContainer } from './style'

export default function Jornadas() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
    },
  })

  return (
    <SectionContainer>
      <h2>Jornadas</h2>
      <DivJornadaContent ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <WebDeveloper />
        </div>
        <div className="keen-slider__slide">
          <MobileDeveloper />
        </div>
        <div className="keen-slider__slide">
          <BackendDeveloper />
        </div>
        <div className="keen-slider__slide">
          <QualityAssurance />
        </div>
      </DivJornadaContent>
    </SectionContainer>
  )
}
