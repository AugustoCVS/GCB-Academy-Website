import { styled } from 'styled-components'

export const ListContainer = styled.ul`
  display: flex;
  gap: 1.81rem;
  list-style-type: none;

  @media (max-width: 768px) {
    display: none;
  }
`
export const NavContainer = styled.nav`
  display: flex;
`
