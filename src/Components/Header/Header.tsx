'use client'

import Image from 'next/image'
import { useState } from 'react'

import { HeaderContainer, Menu, MenuButton } from './styles'
import GcbLogo from '../../assets/GcbLogo.svg'
import MenuNav from './components/MenuNavGCB/MenuNavGCB'
import MenuMobile from './components/MenuMobile/MenuMobile'
import { List } from 'phosphor-react'

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(true)

  return (
    <HeaderContainer>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <section>
        <List onClick={() => setMenuIsVisible(true)} color="#C28E5B" />
      </section>
      <Image src={GcbLogo} alt="Logo da Empresa GCB" />
      <Menu>
        <MenuNav />
        <MenuButton>Entrar</MenuButton>
      </Menu>
    </HeaderContainer>
  )
}
