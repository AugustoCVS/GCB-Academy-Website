import { styled } from 'styled-components'

export const MainAcademyNews = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`

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

  @media (max-width: 499px) {
    margin: 1rem;
    padding: 5rem;
    width: 18rem;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 500px) and (max-width: 800px) {
    margin: 1rem;
    padding: 5rem;
    width: 30rem;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 801px) and (max-width: 1200px) {
    margin: 1rem;
    padding: 5rem;
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 499px) {
    width: 16rem;

    h2 {
      font-size: 1.8rem;
    }

    p {
      width: 16rem;
    }
  }

  @media (min-width: 500px) and (max-width: 800px) {
    width: 28rem;

    h2 {
      font-size: 2rem;
    }

    p {
      width: 28rem;
    }
  }

  @media (min-width: 801px) and (max-width: 1200px) {
    width: 50rem;
    align-items: center;
    text-align: center;

    h2 {
      font-size: 2.2rem;
    }

    p {
      width: 50rem;
    }
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

  @media (max-width: 499px) {
    width: 16rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      position: relative;
      background-color: var(--white);
      color: var(--gold);
    }
  }

  @media (min-width: 500px) and (max-width: 800px) {
    width: 28rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 801px) and (max-width: 1200px) {
    width: 30rem;
    gap: 1rem;
  }
`

export const DivImage = styled.div`
  width: 20.75rem;
  height: 20.75rem;
  border-radius: 999px;
  background-color: var(--white);
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 1201px) and (max-width: 1300px) {
    width: 17.75rem;
    height: 17.75rem;
  }
`
