'use client'

import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import { DivContainer, DivContent } from './styles'
import QAImg from '@/assets/QA.svg'
import QualityAssuranceModal from '@/Components/Modal/JourneyAndSuggestions/QualityAssuranceModal'

export default function QualityAssurance() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <DivContainer>
          <Image src={QAImg} alt="imagem de um computador" />
          <DivContent>
            <h3>Quality Assurance</h3>
            <p>21 sugestões</p>
            <span>*****</span>
          </DivContent>
        </DivContainer>
      </Dialog.Trigger>

      <QualityAssuranceModal />
    </Dialog.Root>
  )
}
