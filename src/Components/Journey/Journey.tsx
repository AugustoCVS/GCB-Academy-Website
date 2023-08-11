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

import BackEndImg from '../../assets/BackendDeveloper.jpeg'
import WebDevImg from '../../assets/WebDeveloper.jpeg'
import MobileDevImg from '../../assets/Celular.svg'
import QAImg from '../../assets/QA.svg'
import { Star } from 'phosphor-react'

const itemsCards: ICardJourneyProps[] = [
  {
    id: 1,
    bgcolor: '#00D173',
    img: WebDevImg,
    title: 'Web Developer',
    text: '21 sugestões',
    stars: "****",
    journeyType: 'WebDeveloper',
  },
  {
    id: 2,
    bgcolor: '#FFAC52',
    img: MobileDevImg,
    title: 'Mobile Developer',
    text: '41 sugestões',
    stars: '*****',
    journeyType: 'MobileDeveloper',
  },
  {
    id: 3,
    bgcolor: '#0097FE',
    img: BackEndImg,
    title: 'Backend Developer',
    text: '21 sugestões',
    stars: '****',
    journeyType: 'BackendDeveloper',
  },
  {
    id: 4,
    bgcolor: '#68D4AE',
    img: QAImg,
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
      bgcolor={card.bgcolor}
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
    <SectionJourneyContainer id="journey">
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
