import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  height: 35rem;
  width: 100%;
  max-width: 1440px;
  margin-top: 5.6rem;

  h2 {
    color: var(--dark-gold);
    text-align: center;
    padding: 1rem;
    color: #763b05;
    text-align: center;
    font-family: inherit;
    font-size: 2.25rem;
    font-weight: 700;
  }

  @media (max-width: 440px) {
    height: 45rem;
  }
`

export const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const DivUserComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22rem;
`

export const UserComment = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  gap: 1rem;

  border-radius: 1.25rem;
  box-shadow: 0px 2px 28px rgba(41, 50, 65, 0.08),
    0px 7px 53px rgba(41, 50, 65, 0.12);

  padding-bottom: 6rem;
  height: 16.9375rem;
  width: 400px;

  h3 {
    color: var(--dark-gold);
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 18rem;
  }
`

export const DivImage = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  overflow: hidden;
`
