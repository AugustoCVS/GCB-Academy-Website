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
import RegisterModal from '../LoginAndRegister/RegisterModal'

export default function BackendDeveloperModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <DivTitle>
          <ModalTitle>Backend Developer</ModalTitle>
          <CloseButton>
            <X size={18} />
          </CloseButton>
        </DivTitle>

        <ContentText>
          A jornada de Backend Developer no GCB Academy é uma oportunidade
          emocionante de mergulhar no mundo do desenvolvimento backend. Durante
          o programa, você adquirirá as habilidades essenciais para criar
          sistemas e APIs robustas, utilizando tecnologias como Node.js e
          frameworks como Express e Nest.js. Aprenderá a projetar arquiteturas
          escaláveis, a lidar com bancos de dados e a implementar autenticação e
          segurança em seus projetos. Com o apoio de instrutores experientes e
          colegas motivados, você estará preparado para enfrentar os desafios do
          mercado de trabalho e construir uma carreira de sucesso como Backend
          Developer. Vamos embarcar nessa jornada rumo à excelência em
          desenvolvimento backend!
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

                <RegisterModal />
              </Dialog.Root>
            </Button>
          </DivButton>

          <DivSuggestions>
            <p>Sugestões</p>
            <span>A-z</span>
          </DivSuggestions>

          <Suggestions>
            <div>
              <WarningCircle size={20} />
              <p>Novos Desafios</p>
            </div>

            <p>Kayke Fujinaka</p>
          </Suggestions>

          <Suggestions>
            <div>
              <WarningCircle size={20} />
              <p>Tecnologias</p>
            </div>

            <p>Rafael Ramos Costa</p>
          </Suggestions>
        </ModalForm>
      </Content>
    </Dialog.Portal>
  )
}
