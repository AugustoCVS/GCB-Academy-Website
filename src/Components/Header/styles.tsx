import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1.25rem 6.25rem;
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  > section {
    display: none;
  }

  @media (max-width: 768px) {
    > section {
      display: flex;
    }

    padding: 1rem;

    img {
      padding: 0.5rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1000px) {
    gap: 2.06rem;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 4.06rem;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1000px) {
    gap: 1.06rem;
  }
`

export const MenuButton = styled.button`
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
`
