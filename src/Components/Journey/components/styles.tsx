import Image from 'next/image'
import { styled } from 'styled-components'

interface DivContainerProps {
  bgcolor: string
}

export const DivContainer = styled.div<DivContainerProps>`
  width: 17.3125rem;
  height: 25.3125rem;
  background: ${(props) => props.bgcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  img {
    position: absolute;
  }
`

export const ImgContainer = styled(Image)`
  width: 13.3125rem;
  height: 13.3125rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
`

export const DivContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${(props) => props.theme.white};
  padding: 0.88rem;
  width: 80%;
  box-sizing: border-box;
  bottom: -50%;

  h3 {
    color: ${(props) => props.theme.darkGold};
  }
`
