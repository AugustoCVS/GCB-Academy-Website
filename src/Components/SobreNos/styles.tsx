import Image from 'next/image'
import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  top: -10px;

  h2 {
    color: var(--dark-gold);
    text-align: center;
    font-family: inherit;
    font-size: 2.25rem;
    font-weight: 700;
  }
`
export const WaveTopImg = styled(Image)`
  position: relative;
`
export const SobreNosComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 4.75rem;
  margin-top: 3.12rem;
`

export const DivContent = styled.div`
  width: 100%;

  img {
    width: 100%;
    margin-top: 2rem;

    @media (max-width: 450px) {
      margin-top: -5rem;
    }
  }

  @media (min-width: 1150px) {
    display: flex;
    align-items: center;
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

    font-family: inherit;
    font-size: 1.5rem;
    font-weight: 400;
  }
`
