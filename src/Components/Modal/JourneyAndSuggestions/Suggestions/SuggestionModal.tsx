import React from 'react' // Importe o React
import * as Dialog from '@radix-ui/react-dialog'
import { WarningCircle, X } from 'phosphor-react'
import {
  CancelButton,
  CloseButton,
  Content,
  DivButton,
  DivMessage,
  DivTitle,
  ModalTitle,
  Overlay,
} from './styles'

interface SuggestionModalProps {
  title: string
  description: string
  onClose: () => void
}

export default function SuggestionModal({
  title,
  description,
  onClose,
}: SuggestionModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <DivTitle>
          <ModalTitle>Sugestão</ModalTitle>
          <CloseButton>
            <X size={18} />
          </CloseButton>
        </DivTitle>
        <p>
          <strong>Título: </strong> {title}
        </p>

        <DivMessage>
          <div>
            <WarningCircle size={20} />
          </div>

          <p>{description}</p>
        </DivMessage>

        <DivButton>
          <CancelButton onClick={onClose}>Fechar</CancelButton>
        </DivButton>
      </Content>
    </Dialog.Portal>
  )
}
