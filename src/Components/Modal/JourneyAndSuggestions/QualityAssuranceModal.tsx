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

export default function QualityAssuranceModal() {
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<Suggestion | null>(null)

  return (
    <Modal>
      <DivTitle>
        <ModalTitle>Quality Assurance</ModalTitle>
        <CloseButton>
          <X size={18} />
        </CloseButton>
      </DivTitle>

      <ContentText>
        A jornada de Quality Assurance no GCB Academy é uma oportunidade
        emocionante de mergulhar no mundo da garantia de qualidade de software.
        Durante o programa, você adquirirá as habilidades essenciais para
        realizar testes e garantir a qualidade de aplicativos e sistemas.
        Aprenderá a criar planos de teste, executar testes manuais e
        automatizados, identificar e relatar bugs e colaborar com os
        desenvolvedores para melhorar a qualidade do software. Com o apoio de
        instrutores experientes e colegas motivados, você estará preparado para
        enfrentar os desafios do mercado de trabalho e construir uma carreira de
        sucesso como Quality Assurance. Vamos embarcar nessa jornada rumo à
        excelência em garantia de qualidade de software!
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

              <CreateSuggestionModal journey="QualityAssurance" />
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
              journey="QualityAssurance"
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
