import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { BtnContainer } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
    background: 'gold' | 'white'
    color: 'white' | 'gold'
    onClick?: () => void
  }

export function Button({ children, background, color, onClick }: ButtonProps) {
  return (
    <BtnContainer background={background} color={color} onClick={onClick}>
      {children}
    </BtnContainer>
  )
}
