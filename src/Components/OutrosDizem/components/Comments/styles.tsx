import { styled } from 'styled-components'

export const UserComment = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 1rem;
  border-radius: 1.25rem;

  box-shadow: 0px 2px 28px rgba(41, 50, 65, 0.08),
    0px 7px 53px rgba(41, 50, 65, 0.12);

  padding-bottom: 6rem;
  width: 25rem;
  height: 16.9375rem;

  h3 {
    color: var(--dark-gold);
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 18rem;
  }
`
export const DivImage = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  overflow: hidden;
`
