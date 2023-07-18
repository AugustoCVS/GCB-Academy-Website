import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  width: 33.9375rem;
  padding: 1.5rem 2rem;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0.9375rem;
  background: #fcfcfd;

  p {
    font-family: inherit;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
  }
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    text-align: center;
    span {
      color: ${(props) => props.theme.gold};
    }
  }

  button {
    width: 30.125rem;
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

  p {
    font-family: inherit;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
  }
`
