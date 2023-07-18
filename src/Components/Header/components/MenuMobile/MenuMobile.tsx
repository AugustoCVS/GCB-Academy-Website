import { XCircle } from 'phosphor-react'
import { useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { MenuHamburguerProps } from '@/interfaces/MenuHamburguerProps'
import { MenuHamburguerContainer } from './styles'
import LoginModal from '@/Components/Modal/LoginAndRegister/LoginModal'

export default function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuHamburguerProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])
  return (
    <MenuHamburguerContainer isvisible={menuIsVisible}>
      <XCircle size={35} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <li>Introdução</li>
        <li>Jornadas</li>
        <li>Sobre nós</li>
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
