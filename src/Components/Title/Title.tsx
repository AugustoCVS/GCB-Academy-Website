import { ReactNode, HTMLAttributes } from 'react'

import { TitleContainer } from './styles'

type HeadingTypes = 'h1' | 'h2' | 'h3'

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode
  color: 'white' | 'darkGold'
  type: HeadingTypes
}

export function Title({ children, color, type, ...rest }: TitleProps) {
  const Component = type as keyof JSX.IntrinsicElements

  return (
    <TitleContainer as={Component} color={color} {...rest}>
      {children}
    </TitleContainer>
  )
}
