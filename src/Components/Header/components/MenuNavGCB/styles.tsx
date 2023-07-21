import Link from 'next/link'
import { styled } from 'styled-components'

export const ListContainer = styled.ul`
  display: flex;
  gap: 1.81rem;
  list-style-type: none;
  width: 19rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavContainer = styled.nav`
  display: flex;
`

export const LinkPage = styled(Link)`
  color: ${(props) => props.theme.black};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.gold};
    border-bottom: 2px solid ${(props) => props.theme.gold};
  }
`
