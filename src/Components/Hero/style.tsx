import { styled } from 'styled-components'
import Image from 'next/image'

export const SectionHeroContainer = styled.section`
  position: relative;
  width: 95%;
  height: 56.625rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 5rem 1rem;
    display: flex;
    text-align: center;
    justify-content: center;
  }
`

export const BackgroundImg = styled(Image)`
  background-size: cover;
`

export const DivHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  position: absolute;
  padding: 6.25rem;

  h2 {
    color: ${(props) => props.theme.gold};
    font-family: inherit;
    font-size: 3.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.75rem;
  }

  p {
    font-family: inherit;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 0%;

    h2 {
      font-size: 2.125rem;
    }
  }

  @media (min-width: 769px) {
    h2 {
      width: 36.5rem;
    }

    p {
      width: 22.5rem;
    }
  }
`
