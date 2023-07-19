'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'
import { getDatabase, ref, push, set } from 'firebase/database'

import {
  CancelButton,
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

  async function handleNewSuggestion(data: SuggestionData) {
    const db = getDatabase()
    const suggestionsList = ref(db, `suggestions${journey}`)
    const newSuggestion = push(suggestionsList)

    setIsSubmitted(true)

    try {
      set(newSuggestion, {
        title: data.suggestionTitle,
        description: data.suggestionDescription,
      })

      console.log(data)
      reset()
    } catch (err) {
      console.log(err)
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
