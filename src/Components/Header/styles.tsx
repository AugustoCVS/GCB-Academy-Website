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

  button {
    font-size: 1.125rem;
  }
`
export const LogoutButton = styled.button`
  background: ${(props) => props.theme.gold};
  width: 8rem;
  height: 42px;
  padding: 0.5rem 2rem;
  border: 0;
  border-radius: 42px;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  cursor: pointer;
`
