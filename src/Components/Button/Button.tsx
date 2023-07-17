import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { BtnContainer } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
    background: 'gold' | 'white'
    color: 'white' | 'gold'
  }

export function Button({ children, background, color }: ButtonProps) {
  return (
    <BtnContainer background={background} color={color}>
      {children}
    </BtnContainer>
  )
}
