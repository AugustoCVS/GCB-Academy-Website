'use client'

import { XCircle } from 'phosphor-react'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { User } from 'firebase/auth'

import { MenuHamburguerProps } from '@/interfaces/MenuHamburguerProps'
import { LinkPage, MenuHamburguerContainer } from './styles'
import LoginModal from '@/Components/Modal/LoginAndRegister/LoginModal'
import {
  logOut,
  onAuthChanged,
} from '../../../../../utils/firebase/authService'

export default function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuHamburguerProps) {
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

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  if (user) {
    return (
      <MenuHamburguerContainer isvisible={menuIsVisible}>
        <XCircle size={35} onClick={() => setMenuIsVisible(false)} />
        <nav>
          <li>
            <LinkPage href="/#hero">Introdução</LinkPage>
          </li>
          <li>
            <LinkPage href="/#journey">Jornada</LinkPage>
          </li>
          <li>
            <LinkPage href="/#aboutUs">Sobre nós</LinkPage>
          </li>
          <button onClick={() => logOut()}>Sair</button>
        </nav>
      </MenuHamburguerContainer>
    )
  }

  return (
    <MenuHamburguerContainer isvisible={menuIsVisible}>
      <XCircle size={35} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <li>
          <LinkPage href="/#hero">Introdução</LinkPage>
        </li>
        <li>
          <LinkPage href="/#journey">Jornada</LinkPage>
        </li>
        <li>
          <LinkPage href="/#aboutUs">Sobre nós</LinkPage>
        </li>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <li onClick={() => setMenuIsVisible(false)}>Entrar</li>
          </Dialog.Trigger>

          <LoginModal />
        </Dialog.Root>
      </nav>
    </MenuHamburguerContainer>
  )
}
