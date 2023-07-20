import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { onAuthChanged } from '../../../../utils/firebase/authService'

import { DivContainer, DivContent } from './styles'
import CardJourneyModal from '@/Components/Modal/JourneyAndSuggestions/Journey/CardJourneyModal'

export interface ICardJourneyProps {
  id: number
  img: string
  title: string
  text: string
  stars: string
  journeyType: string
}

export default function CardJourney({
  img,
  title,
  text,
  stars,
  journeyType,
}: ICardJourneyProps) {
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    function userLogOut() {
      return onAuthChanged((user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(user)
        }
      })
    }

    return userLogOut()
  }, [])

  if (!user) {
    return (
      <DivContainer>
        <Image src={img} alt="imagem de um computador" />
        <DivContent>
          <h3>{title}</h3>
          <p>{text}</p>
          <span>{stars}</span>
        </DivContent>
      </DivContainer>
    )
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <DivContainer>
          <Image src={img} alt="imagem de um computador" />
          <DivContent>
            <h3>{title}</h3>
            <p>{text}</p>
            <span>{stars}</span>
          </DivContent>
        </DivContainer>
      </Dialog.Trigger>

      <CardJourneyModal journeyType={journeyType} />
    </Dialog.Root>
  )
}
