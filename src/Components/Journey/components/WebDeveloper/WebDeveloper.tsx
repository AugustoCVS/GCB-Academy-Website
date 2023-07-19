'use client'

import Image from 'next/image'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { onAuthChanged } from '../../../../../utils/firebase/authService'
import * as Dialog from '@radix-ui/react-dialog'

import { DivContainer, DivContent } from './styles'
import WebDeveloperImg from '@/assets/Celular.svg'
import WebDeveloperModal from '@/Components/Modal/JourneyAndSuggestions/WebDeveloperModal'

export default function WebDeveloper() {
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
        <Image src={WebDeveloperImg} alt="imagem de um computador" />
        <DivContent>
          <h3>Web Developer</h3>
          <p>21 sugestões</p>
          <span>*****</span>
        </DivContent>
      </DivContainer>
    )
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <DivContainer>
          <Image src={WebDeveloperImg} alt="imagem de um computador" />
          <DivContent>
            <h3>Web Developer</h3>
            <p>21 sugestões</p>
            <span>*****</span>
          </DivContent>
        </DivContainer>
      </Dialog.Trigger>

      <WebDeveloperModal />
    </Dialog.Root>
  )
}
