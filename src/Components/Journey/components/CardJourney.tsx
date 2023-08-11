import * as Dialog from '@radix-ui/react-dialog'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { onAuthChanged } from '../../../../utils/firebase/authService'

import { DivContainer, DivContent, ImgContainer } from './styles'
import CardJourneyModal from '../../Modal/JourneyAndSuggestions/Journey/CardJourneyModal'
import { Star } from 'phosphor-react'

export interface ICardJourneyProps {
  id: number
  bgcolor: string
  img: string | any
  title: string
  text: string
  stars: string 
  journeyType: string
}

export default function CardJourney({
  img,
  bgcolor,
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
      <DivContainer bgcolor={bgcolor}>
        <ImgContainer src={img} alt="imagem de um computador" />
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
        <DivContainer bgcolor={bgcolor}>
          <ImgContainer src={img} alt="imagem de um computador" />
          <DivContent>
            <h3>{title}</h3>
            <p>{text}</p>
            <span><Star/> <Star /> <Star /> <Star /></span>
          </DivContent>
        </DivContainer>
      </Dialog.Trigger>

      <CardJourneyModal journeyType={journeyType} />
    </Dialog.Root>
  )
}
