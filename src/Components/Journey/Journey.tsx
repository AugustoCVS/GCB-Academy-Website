'use client'

import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import WaveBottom from '../../assets/BottomWave.svg'
import {
  DivComponent,
  DivJourneyContent,
  SectionJourneyContainer,
  WaveBottomImg,
} from './style'
import { Title } from '../Title/Title'
import CardJourney, { ICardJourneyProps } from './components/CardJourney'

import BackEndImg from '@/assets/QA.svg'
// import WebDevImg from '@/assets/Celular.svg'
import MobileDevImg from '@/assets/Celular.svg'
// import QAImg from '@/assets/QA.svg'

const itemsCards: ICardJourneyProps[] = [
  {
    id: 1,
    img: MobileDevImg,
    title: 'Web Developer',
    text: '21 sugestões',
    stars: '*****',
    journeyType: 'WebDeveloper',
  },
  {
    id: 2,
    img: MobileDevImg,
    title: 'Mobile Developer',
    text: '41 sugestões',
    stars: '*****',
    journeyType: 'MobileDeveloper',
  },
  {
    id: 3,
    img: BackEndImg,
    title: 'Backend Developer',
    text: '21 sugestões',
    stars: '****',
    journeyType: 'BackendDeveloper',
  },
  {
    id: 4,
    img: BackEndImg,
    title: 'Quality Assurance',
    text: '10 sugestões',
    stars: '***',
    journeyType: 'QualityAssurance',
  },
]

const items = itemsCards.map((card) => (
  <DivComponent key={card.id} style={{ padding: '0 10px' }}>
    <CardJourney
      id={card.id}
      img={card.img}
      title={card.title}
      text={card.text}
      stars={card.stars}
      journeyType={card.journeyType}
    />
  </DivComponent>
))

const responsive = {
  320: { items: 1 },
  780: { items: 2 },
  1100: { items: 3 },
  1300: { items: 4 },
}

export default function Journey() {
  return (
    <SectionJourneyContainer>
      <WaveBottomImg src={WaveBottom} alt="imagem de uma onda" />
      <Title type="h2" color="white">
        Jornada
      </Title>
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
