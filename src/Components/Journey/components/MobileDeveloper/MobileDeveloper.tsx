'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { onAuthChanged } from '../../../../../utils/firebase/authService'

import { DivContainer, DivContent } from './styles'
import CelularImg from '@/assets/Celular.svg'
import MobileDeveloperModal from '@/Components/Modal/JourneyAndSuggestions/MobileDeveloperModal'

export default function MobileDeveloper() {
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
        <Image src={CelularImg} alt="imagem de um celular" />
        <DivContent>
          <h3>Mobile Developer</h3>
          <p>41 sugestões</p>
          <span>****</span>
        </DivContent>
      </DivContainer>
    )
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <DivContainer>
          <Image src={CelularImg} alt="imagem de um celular" />
          <DivContent>
            <h3>Mobile Developer</h3>
            <p>41 sugestões</p>
            <span>****</span>
          </DivContent>
        </DivContainer>
      </Dialog.Trigger>

      <MobileDeveloperModal />
    </Dialog.Root>
  )
}
