'use client'

import Image from 'next/image'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, Menu } from './styles'
import GcbLogo from '@/assets/GcbLogo.svg'
import MenuNavGcb from './components/MenuNavGCB/MenuNavGCB'
import MenuMobile from './components/MenuMobile/MenuMobile'
import { List } from 'phosphor-react'
import { Button } from '../Button/Button'
import LoginModal from '../Modal/LoginAndRegister/LoginModal'

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
        <Dialog.Root>
          <Button type="button" background="gold" color="white">
            <Dialog.Trigger asChild>
              <p>Entrar</p>
            </Dialog.Trigger>
          </Button>
          <LoginModal />
        </Dialog.Root>
      </Menu>
    </HeaderContainer>
  )
}
