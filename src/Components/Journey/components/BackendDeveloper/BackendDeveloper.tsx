'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { onAuthChanged } from '../../../../../utils/firebase/authService'

import { DivContainer, DivContent } from './styles'
import BackendImg from '@/assets/QA.svg'
import BackendDeveloperModal from '@/Components/Modal/JourneyAndSuggestions/BackendDeveloperModal'

export default function BackendDeveloper() {
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
        <Image src={BackendImg} alt="imagem de um computador" />
        <DivContent>
          <h3>Backend Developer</h3>
          <p>132 sugestões</p>
          <span>**</span>
        </DivContent>
      </DivContainer>
    )
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <DivContainer>
          <Image src={BackendImg} alt="imagem de um computador" />
          <DivContent>
            <h3>Backend Developer</h3>
            <p>132 sugestões</p>
            <span>**</span>
          </DivContent>
        </DivContainer>
      </Dialog.Trigger>

      <BackendDeveloperModal />
    </Dialog.Root>
  )
}
