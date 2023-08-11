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
    color: ${(props) => props.theme.darkGold};
    text-align: center;
    padding: 1rem;
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
