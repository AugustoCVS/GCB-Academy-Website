import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import {
  CloseButton,
  ContentText,
  DivButton,
  DivSuggestions,
  DivTitle,
  ModalForm,
  ModalTitle,
} from './styles'
import Input from '@/Components/Input/Input'
import { Button } from '@/Components/Button/Button'
import CreateSuggestionModal from './Suggestions/CreateSuggestionModal'
import SuggestionModal from './Suggestions/SuggestionModal'
import { Modal } from '..'
import UserSuggestions, { Suggestion } from './Suggestions/UserSuggestions'

export default function WebDeveloperModal() {
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<Suggestion | null>(null)

  return (
    <Modal>
      <DivTitle>
        <ModalTitle>Web Developer</ModalTitle>
        <CloseButton>
          <X size={18} />
        </CloseButton>
      </DivTitle>

      <ContentText>
        A jornada de web developer no GCB Academy é uma oportunidade emocionante
        de mergulhar no mundo do desenvolvimento web. Durante o programa, você
        vai adquirir as habilidades essenciais para criar sites e aplicativos
        incríveis, com React e Next.js aplicando tecnologias como Testing
        Library e Storybook.
      </ContentText>

      <ModalForm>
        <Input
          color="black"
          type="text"
          placeholder="Busque por uma sugestão"
          required
        />

        <DivButton>
          <Button type="button" background="gold" color="white">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <p>Criar Sugestão</p>
              </Dialog.Trigger>

              <CreateSuggestionModal journey="WebDeveloper" />
            </Dialog.Root>
          </Button>
        </DivButton>

        <DivSuggestions>
          <p>Sugestões</p>
          <span>A-z</span>
        </DivSuggestions>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <UserSuggestions
              journey="WebDeveloper"
              onSelectSuggestion={setSelectedSuggestion}
            />
          </Dialog.Trigger>
        </Dialog.Root>

        {selectedSuggestion && (
          <SuggestionModal
            title={selectedSuggestion.title}
            author={selectedSuggestion.author}
            description={selectedSuggestion.description}
            onClose={() => setSelectedSuggestion(null)}
          />
        )}
      </ModalForm>
    </Modal>
  )
}
