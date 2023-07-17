'use client'

import Image from 'next/image'
import { useState } from 'react'

import { HeaderContainer, Menu } from './styles'
import GcbLogo from '@/assets/GcbLogo.svg'
import MenuNavGcb from './components/MenuNavGCB/MenuNavGCB'
import MenuMobile from './components/MenuMobile/MenuMobile'
import { List } from 'phosphor-react'
import { Button } from '../Button/Button'

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <HeaderContainer>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <section>
        <List
          onClick={() => setMenuIsVisible(true)}
          color="#C28E5B"
          size={50}
        />
      </section>
      <Image src={GcbLogo} alt="Logo da Empresa GCB" />
      <Menu>
        <MenuNavGcb />
        <Button type="button" background="gold" color="white">
          Entrar
        </Button>
      </Menu>
    </HeaderContainer>
  )
}
