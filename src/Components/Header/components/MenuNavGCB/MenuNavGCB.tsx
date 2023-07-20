'use client'

import { LinkPage, ListContainer, NavContainer } from './styles'

export default function MenuNav() {
  return (
    <NavContainer>
      <ListContainer>
        <li>
          <LinkPage href="/#hero">Introdução</LinkPage>
        </li>
        <li>
          <LinkPage href="/#journey">Jornada</LinkPage>
        </li>
        <li>
          <LinkPage href="/#aboutUs">Sobre nós</LinkPage>
        </li>
      </ListContainer>
    </NavContainer>
  )
}
