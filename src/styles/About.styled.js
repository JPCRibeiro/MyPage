import { styled } from "styled-components"
import { SectionWrapper, SectionTitle } from "./GlobalCss.styled";

export const AboutSection = styled(SectionWrapper)`
`

export const AboutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
`

export const AboutTitle = styled(SectionTitle)`
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ebecf3;
  opacity: 0.3;
`

export const AboutTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2.4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const AboutText = styled.p`
  margin-bottom: 2.4rem;
  font-weight: 200;
`

export const Col2 = styled.div`
  h4 {
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;

    span {
      font-size: var(--text-md);
      font-weight: bold;
      position: relative;
      margin-left: 0.8rem;
    }
  }
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 4.8rem;
`

export const Tech = styled.span`
  font-size: 1.6rem;
  background: #232323;
  padding: 0.2rem 1rem;
  border-radius: 999px;
`

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  text-align: center;
  margin: 2rem auto 0;

  img {
    max-width: 190px;
    width: 100%;
  }
`

export const AboutLocal = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  padding-bottom: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, transparent, white, transparent) 1;
`