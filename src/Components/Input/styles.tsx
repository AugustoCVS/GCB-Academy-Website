import styled, { css } from 'styled-components'

import { defaultTheme } from '../../styles/themes/defaultTheme'

interface ContainerProps {
  color: 'black'
}

const inputColors = {
  black: defaultTheme.black,
}

export const InputContainer = styled.input<ContainerProps>`
  ${({ color }) => css`
    color: ${inputColors[color]};
    background-color: transparent;
    border: 2px solid #dfdfe6;
    border-radius: 0.75rem;

    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 500;

    display: flex;
    width: 30.125rem;
    height: 3.224rem;
    padding: 1rem;
    padding-left: 3rem;
    align-items: center;
    gap: 0.5rem;

    ::placeholder {
      color: ${inputColors[color]};
      opacity: 0.6;
    }

    :focus {
      outline: none;
      border-color: ${inputColors[color]};
      box-shadow: 0 0 4px ${inputColors[color]};
    }
  `}
`
