'use client'

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

export default function SuggestionModal() {
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
          <strong>Título: </strong> Tecnologias
        </p>

        <p>
          <strong>Autor: </strong> Rafael Ramos Costa
        </p>

        <DivMessage>
          <div>
            <WarningCircle size={20} />
          </div>

          <p>
            Acho que seria válido ensinar aos membros do Academy sobre Google
            Tag Manager e Redux.
          </p>
        </DivMessage>

        <DivButton>
          <CancelButton>Fechar</CancelButton>
        </DivButton>
      </Content>
    </Dialog.Portal>
  )
}
