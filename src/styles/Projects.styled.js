import { styled } from "styled-components";
import { SectionWrapper, SectionTitle } from "./GlobalCss.styled";
import { motion as m } from "framer-motion";

export const ProjectsSection = styled(SectionWrapper)`
`

export const ProjectsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
`

export const ProjectsTitle = styled(SectionTitle)`
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ebecf3;
  opacity: 0.3;
`

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectImageBox = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #232323;
  cursor: pointer;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
`

export const ProjectImage = styled.img`
  width: 85%;
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 15%;
  transition: 0.25s all;
  border-radius: 10px;
  width: ${({ hovered }) => ( hovered ? "90%" : "85%" )};
  rotate: ${({ hovered }) => ( hovered ? "2deg" : "0deg" )};
`

export const ProjectContainerText = styled.div`
  margin: 1.6rem 0;
`

export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  h4 {
    font-weight: bold;
    font-size: 2.2rem;
    flex-shrink: 0;
    max-width: calc(100% - 150px);
  }

  a {
    opacity: 0.75;
    transition: 0.25s opacity;
  }

  a:hover {
    opacity: 1;
  }
`

export const ProjectTitleLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ebecf3;
  opacity: 0.3;
`

export const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-size: 1.6rem;
  color: var(--primary-color);
  margin: 0.8rem 0;
`

export const ProjectDescription = styled.p`
  font-weight: 200;

  span {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--primary-color);
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }
`

/* */

export const ProjectWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100000000;
  height: 100vh;
  padding: 4.8rem 1.2rem;
  background: hsla(0,0%,7%,.25);
  backdrop-filter: blur(12px);
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

export const ProjectWindowCard = styled(m.div)`
  width: 100%;
  max-width: 700px;
  height: fit-content;
  border-radius: 1.2rem;
  overflow: hidden;
  background: #232323;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  cursor: auto;
`

export const WindowCardImg = styled.img`
  width: 100%;
`

export const WindowCardContent = styled.div`
  padding: 2.4rem;

  h4 {
    font-size: 3.6rem;
  }
`

export const WindowCardTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-size: 1.6rem;
  color: var(--primary-color);
  margin: 0.2rem 0 2.4rem;
`

export const WindowCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-size: 1.6rem;
`

export const WindowCardFooter = styled.div`
  margin-top: 2.4rem;
`

export const WindowCardLinkText = styled.p`
  font-weight: bold;
  font-size: 2.2rem;
  margin-bottom: 0.8rem;

  span {
    color: var(--primary-color);
  }
`

export const WindowCardLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    font-size: 1.6rem;
    color: var(--primary-color);
  }

  a:hover {
    text-decoration: underline;
  }
`

export const CloseWindowButton = styled.button`
  background: none;
  border: none;
  color: #ebecf3;
  font-size: 2.2rem;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
`