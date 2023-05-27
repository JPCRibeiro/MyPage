import { createGlobalStyle } from "styled-components";
import { styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
    --primary-color: #0aff9d;
    --text-color: #ebecf3;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-family: 'Poppins', sans-serif;
  }
  body, html {
    max-width: 100vw;
    scroll-behavior: smooth;
    font-size: 1.8rem;
  }
  body {
    color: #ebecf3;
    background: #111;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    user-select: none;
  }
  img {
    user-select: none;
  }
  ::selection {
    background: var(--primary-color);
    color: #111;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  } 
  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 0;
  }
`

export const Home = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
`

export const SectionWrapper = styled.section`
  position: relative;
  z-index: 10;
  max-width: 1150px;
  margin: auto;
  padding: 9.6rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem;
  }
`

export const SectionTitle = styled.span`
  font-size: 5.6rem;
  font-weight: 900;
  text-align: end;

  span {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 3.6rem;
  }
`