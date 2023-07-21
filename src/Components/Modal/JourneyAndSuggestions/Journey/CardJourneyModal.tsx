import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { MagnifyingGlass, X } from 'phosphor-react'

import {
  CloseButton,
  ContentText,
  DivAllSugestions,
  DivButton,
  DivSuggestions,
  DivTitle,
  ModalForm,
  ModalTitle,
  DivInputContainer,
} from '../styles'
import Input from '@/Components/Input/Input'
import { Button } from '@/Components/Button/Button'
import CreateSuggestionModal from '../Suggestions/CreateSuggestionModal'
import SuggestionModal from '../Suggestions/SuggestionModal'
import { Modal } from '../..'
import UserSuggestions, { Suggestion } from '../Suggestions/UserSuggestions'

export interface ICardJourneyModal {
  id: number
  title: string
  contentText: string
  typeJourney: string
}

type Props = {
  journeyType: string
}

const cards: ICardJourneyModal[] = [
  {
    id: 1,
    title: 'Web Developer',
    contentText:
      'A jornada de web developer no GCB Academy é uma oportunidade emocionante de mergulhar no mundo do desenvolvimento web. Durante o programa, você vai adquirir as habilidades essenciais para criar sites e aplicativos incríveis, com React e Next.js aplicando tecnologias como Testing Library e Storybook.',
    typeJourney: 'WebDeveloper',
  },
  {
    id: 2,
    title: 'Mobile Developer',
    contentText:
      ' A jornada de Mobile Developer no GCB Academy é uma oportunidade empolgante de mergulhar no universo do desenvolvimento mobile. Durante o programa, você adquirirá habilidades essenciais para criar aplicativos móveis excepcionais, utilizando tecnologias como React Native. Você terá a chance de trabalhar em projetos práticos e desafiadores, explorando recursos avançados, como integração de APIs, autenticação de usuários e otimização de desempenho. Com o apoio de instrutores experientes e colegas motivados, estará preparado para enfrentar os desafios do mercado de trabalho e construir uma carreira de sucesso como Mobile Developer. Vamos embarcar nessa jornada rumo à excelência em desenvolvimento mobile!',
    typeJourney: 'MobileDeveloper',
  },
  {
    id: 3,
    title: 'Backend Developer',
    contentText:
      'A jornada de Backend Developer no GCB Academy é uma oportunidade emocionante de mergulhar no mundo do desenvolvimento backend. Durante o programa, você adquirirá as habilidades essenciais para criar sistemas e APIs robustas, utilizando tecnologias como Node.js e frameworks como Express e Nest.js. Aprenderá a projetar arquiteturas escaláveis, a lidar com bancos de dados e a implementar autenticação e segurança em seus projetos. Com o apoio de instrutores experientes e colegas motivados, você estará preparado para enfrentar os desafios do mercado de trabalho e construir uma carreira de sucesso como Backend Developer. Vamos embarcar nessa jornada rumo à excelência em desenvolvimento backend!',
    typeJourney: 'BackendDeveloper',
  },
  {
    id: 4,
    title: 'Quality Assurance',
    contentText:
      '        A jornada de Quality Assurance no GCB Academy é uma oportunidade emocionante de mergulhar no mundo da garantia de qualidade de software. Durante o programa, você adquirirá as habilidades essenciais para realizar testes e garantir a qualidade de aplicativos e sistemas. Aprenderá a criar planos de teste, executar testes manuais e automatizados, identificar e relatar bugs e colaborar com os desenvolvedores para melhorar a qualidade do software. Com o apoio de instrutores experientes e colegas motivados, você estará preparado para enfrentar os desafios do mercado de trabalho e construir uma carreira de sucesso como Quality Assurance. Vamos embarcar nessa jornada rumo à excelência em garantia de qualidade de software!',
    typeJourney: 'QualityAssurance',
  },
]

export default function CardJourneyModal({ journeyType }: Props) {
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<Suggestion | null>(null)

  const card = cards.find((card) => card.typeJourney === journeyType)

  if (!card) {
    return null
  }

  return (
    <Modal>
      <DivTitle>
        <ModalTitle>{card.title}</ModalTitle>
        <CloseButton>
          <X size={18} />
        </CloseButton>
      </DivTitle>

      <ContentText>{card.contentText}</ContentText>

      <ModalForm>
        <DivInputContainer>
          <Input
            color="black"
            type="text"
            placeholder="Busque por uma sugestão"
            required
          />
          <MagnifyingGlass size={25} color={'#263238'} />
        </DivInputContainer>

        <DivButton>
          <Button type="button" background="gold" color="white">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <p>Criar Sugestão</p>
              </Dialog.Trigger>

              <CreateSuggestionModal journey={card.typeJourney} />
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
                journey={card.typeJourney}
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
