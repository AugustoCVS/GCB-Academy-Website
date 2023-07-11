import { MenuCondition } from '@/interfaces/MenuCondition'
import styled, { css } from 'styled-components'

export const MenuHamburguerContainer = styled.div<MenuCondition>`
  display: none;

  @media (max-width: 320px) {
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

    background: rgb(194, 142, 91);
    background: linear-gradient(
      90deg,
      rgba(194, 142, 91, 0.6194852941176471) 13%,
      rgba(194, 142, 91, 0.5158438375350141) 47%
    );

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
