import { styled } from 'styled-components'

export const DivContainer = styled.div`
  width: 17.3125rem;
  height: 25.3125rem;
  background: ${(props) => props.theme.lightGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  img {
    position: absolute;
  }
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
