import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gold);

  @media (max-width: 1024px) {
    height: 40rem;
  }

  h2 {
    padding: 2.94rem;
    color: var(--white);
  }
`

export const DivJornadaContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 6rem;
  }
`
