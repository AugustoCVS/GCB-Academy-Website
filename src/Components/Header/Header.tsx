'use client'

import { HeaderContainer, Menu } from './styles'
import GcbLogo from '../../assets/GcbLogo.svg'
import Image from 'next/image'
import MenuNav from './components/MenuNavGCB/MenuNavGCB'

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={GcbLogo} alt="Logo da Empresa GCB" />

      <Menu>
        <MenuNav />
        <button>Entrar</button>
      </Menu>
    </HeaderContainer>
  )
}
