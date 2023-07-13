import { XCircle } from 'phosphor-react'
import { MenuHamburguerProps } from '@/interfaces/MenuHamburguerProps'
import { MenuHamburguerContainer, MenuMobileHeader } from './styles'
import { useEffect } from 'react'

import LogoGcb from '../../../../assets/GcbLogo.svg'
import Image from 'next/image'

export default function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuHamburguerProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])
  return (
    <MenuHamburguerContainer isvisible={menuIsVisible}>
      <MenuMobileHeader>
        <Image src={LogoGcb} alt="logo da gcb" />
        <XCircle size={35} onClick={() => setMenuIsVisible(false)} />
      </MenuMobileHeader>
      <nav>
        <li>Introdução</li>
        <li>Jornadas</li>
        <li>Sobre nós</li>
        <li>Entrar</li>
      </nav>
    </MenuHamburguerContainer>
  )
}
