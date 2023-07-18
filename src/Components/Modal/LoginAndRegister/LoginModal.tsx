'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import {
  CloseButton,
  Content,
  DivCheckBox,
  DivTitle,
  ModalForm,
  ModalTitle,
  Overlay,
} from './styles'
import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'
import RegisterModal from './RegisterModal'

export default function LoginModal() {
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
          <Input color="black" type="text" placeholder="E-mail" required />
          <Input color="black" type="text" placeholder="Senha" required />
          <DivCheckBox>
            <Input color="black" type="checkbox" />
            <p>Lembra minha conta</p>
          </DivCheckBox>
          <Button type="button" background="gold" color="white">
            Entrar
          </Button>
          <p>
            Não tem uma conta ?{' '}
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <span>Registre-se</span>
              </Dialog.Trigger>

              <RegisterModal />
            </Dialog.Root>
          </p>
        </ModalForm>
      </Content>
    </Dialog.Portal>
  )
}
