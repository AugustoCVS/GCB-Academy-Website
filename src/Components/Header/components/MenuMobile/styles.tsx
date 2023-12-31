import Link from 'next/link'

import { MenuCondition } from '@/interfaces/MenuCondition'
import styled, { css } from 'styled-components'

export const MenuHamburguerContainer = styled.div<MenuCondition>`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.white};

    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    transition: 0.5s;

    > svg {
      position: absolute;
      top: 1rem;
      right: 1rem;
      transform: rotate(45deg);
      transition: 0.7s;
      color: ${(props) => props.theme.darkGold};
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      list-style-type: none;
      transform: scale(0.7);
      transition: 0.7s;
      font-size: 1.5rem;
      color: ${(props) => props.theme.darkGold};
    }

    button {
      background: ${(props) => props.theme.darkGold};
      width: 10rem;
      height: 42px;
      padding: 0.5rem 2rem;
      border: 0;
      border-radius: 42px;
      color: ${(props) => props.theme.white};
      font-weight: bold;
      cursor: pointer;
    }

    ${({ isvisible }) =>
      isvisible &&
      css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);

        > svg {
          transform: rotate(0deg);
        }

        nav {
          transform: scale(1);
        }
      `}
  }
`
export const LinkPage = styled(Link)`
  color: ${(props) => props.theme.black};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.gold};
    border-bottom: 2px solid ${(props) => props.theme.gold};
  }
`
