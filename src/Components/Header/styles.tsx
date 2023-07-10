import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1.25rem 6.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 4.06rem;

  button {
    width: 7.625rem;
    height: 2.6875rem;
    border-radius: 3rem;
    background: var(--gold);
    border: none;

    color: var(--white);
    text-align: center;
    font-family: inherit;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
