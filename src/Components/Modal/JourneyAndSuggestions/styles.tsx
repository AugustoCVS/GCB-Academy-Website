import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const ContentText = styled.div`
  text-align: justify;

  p {
    text-align: justify;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
  }
`

export const DivSuggestions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const DivAllSugestions = styled.div`
  max-height: 9rem;
  overflow-y: auto;
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 350px) {
    input {
      width: 14.125rem;
    }
  }

  @media (min-width: 351px) and (max-width: 500px) {
    input {
      width: 16.125rem;
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    input {
      width: 22.125rem;
    }
  }
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
