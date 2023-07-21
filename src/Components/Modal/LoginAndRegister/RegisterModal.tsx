import { Envelope, Lock, User, WarningCircle, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { toast } from 'react-toastify'

import {
  CloseButton,
  DivCheckBox,
  DivInputContainer,
  DivTitle,
  DivWarningMessage,
  ErrorMessage,
  ModalForm,
  ModalTitle,
} from './styles'
import Input from '@/Components/Input/Input'
import { Button } from '@/Components/Button/Button'
import { Modal } from '..'
import { userRegister } from '../../../../utils/firebase/authService'

const newUserRegisterSchema = zod.object({
  name: zod.string().min(3, 'Insira um nome válido'),
  email: zod.string().email('Infome um email válido'),
  password: zod
    .string()
    .min(8, 'Senha inválida')
    .regex(/^(?=.*[0-9])(?=.*[\W_]).*$/, 'Senha inválida'),
  confirmPassword: zod
    .string()
    .min(8, 'Senha inválida')
    .regex(/^(?=.*[0-9])(?=.*[\W_]).*$/, 'Senha inválida'),
})

type UserRegisterData = zod.infer<typeof newUserRegisterSchema>

export default function RegisterModal() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitSuccessful, errors },
    setError,
  } = useForm<UserRegisterData>({
    resolver: zodResolver(newUserRegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  function verifyIfPasswordAreEqual(data: UserRegisterData) {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'As senhas não coincidem',
      })
      return false
    }
    return true
  }

  async function handleUserRegister(data: UserRegisterData) {
    const isPasswordsEqual = verifyIfPasswordAreEqual(data)

    if (isPasswordsEqual) {
      try {
        const user = await userRegister({
          name: data.name,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        })
        console.log('User registered:', user)
        toast.success('Cadastro efetuado com sucesso')
        reset()
      } catch (error: any) {
        console.error('Error during registration:', error.message)
        toast.error('Erro ao realizar o cadastro! Tente novameten!')
      }
    }
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

      <form onSubmit={handleSubmit(handleUserRegister)}>
        <ModalForm>
          <DivInputContainer>
            <User size={25} color={'#263238'} />
            <Input
              id="name"
              color="black"
              type="text"
              placeholder="Nome Completo"
              {...register('name')}
            />
          </DivInputContainer>

          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          <DivInputContainer>
            <Envelope size={25} color={'#263238'} />
            <Input
              id="email"
              color="black"
              type="text"
              placeholder="E-mail"
              {...register('email')}
            />
          </DivInputContainer>

          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <DivInputContainer>
            <Lock size={25} color={'#263238'} />
            <Input
              id="password"
              color="black"
              type="password"
              placeholder="Senha"
              {...register('password')}
            />
          </DivInputContainer>

          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
          <DivWarningMessage>
            <WarningCircle size={20} />
            <p>
              Mínimo de 8 caracteres, no mínimo um número e um caractere
              especial
            </p>
          </DivWarningMessage>
          <DivInputContainer>
            <Lock size={25} color={'#263238'} />
            <Input
              id="confirmPassword"
              color="black"
              type="password"
              placeholder="Confirmação de Senha"
              {...register('confirmPassword')}
            />
          </DivInputContainer>

          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          )}

          <DivCheckBox>
            <Input color="black" type="checkbox" />
            <p>
              Eu li, concordo e aceito o <span>Termos e Condições</span>
            </p>
          </DivCheckBox>

          <Button type="submit" background="gold" color="white">
            Criar
          </Button>
        </ModalForm>
      </form>
    </Modal>
  )
}
