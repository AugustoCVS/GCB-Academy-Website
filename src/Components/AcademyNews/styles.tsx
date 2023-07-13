import { styled } from 'styled-components'

export const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: center;
  background-color: var(--gold);
  width: 77.5rem;
  height: 24.8rem;
  border-radius: 1.25rem;
  margin: 6.25rem;
  padding: 0 6.75rem;
`
export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.56rem;

  h2 {
    color: var(--white);
    font-family: inherit;
    font-size: 2.25rem;
    font-weight: 700;
  }

  p {
    width: 32.1875rem;
    color: var(--white);
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 400;
  }
`

export const DivInputEmail = styled.div`
  position: relative;
  margin-top: 3.37rem;
  display: flex;
  align-items: center;
  width: 32.426rem;

  input {
    width: 100%;
    height: 3.224rem;
    border-radius: 1.625rem;
    background: var(--white);
    border: none;

    color: rgba(41, 50, 65, 0.5);
    font-family: inherit;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding-left: 1.8rem;
  }

  button {
    margin: 0.25rem;
    position: absolute;
    right: 0;
    border: 0;
    width: 9.61rem;
    height: 2.852rem;
    background-color: var(--gold);
    color: var(--white);
    border-radius: 1.4375rem;
    border: none;

    color: var(--white);
    text-align: center;
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 600;
  }
`

export const DivImage = styled.div`
  width: 20.75rem;
  height: 20.75rem;
  border-radius: 999px;
  background-color: var(--white);
  display: flex;
  align-items: center;
`
