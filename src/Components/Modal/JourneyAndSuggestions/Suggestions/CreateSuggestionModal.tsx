'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useEffect, useState } from 'react'
import { getDatabase, ref, push, set } from 'firebase/database'
import { User } from 'firebase/auth'
import { onAuthChanged } from '../../../../../utils/firebase/authService'
import { toast } from 'react-toastify'

import {
  CancelButtonCreate,
  CloseButton,
  Content,
  DivButton,
  DivTitle,
  ErrorMessage,
  ModalForm,
  ModalTitle,
  Overlay,
} from './styles'
import Input from '@/Components/Input/Input'
import { Button } from '@/Components/Button/Button'

const newSuggestion = zod.object({
  suggestionTitle: zod.string().min(3, 'Insira um titulo válido'),
  suggestionDescription: zod.string().min(4, 'Insira uma sugestão válida'),
})

type SuggestionData = zod.infer<typeof newSuggestion>

type Props = {
  journey: string
}

export default function CreateSuggestionModal({ journey }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SuggestionData>({
    resolver: zodResolver(newSuggestion),
    defaultValues: {
      suggestionTitle: '',
      suggestionDescription: '',
    },
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    return onAuthChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(user)
      }
    })
  }, [])

  async function handleNewSuggestion(data: SuggestionData) {
    const db = getDatabase()
    const suggestionsList = ref(db, `suggestions${journey}`)
    const newSuggestion = push(suggestionsList)

    const author = user?.displayName

    setIsSubmitted(true)

    try {
      set(newSuggestion, {
        title: data.suggestionTitle,
        author,
        description: data.suggestionDescription,
      })

      console.log(data)
      toast.success('Sugestão efetuada com sucesso!')
      reset()
    } catch (err) {
      console.log(err)
      toast.error('Erro ao fazer sugestão! Tente novamete!')
    }
  }

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

        <ModalForm onSubmit={handleSubmit(handleNewSuggestion)}>
          <Input
            id="suggestionTitle"
            color="black"
            type="text"
            placeholder="Título"
            {...register('suggestionTitle')}
          />
          {errors.suggestionTitle && (
            <ErrorMessage>{errors.suggestionTitle.message}</ErrorMessage>
          )}
          <textarea
            id="suggestionDescription"
            placeholder="Descrição"
            {...register('suggestionDescription')}
          />

          {errors.suggestionDescription && (
            <ErrorMessage>{errors.suggestionDescription.message}</ErrorMessage>
          )}

          <DivButton>
            <CancelButtonCreate>Cancelar</CancelButtonCreate>
            <Button type="button" background="gold" color="white">
              Criar
            </Button>
          </DivButton>
        </ModalForm>
      </Content>
    </Dialog.Portal>
  )
}
