'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import {
  CancelButton,
  CloseButton,
  Content,
  DivButton,
  DivTitle,
  ModalForm,
  ModalTitle,
  Overlay,
} from './styles'
import { Input } from '@/Components/Input/Input'
import { Button } from '@/Components/Button/Button'

export default function CreateSuggestionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <DivTitle>
          <ModalTitle>Criar uma Sugestão</ModalTitle>
          <CloseButton>
            <X size={18} />
          </CloseButton>
        </DivTitle>

        <ModalForm>
          <Input color="black" type="text" placeholder="Título" required />

          <textarea placeholder="Descrição" required />

          <DivButton>
            <CancelButton>Cancelar</CancelButton>
            <Button type="button" background="gold" color="white">
              Criar
            </Button>
          </DivButton>
        </ModalForm>
      </Content>
    </Dialog.Portal>
  )
}
