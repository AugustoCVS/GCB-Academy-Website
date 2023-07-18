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

  @media (max-width: 350px) {
    width: 18rem;
  }

  @media (min-width: 351px) and (max-width: 500px) {
    width: 20rem;
  }

  @media (min-width: 501px) and (max-width: 600px) {
    width: 26rem;
  }
`
export const ContentText = styled.p`
  text-align: justify;
  font-family: inherit;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  textarea {
    display: flex;
    width: 30.125rem;
    height: 10.5rem;
    padding: 1rem;
    align-items: flex-start;
    gap: 0.5rem;

    border-radius: 0.75rem;
    border: 2px solid #dfdfe6;
    background: #fcfcfd;
  }

  @media (max-width: 350px) {
    input {
      width: 14.125rem;
    }
    textarea {
      width: 14.125rem;
    }
  }

  @media (min-width: 351px) and (max-width: 500px) {
    input {
      width: 16.125rem;
    }
    textarea {
      width: 16.125rem;
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    input {
      width: 22.125rem;
    }
    textarea {
      width: 22.125rem;
    }
  }
`

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
    display: flex;
    width: 14.5rem;
    height: 3.5rem;
    padding: 1rem 0rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 3.125rem;
    border: none;

    right: 0;

    font-family: inherit;
    font-size: 1rem;
  }
`
export const CancelButton = styled(Dialog.Close)`
  background: #f1f1f1;
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

export const DivMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    width: 3rem;
    height: 3rem;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 9999px;
    background: #dfdfe6;
  }
`

export const ErrorMessage = styled.p`
  color: red;
`
