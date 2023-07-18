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
