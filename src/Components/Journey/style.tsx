import { styled } from 'styled-components'
import Image from 'next/image'

export const WaveBottomImg = styled(Image)`
  position: absolute;
  top: -130px;
`

export const SectionJourneyContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.gold};
  position: relative;
  height: 48.4375rem;

  @media (max-width: 1024px) {
    height: 50rem;
  }

  h2 {
    text-align: center;
    padding: 2.94rem;
  }
`

export const DivJourneyContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6.25rem;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`

export const DivComponent = styled.div`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
