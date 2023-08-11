'use client'

import Image from 'next/image'

import {
  AboutUsComponents,
  DivContent,
  DivContentText,
  SectionContainer,
  WaveTopImg,
} from './styles'
import SobreNosImg from '../../assets/SobreNosImg.svg'
import WaveTop from '../../assets/TopWave.svg'
import { Title } from '../Title/Title'

export function AboutUs() {
  return (
    <SectionContainer>
      <WaveTopImg src={WaveTop} alt="imagem de uma onda" />
      <AboutUsComponents id="aboutUs">
        <Title type="h2" color="darkGold">
          Sobre nós
        </Title>
        <DivContent>
          <DivContentText>
            <p>
              O{' '}
              <span>
                <strong>GCB Academy</strong>
              </span>{' '}
              nasceu da <strong>necessidade</strong> de{' '}
              <strong>pessoas qualificadas</strong> na área de tecnologia do
              Grupo GCB a partir do alinhamento cultural e técnico com a
              empresa.
            </p>
            <p>
              Com o Academy abrimos as portas para o futuro, preparando os
              profissionais através de muita <strong>prática</strong> e{' '}
              <strong>cenários reais</strong>, a qual impusionamos o crescimento
              e evolução.{' '}
            </p>
            <p>
              Prepare-se para explorar novas fronteiras, desafiar limites e
              alcançar o próximo nível do seu potencial.
            </p>
          </DivContentText>
          <Image
            src={SobreNosImg}
            alt="imagem de uma pessoa mexendo em uma tela gigante"
          />
        </DivContent>
      </AboutUsComponents>
    </SectionContainer>
  )
}
