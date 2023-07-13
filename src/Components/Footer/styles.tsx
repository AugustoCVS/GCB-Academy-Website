import Image from 'next/image'
import { styled } from 'styled-components'

export const WaveTopImg = styled(Image)`
  width: 90rem;
  height: 16.5rem;
`

export const SectionContainer = styled.section`
  height: 24.1875rem;
  max-width: 1440px;
  background-color: var(--gold);
  padding: 0 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding-bottom: 1.32rem;

  color: var(--white);
`

export const DivContent = styled.div`
  height: 20.5rem;
  border-bottom: 1px solid var(--white);
  padding-bottom: 4.5rem;

  display: flex;
  gap: 8.53rem;
`

export const DivLogos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    gap: 2rem;
    color: var(--white);
    a {
      text-decoration: none;
      color: var(--white);
    }
  }
`

export const DivInfos = styled.div`
  h2 {
    color: var(--white);
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 700;
  }

  display: flex;
  flex-direction: column;
  gap: 2.44rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.81rem;

    color: var(--white);
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 400;

    a {
      text-decoration: none;
      color: var(--white);
      font-family: inherit;
      font-size: 1.125rem;
      font-weight: 400;
      width: 180px;
    }
  }
`
