import styled, { css } from 'styled-components'

import { defaultTheme } from '@/styles/themes/defaultTheme'

interface ContainerProps {
  background: 'gold' | 'white'
  color: 'white' | 'gold'
}

const buttonColors = {
  gold: defaultTheme.gold,
  white: defaultTheme.white,
}

export const BtnContainer = styled.button<ContainerProps>`
  ${({ background, color }) => css`
    background: ${buttonColors[background]};
    width: max-content;
    height: 42px;
    padding: 0.5rem 2rem;
    border: 0;
    border-radius: 42px;
    color: ${buttonColors[color]};
    font-weight: bold;
  `}
`
