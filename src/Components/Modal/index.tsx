import { ReactNode, HTMLAttributes } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from './styles'

type ModalProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Modal({ children }: ModalProps) {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>{children}</Content>
      </Overlay>
    </Dialog.Portal>
  )
}
