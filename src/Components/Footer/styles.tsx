import Image from 'next/image'
import { styled } from 'styled-components'

export const WaveTopImg = styled(Image)`
  width: 90rem;
  height: 16.5rem;
`

export const SectionFooterContainer = styled.section`
  height: 30.1875rem;
  max-width: 1440px;
  background-color: ${(props) => props.theme.gold};
  padding: 0 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding-bottom: 1.32rem;

  margin-top: -10px;

  @media (max-width: 700px) {
    height: 60rem;
  }

  @media (min-width: 701px) and (max-width: 1100px) {
    height: 40rem;
    padding: 0 2rem;
  }
`

export const DevelopedBy = styled.p`
  width: 20rem;
  text-align: center;
  color: ${(props) => props.theme.white};
`

export const DivFooterContent = styled.div`
  height: 20.5rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.white};
  padding-bottom: 4.5rem;
  display: flex;
  gap: 8.53rem;

  @media (max-width: 700px) {
    height: 55rem;
    flex-direction: column;
    padding-left: 0.2rem;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 701px) and (max-width: 1100px) {
    height: 55rem;
    flex-direction: column;
    padding-left: 0.2rem;
    gap: 4rem;
    align-items: center;
    text-align: center;
  }
`

export const DivLogos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    gap: 2rem;
    color: ${(props) => props.theme.white};
    a {
      text-decoration: none;
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    gap: 4rem;

    div {
      padding-left: 0.5rem;
    }
  }

  @media (min-width: 700px) and (max-width: 1100px) {
    align-items: center;
    flex-direction: column;
    gap: 4rem;

    div {
      padding-left: 0.5rem;
    }
  }
`

export const GcbInfos = styled.div`
  display: flex;
  width: 100%;
  gap: 8.5rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 400;
    width: 180px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 2.44rem;
  }

  @media (min-width: 701px) and (max-width: 1100px) {
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
  }

  @media (min-width: 1101px) and (max-width: 1197px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }

  @media (min-width: 1198px) and (max-width: 1309px) {
    flex-direction: row;
    justify-content: center;
    gap: 4.8rem;
  }
`

export const DivInfos = styled.div`
  h2 {
    color: ${(props) => props.theme.white};
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

    color: ${(props) => props.theme.white};
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 400;
  }

  @media (max-width: 800px) {
    gap: 1rem;
  }
`
