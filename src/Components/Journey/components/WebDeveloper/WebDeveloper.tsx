'use client'

import Image from 'next/image'

import { DivContainer, DivContent } from './styles'
import WebDeveloperImg from '@/assets/Celular.svg'
import * as Dialog from '@radix-ui/react-dialog'
import WebDeveloperModal from '@/Components/Modal/JourneyAndSuggestions/WebDeveloperModal'

export default function WebDeveloper() {
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
