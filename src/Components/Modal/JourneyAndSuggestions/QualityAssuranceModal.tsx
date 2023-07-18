'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { WarningCircle, X } from 'phosphor-react'

import {
  CloseButton,
  ContentText,
  DivButton,
  DivSuggestions,
  DivTitle,
  ModalForm,
  ModalTitle,
  Suggestions,
} from './styles'
import Input from '@/Components/Input/Input'
import { Button } from '@/Components/Button/Button'
import CreateSuggestionModal from './Suggestions/CreateSuggestionModal'
import SuggestionModal from './Suggestions/SuggestionModal'
import { Modal } from '..'

export default function QualityAssuranceModal() {
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
    </Modal>
  )
}
