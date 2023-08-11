import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    text-align: center;
    span {
      color: ${(props) => props.theme.gold};
    }
  }

  #invalidLogin {
    color: red;
  }

  button {
    width: 30.125rem;
  }

  @media (max-width: 350px) {
    input {
      width: 14.125rem;
    }
    button {
      width: 14.125rem;
    }
  }

  @media (min-width: 351px) and (max-width: 500px) {
    input {
      width: 16.125rem;
    }
    button {
      width: 16.125rem;
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    input {
      width: 22.125rem;
    }
    button {
      width: 22.125rem;
    }
  }
`
export const DivCheckBox = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    width: 1rem;
    height: 1rem;
  }
`

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CloseButton = styled(Dialog.Close)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  background-color: ${(props) => props.theme.white};
  border: 2px solid #cacaca;
`

export const ModalTitle = styled(Dialog.Title)`
  color: #000;
  font-family: inherit;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
`

export const DivWarningMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-family: inherit;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
  }
`

export const ErrorMessage = styled.p`
  color: red;
`

export const DivInputContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`
