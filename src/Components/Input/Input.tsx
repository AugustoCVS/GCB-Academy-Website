import { InputHTMLAttributes } from 'react'

import { InputContainer } from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  color: 'black'
}

export function Input({ color, ...rest }: InputProps) {
  return <InputContainer color={color} {...rest} />
}
