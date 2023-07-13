import { XCircle } from 'phosphor-react'
import { MenuHamburguerProps } from '@/interfaces/MenuHamburguerProps'
import { MenuHamburguerContainer } from './styles'
import { useEffect } from 'react'

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
        <li>Entrar</li>
      </nav>
    </MenuHamburguerContainer>
  )
}
