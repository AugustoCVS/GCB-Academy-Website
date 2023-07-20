'use client'

import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import UserImage from '@/assets/Celular.svg'
import { SectionContainer, DivContent } from './styles'
import { Title } from '../Title/Title'
import Comments, { CommentProps } from './components/Comments/Comments'

const UserComments: CommentProps[] = [
  {
    id: 1,
    img: UserImage,
    title: 'Levi Ciarrochi',
    stars: '****',
    comment:
      'Que oportunidade incrível! Consigo ver um futuro brilhante aqui no GCB Academy. Ainda há muito a melhorar, mas estamos no caminho certo.',
  },
  {
    id: 2,
    img: UserImage,
    title: 'Gustavo Wuelta',
    stars: '**',
    comment: 'Alcancei um potencial absurdo graças ao GCB Academy.',
  },
  {
    id: 3,
    img: UserImage,
    title: 'Rogério Coelho',
    stars: '****',
    comment: 'Transforme seu futuro no GCB Academy.',
  },
  {
    id: 4,
    img: UserImage,
    title: 'Augusto Santana',
    stars: '****',
    comment: 'Incrivel experiência',
  },
]

const items = UserComments.map((data) => (
  <Comments
    key={data.id}
    id={data.id}
    img={data.img}
    title={data.title}
    stars={data.stars}
    comment={data.comment}
  />
))

const responsive = {
  320: { items: 1 },
  780: { items: 2 },
  1300: { items: 3 },
  1500: { items: 4 },
}

export default function UsersReviews() {
  return (
    <SectionContainer>
      <Title type="h2" color="darkGold">
        Veja o que outros colaboradores dizem!
      </Title>
      <DivContent>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </DivContent>
    </SectionContainer>
  )
}
