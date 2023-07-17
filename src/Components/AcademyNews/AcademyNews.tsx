'use cliemt'

import Image from 'next/image'

import CaixaDeCorreio from '@/assets/CaixaDeCorreio.svg'
import {
  DivAcademyNewsContent,
  DivImage,
  DivInputEmail,
  MainAcademyNews,
  SectionContainer,
} from './styles'
import { Button } from '../Button/Button'

export default function AcademyNews() {
  return (
    <MainAcademyNews>
      <SectionContainer>
        <DivAcademyNewsContent>
          <h2>Inscreva-se no Academy News</h2>
          <p>
            Receba as últimas notícias, atualizações e outras coisas da semana.
          </p>
          <DivInputEmail>
            <input type="text" placeholder="Seu e-mail aqui" />
            <Button type="button" background="gold" color="white">
              Assine
            </Button>
          </DivInputEmail>
        </DivAcademyNewsContent>
        <DivImage>
          <Image src={CaixaDeCorreio} alt="imagem de uma caixa de correio" />
        </DivImage>
      </SectionContainer>
    </MainAcademyNews>
  )
}
