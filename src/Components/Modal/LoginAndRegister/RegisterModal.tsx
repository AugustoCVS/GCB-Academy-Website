'use client'

import * as Dialog from '@radix-ui/react-dialog'

import {
  CloseButton,
  Content,
  DivCheckBox,
  DivTitle,
  DivWarningMessage,
  ModalForm,
  ModalTitle,
  Overlay,
} from './styles'
import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'
import { WarningCircle, X } from 'phosphor-react'

export default function RegisterModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <DivTitle>
          <ModalTitle>Entrar</ModalTitle>
          <CloseButton>
            <X size={18} />
          </CloseButton>
        </DivTitle>

        <p>Entre na sua conta para continuar o processo</p>

        <ModalForm>
          <Input
            color="black"
            type="text"
            placeholder="Nome Completo"
            required
          />
          <Input color="black" type="text" placeholder="E-mail" required />
          <Input color="black" type="text" placeholder="Senha" required />
          <DivWarningMessage>
            <WarningCircle />
            <p>
              Mínimo de 8 caracteres, no mínimo um número e um caractere
              especial
            </p>
          </DivWarningMessage>

          <Input
            color="black"
            type="text"
            placeholder="Confirmação de Senha"
            required
          />

          <DivCheckBox>
            <Input color="black" type="checkbox" />
            <p>
              Eu li, concordo e aceito o <span>Termos e Condições</span>
            </p>
          </DivCheckBox>

          <Button type="button" background="gold" color="white">
            Criar
          </Button>
        </ModalForm>
      </Content>
    </Dialog.Portal>
  )
}
