import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Suggestions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  border-radius: 2.5rem;
  border: 2px solid #dfdfe6;
  padding: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

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
`
export const ContentText = styled.p`
  text-align: justify;
  font-family: inherit;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`

export const DivSuggestions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 9rem;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 0.625rem;
    border-radius: 0.625rem;
    border: none;

    right: 0;

    font-family: inherit;
    font-size: 0.75rem;
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
