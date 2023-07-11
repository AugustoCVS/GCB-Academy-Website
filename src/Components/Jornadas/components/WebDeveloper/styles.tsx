import { styled } from 'styled-components'

export const DivContainer = styled.div`
  width: 17.3125rem;
  height: 25.3125rem;
  background: lightgreen;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;

  gap: 1.81rem;

  div {
    position: absolute;
    bottom: -50%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: var(--white);
    padding: 0.88rem;

    h3 {
      color: var(--dark-gold);
    }
  }
`

export const DivImagem = styled.div`
  width: 13.3125rem;
  height: 13.3125rem;
`
