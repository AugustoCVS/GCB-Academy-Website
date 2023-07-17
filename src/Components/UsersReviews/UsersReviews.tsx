'use client'

import React from 'react'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import UserImage from '@/assets/Celular.svg'

import {
  SectionContainer,
  DivUserComment,
  UserComment,
  DivImage,
  DivContent,
} from './styles'
import { Title } from '../Title/Title'

export default function UsersReviews() {
  const items = [
    <DivUserComment key={1}>
      <UserComment>
        <DivImage>
          <Image
            src={UserImage}
            alt="Imagem do usuário"
            layout="fill"
            objectFit="cover"
          />
        </DivImage>
        <div>
          <h3>Levi Ciarrochi</h3>
          <span>****</span>
          <p>
            Que oportunidade incrível! Consigo ver um futuro brilhante aqui no
            GCB Academy. Ainda há muito a melhorar, mas estamos no caminho
            certo.
          </p>
        </div>
      </UserComment>
    </DivUserComment>,
    <DivUserComment key={2}>
      <UserComment>
        <DivImage>
          <Image
            src={UserImage}
            alt="Imagem do usuário"
            layout="fill"
            objectFit="cover"
          />
        </DivImage>
        <div>
          <h3>Gustavo Wuelta</h3>
          <span>**</span>
          <p>Alcancei um potencial absurdo graças ao GCB Academy.</p>
        </div>
      </UserComment>
    </DivUserComment>,

    <DivUserComment key={3}>
      <UserComment>
        <DivImage>
          <Image
            src={UserImage}
            alt="Imagem do usuário"
            layout="fill"
            objectFit="cover"
          />
        </DivImage>
        <div>
          <h3>Rogério Coelho</h3>
          <span>****</span>
          <p>Transforme seu futuro no GCB Academy.</p>
        </div>
      </UserComment>
    </DivUserComment>,
  ]

  const responsive = {
    320: { items: 1 },
    780: { items: 2 },
    1100: { items: 3 },
    1300: { items: 4 },
  }

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
