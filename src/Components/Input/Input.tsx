import React, { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  color: 'black'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ color, ...rest }, ref) => {
    return <InputContainer color={color} {...rest} ref={ref} />
  },
)

Input.displayName = 'Input'

export default Input
