'use client'

import { login } from '../../../../utils/firebase/authService'
import { toast } from 'react-toastify'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CloseButton,
  DivCheckBox,
  DivTitle,
  ErrorMessage,
  ModalForm,
  ModalTitle,
} from './styles'
import Input from '@/Components/Input/Input'
import { Button } from '@/Components/Button/Button'
import RegisterModal from './RegisterModal'
import { Modal } from '..'

const newUserLoginSchema = zod.object({
  email: zod.string().email('Infome um email válido'),
  password: zod
    .string()
    .min(8, 'Senha inválida')
    .regex(/^(?=.*[0-9])(?=.*[\W_]).*$/, 'Senha inválida'),
})

type UserLoginData = zod.infer<typeof newUserLoginSchema>

export default function LoginModal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserLoginData>({
    resolver: zodResolver(newUserLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleUserLogin(data: UserLoginData) {
    const emailInput = data.email
    const passwordInput = data.password
    const invalidLogin = document.getElementById('invalidLogin') as HTMLElement

    setIsSubmitted(true)

    login(emailInput, passwordInput)
      .then((user) => {
        console.log(user)
        toast.success('Login efetuado com sucesso')
      })
      .catch(() => {
        invalidLogin.innerText = 'E-mail ou senha inválidos'
        toast.error('Erro ao válida o login! Tente novameten!')
      })

    reset()
  }

  return (
    <Modal>
      <DivTitle>
        <ModalTitle>Entrar</ModalTitle>
        <CloseButton>
          <X size={18} />
        </CloseButton>
      </DivTitle>

      <p>Entre na sua conta para continuar o processo</p>

      <form onSubmit={handleSubmit(handleUserLogin)}>
        <ModalForm>
          <Input
            id="email"
            color="black"
            type="text"
            placeholder="E-mail"
            {...register('email')}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <Input
            id="password"
            color="black"
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
          <DivCheckBox>
            <Input color="black" type="checkbox" />
            <p>Lembra minha conta</p>
          </DivCheckBox>

          <p id="invalidLogin"></p>

          <Button
            type="button"
            background="gold"
            color="white"
            onClick={() => setIsSubmitted(true)}
          >
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
      </form>
    </Modal>
  )
}
