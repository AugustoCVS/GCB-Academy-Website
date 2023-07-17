import styled, { css } from 'styled-components'

import { defaultTheme } from '@/styles/themes/defaultTheme'

interface ContainerProps {
  color: 'white' | 'darkGold'
}

const titleColors = {
  darkGold: defaultTheme.darkGold,
  white: defaultTheme.white,
}

export const TitleContainer = styled.h2<ContainerProps>`
  ${({ color }) => css`
    color: ${titleColors[color]};
    font-family: inherit;
    font-size: 2.25rem;
    font-weight: 700;
  `}
`
