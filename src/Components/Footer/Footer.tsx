'use client'

import Image from 'next/image'
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

import WaveTop from '../../assets/TopWave2.svg'
import GcbLogoBranca from '../../assets/GcbLogoBranca.svg'
import {
  DevelopedBy,
  DivFooterContent,
  DivInfos,
  DivLogos,
  GcbInfos,
  SectionFooterContainer,
  WaveTopImg,
} from './styles'

export default function Footer() {
  return (
    <>
      <WaveTopImg src={WaveTop} alt="imagem de uma onda" />
      <SectionFooterContainer>
        <DivFooterContent>
          <DivLogos>
            <Image src={GcbLogoBranca} alt="logo branca da GCB" />

            <div>
              <a href="https://www.facebook.com/gcbinvestimentos/?locale=pt_BR">
                <FacebookLogo size={35} alt="logo do Facebook" />
              </a>

              <a href="https://www.instagram.com/gcbinvestimentos/">
                <InstagramLogo size={35} alt="logo do Instagram" />
              </a>
              <a href="https://twitter.com/grupogcb">
                <TwitterLogo size={35} alt="logo do Twitter" />
              </a>
            </div>
          </DivLogos>
          <GcbInfos>
            <DivInfos>
              <h2>Navegação</h2>
              <div>
                <p>Introdução</p>
                <p>Jornada</p>
                <p>Sobre nós</p>
                <p>Reviews</p>
                <p>Newsletter</p>
              </div>
            </DivInfos>
            <DivInfos>
              <h2>Empresas</h2>
              <div>
                <a href="https://gcbinvestimentos.com/">GCB Investimentos</a>
                <a href="https://adiantesa.com/">Adiante Recebíveis</a>
                <a href="https://peerbr.com/">PeerBR</a>
                <a href="https://fmisa.com.br/">FMI</a>
                <a href="https://bmspartners.com.br/">BMS Partners</a>
              </div>
            </DivInfos>
            <DivInfos>
              <h2>Contato</h2>

              <div>
                <p>(11) 2500-4699</p>
                <p>academy@gcb.investimentos.com</p>
              </div>
            </DivInfos>
          </GcbInfos>
        </DivFooterContent>
        <DevelopedBy>Desenvolvido por Augusto Santana. Obrigado!</DevelopedBy>
      </SectionFooterContainer>
    </>
  )
}
