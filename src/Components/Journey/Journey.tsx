'use client'

import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import WaveBottom from '../../assets/BottomWave.svg'
import BackendDeveloper from './components/BackendDeveloper/BackendDeveloper'
import MobileDeveloper from './components/MobileDeveloper/MobileDeveloper'
import QualityAssurance from './components/QualityAssurance/QualityAssurance'
import WebDeveloper from './components/WebDeveloper/WebDeveloper'
import {
  DivComponent,
  DivJourneyContent,
  SectionJourneyContainer,
  WaveBottomImg,
} from './style'

export default function Journey() {
  const responsive = {
    320: { items: 1 },
    780: { items: 2 },
    1100: { items: 3 },
    1300: { items: 4 },
  }

  const items = [
    <DivComponent key={1} style={{ padding: '0 10px' }}>
      <WebDeveloper />
    </DivComponent>,
    <DivComponent key={2} style={{ padding: '0 10px' }}>
      <MobileDeveloper />
    </DivComponent>,
    <DivComponent key={3} style={{ padding: '0 10px' }}>
      <BackendDeveloper />
    </DivComponent>,
    <DivComponent key={4} style={{ padding: '0 10px' }}>
      <QualityAssurance />
    </DivComponent>,
  ]

  return (
    <SectionJourneyContainer>
      <WaveBottomImg src={WaveBottom} alt="imagem de uma onda" />
      <h2>Jornadas</h2>
      <DivJourneyContent>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </DivJourneyContent>
    </SectionJourneyContainer>
  )
}
