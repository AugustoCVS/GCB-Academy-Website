import { styled } from 'styled-components'

export const SectionIntroContainer = styled.section`
  height: 500px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 5rem 2rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`

export const DivIntroContent = styled.div`
  h2 {
    color: var(--gold);
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    p {
      font-size: 0.825rem;
    }
  }
`

export const IntroButton = styled.button`
  @media (max-width: 768px) {
    border-radius: 3rem;
    background: var(--gold);
    padding: 0.2rem 0.7rem;
    border: none;

    width: 11rem;

    color: var(--white);
    text-align: center;
    font-family: inherit;
    font-size: 0.825rem;
    font-weight: 700;
  }
`
