import React, { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  color: 'black'
  placeholder?: string
  'data-testid'?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ color, ...rest }, ref) => {
    return <InputContainer color={color} {...rest} ref={ref} />
  },
)

Input.displayName = 'Input'

export default Input
