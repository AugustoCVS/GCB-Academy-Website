'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { User } from 'firebase/auth'

import { HeaderContainer, LogoutButton, Menu } from './styles'
import GcbLogo from '@/assets/GcbLogo.svg'
import MenuNavGcb from './components/MenuNavGCB/MenuNavGCB'
import MenuMobile from './components/MenuMobile/MenuMobile'
import { List } from 'phosphor-react'
import { Button } from '../Button/Button'
import LoginModal from '../Modal/LoginAndRegister/LoginModal'
import { logOut, onAuthChanged } from '../../../utils/firebase/authService'

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  const [user, setUser] = useState<User | null>()

  useEffect(() => {
    function userLogOut() {
      return onAuthChanged((user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(user)
        }
      })
    }

    return userLogOut()
  }, [])

  if (user) {
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
          <LogoutButton onClick={() => logOut()}>Sair</LogoutButton>
        </Menu>
      </HeaderContainer>
    )
  }

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
