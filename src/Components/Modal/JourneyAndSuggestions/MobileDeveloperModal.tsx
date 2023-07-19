import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  ContentText,
  DivAllSugestions,
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

export default function MobileDeveloperModal() {
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<Suggestion | null>(null)

  return (
    <Modal>
      <DivTitle>
        <ModalTitle>Mobile Developer</ModalTitle>
        <CloseButton>
          <X size={18} />
        </CloseButton>
      </DivTitle>

      <ContentText>
        A jornada de Mobile Developer no GCB Academy é uma oportunidade
        empolgante de mergulhar no universo do desenvolvimento mobile. Durante o
        programa, você adquirirá habilidades essenciais para criar aplicativos
        móveis excepcionais, utilizando tecnologias como React Native. Você terá
        a chance de trabalhar em projetos práticos e desafiadores, explorando
        recursos avançados, como integração de APIs, autenticação de usuários e
        otimização de desempenho. Com o apoio de instrutores experientes e
        colegas motivados, estará preparado para enfrentar os desafios do
        mercado de trabalho e construir uma carreira de sucesso como Mobile
        Developer. Vamos embarcar nessa jornada rumo à excelência em
        desenvolvimento mobile!
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

              <CreateSuggestionModal journey="MobileDeveloper" />
            </Dialog.Root>
          </Button>
        </DivButton>

        <DivSuggestions>
          <p>Sugestões</p>
          <span>A-z</span>
        </DivSuggestions>

        <DivAllSugestions>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <UserSuggestions
                journey="MobileDeveloper"
                onSelectSuggestion={setSelectedSuggestion}
              />
            </Dialog.Trigger>
          </Dialog.Root>
        </DivAllSugestions>

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
