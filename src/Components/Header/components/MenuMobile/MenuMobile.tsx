import { XCircle } from 'phosphor-react'
import { MenuHamburguerProps } from '@/interfaces/MenuHamburguerProps'
import { MenuHamburguerContainer } from './styles'

export default function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
}: MenuHamburguerProps) {
  return (
    <MenuHamburguerContainer isvisible={menuIsVisible}>
      <XCircle size={35} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <li>Introdução</li>
        <li>Jornadas</li>
        <li>Sobre nós</li>
      </nav>
    </MenuHamburguerContainer>
  )
}
