'use client'

import Image from 'next/image'

import { DivImage, UserComment } from './styles'
import UserImage from '@/assets/Celular.svg'

interface Comment {
  id: number
  img: string
  title: string
  stars: string
  comment: string
}

export default function Comments() {
  const UserComments: Comment[] = [
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

  return (
    <>
      {UserComments.map((comment) => (
        <UserComment key={comment.id}>
          <DivImage>
            <Image
              src={comment.img}
              alt="Imagem do usuário"
              layout="fill"
              objectFit="cover"
            />
          </DivImage>
          <div>
            <h3>{comment.title}</h3>
            <span>{comment.stars}</span>
            <p>{comment.comment}</p>
          </div>
        </UserComment>
      ))}
    </>
  )
}
