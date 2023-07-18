'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { WarningCircle, X } from 'phosphor-react'

import {
  CloseButton,
  Content,
  ContentText,
  DivButton,
  DivSuggestions,
  DivTitle,
  ModalForm,
  ModalTitle,
  Overlay,
  Suggestions,
} from './styles'
import { Input } from '../../Input/Input'
import { Button } from '../../Button/Button'
import CreateSuggestionModal from './Suggestions/CreateSuggestionModal'
import SuggestionModal from './Suggestions/SuggestionModal'

export default function WebDeveloperModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <DivTitle>
          <ModalTitle>Web Developer</ModalTitle>
          <CloseButton>
            <X size={18} />
          </CloseButton>
        </DivTitle>

        <ContentText>
          A jornada de web developer no GCB Academy é uma oportunidade
          emocionante de mergulhar no mundo do desenvolvimento web. Durante o
          programa, você vai adquirir as habilidades essenciais para criar sites
          e aplicativos incríveis, com React e Next.js aplicando tecnologias
          como Testing Library e Storybook.
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

                <CreateSuggestionModal />
              </Dialog.Root>
            </Button>
          </DivButton>

          <DivSuggestions>
            <p>Sugestões</p>
            <span>A-z</span>
          </DivSuggestions>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Suggestions>
                <div>
                  <WarningCircle size={20} />
                  <p>Novos Desafios</p>
                </div>

                <p>Jofran Lima</p>
              </Suggestions>
            </Dialog.Trigger>

            <SuggestionModal />
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Suggestions>
                <div>
                  <WarningCircle size={20} />
                  <p>Tecnologias</p>
                </div>

                <p>Jofran Lima</p>
              </Suggestions>
            </Dialog.Trigger>

            <SuggestionModal />
          </Dialog.Root>
        </ModalForm>
      </Content>
    </Dialog.Portal>
  )
}
