import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.75rem;
  padding: 1rem;

  margin-top: 5rem;

  h2 {
    color: var(--dark-gold);
  }
`

export const DivContent = styled.div`
  width: 100%;

  img {
    width: 100%;
    margin-top: -8rem;
  }
`
export const DivContentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.44rem;

  p {
    span {
      color: var(--gold);
    }
  }
`
