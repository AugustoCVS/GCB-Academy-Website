import Image from 'next/image'
import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow: hidden;

  h2 {
    color: var(--dark-gold);
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
  gap: 6.75rem;
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
