// BackendDeveloperModal.js

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

export default function BackendDeveloperModal() {
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<Suggestion | null>(null)

  return (
    <Modal>
      <DivTitle>
        <ModalTitle>Backend Developer</ModalTitle>
        <CloseButton>
          <X size={18} />
        </CloseButton>
      </DivTitle>

      <ContentText>
        A jornada de Backend Developer no GCB Academy é uma oportunidade
        emocionante de mergulhar no mundo do desenvolvimento backend. Durante o
        programa, você adquirirá as habilidades essenciais para criar sistemas e
        APIs robustas, utilizando tecnologias como Node.js e frameworks como
        Express e Nest.js. Aprenderá a projetar arquiteturas escaláveis, a lidar
        com bancos de dados e a implementar autenticação e segurança em seus
        projetos. Com o apoio de instrutores experientes e colegas motivados,
        você estará preparado para enfrentar os desafios do mercado de trabalho
        e construir uma carreira de sucesso como Backend Developer. Vamos
        embarcar nessa jornada rumo à excelência em desenvolvimento backend!
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

              <CreateSuggestionModal journey="BackendDeveloper" />
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
              journey="BackendDeveloper"
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
