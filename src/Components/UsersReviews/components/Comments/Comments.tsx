'use client'

import Image from 'next/image'

import { DivImage, DivUserComment, UserComment } from './styles'

export interface CommentProps {
  id: number
  img: string
  title: string
  stars: string
  comment: string
}

export default function Comments({
  id,
  img,
  title,
  stars,
  comment,
}: CommentProps) {
  return (
    <DivUserComment key={id} data-testid={`user-comment-${id}`}>
      <UserComment>
        <DivImage>
          <Image
            src={img}
            alt={`Imagem do usuário ${title}`}
            layout="fill"
            objectFit="cover"
          />
        </DivImage>
        <div>
          <h3>{title}</h3>
          <span>{stars}</span>
          <p>{comment}</p>
        </div>
      </UserComment>
    </DivUserComment>
  )
}
