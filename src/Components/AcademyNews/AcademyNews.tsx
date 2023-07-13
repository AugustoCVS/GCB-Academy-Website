'use cliemt'

import Image from 'next/image'
import CaixaDeCorreio from '../../assets/CaixaDeCorreio.svg'
import { DivContent, DivImage, DivInputEmail, SectionContainer } from './styles'

export default function AcademyNews() {
  return (
    <SectionContainer>
      <DivContent>
        <h2>Inscreva-se no Academy News</h2>
        <p>
          Receba as últimas notícias, atualizações e outras coisas da semana.
        </p>
        <DivInputEmail>
          <input type="text" placeholder="Seu e-mail aqui" />
          <button>Assine</button>
        </DivInputEmail>
      </DivContent>
      <DivImage>
        <Image src={CaixaDeCorreio} alt="imagem de uma caixa de correio" />
      </DivImage>
    </SectionContainer>
  )
}
