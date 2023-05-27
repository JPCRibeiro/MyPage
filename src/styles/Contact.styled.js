import { styled } from "styled-components";
import { SectionWrapper } from "./GlobalCss.styled";
import { Links, Link } from "./Nav.styled";

export const FooterSection = styled(SectionWrapper)`
`

export const ContactContainer = styled.footer`
  //max-width: 700px;
  margin: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const ContactTitle = styled.h4`
  font-size: 9.6rem;
  text-align: center;
  font-weight: 900;
  line-height: 1;

  span {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 5.6rem;
  }
`

export const LogoLink = styled.a`
  width: 60px;
  display: flex;
  margin-top: 3.5rem;
  margin-bottom: 2.5rem;
  transition: transform 200ms;
  transform: ${({rotatex, rotatey}) => `rotateX(${rotatex}deg) rotateY(${rotatey}deg)`};
  cursor: pointer;
`;

export const Logo = styled.svg`
  color: var(--primary-color);
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
`

export const ContactInput = styled.input`
  padding: 1rem 1rem 1rem 0;
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 2px solid var(--text-color);
  color: var(--text-color);
  outline: none;
  font-size: 1.8rem;
  width: 400px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

export const FormLabel = styled.label`
  color: var(--text-color);
  font-size: 2.2rem;
`

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1rem 1.6rem;
  border: 2px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 500;
  border-radius: 4px;
  position: relative;
  z-index: 20;
  overflow: hidden;
  transition: color .2s;
  margin-top: 2rem;
  width: 100%;

  &:hover {
    color: #080808;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--primary-color);
    height: 100%;
    width: 100%;
    left: -100%;
    top: -100%;
    transition: left .3s,top .3s;
  }

  &:hover:before {
    left: 0;
    top: 0;
  }
`

export const AlertError = styled.span`
  color: white;
  width: 100%;
  min-height: 27px;
  margin-top: 10px;
  font-size: 1.6rem;
  //color: #ff4444;
  color: #f2545b;
`

export const ContactEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: fit-content;
  font-size: 2.2rem;
  margin: 4rem auto 0;

  &:hover {
    opacity: 0.5;
    transition: 0s;
    color: white;
  }
`

export const FooterLinks = styled(Links)`
  justify-content: center;
  padding-top: 2rem;
`

export const FooterLink = styled(Link)`
  opacity: 1;

  &:hover {
    opacity: 0.5;
    color: white;
    transition: 0s;
  }
`

export const ContainerBoxes = styled.div`
  width: 100%;
  height: 72px;
	overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Boxes = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  float: left;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    bottom: 5px;
    right: 5px;
		box-shadow: 0 1px 4px var(--primary-color);
    background: #111;
    transition: 3s ease-in-out;
  }

  &:hover::before {
    transition: 0s ease-in-out;
  }

  &:nth-child(9n + 1):hover:before {
    background: rgb(255, 255, 255);
    box-shadow: 0 0 3px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255);
  }

  &:nth-child(9n + 2):hover:before {
    background: var(--primary-color);
    box-shadow: 0 0 3px var(--primary-color), 0 0 10px var(--primary-color);
  }

  &:nth-child(9n + 3):hover:before {
    background: rgb(255, 255, 255);
    box-shadow: 0 0 3px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255);
  }

  &:nth-child(9n + 4):hover:before {
    background: var(--primary-color);
    box-shadow: 0 0 3px var(--primary-color), 0 0 10px var(--primary-color);
  }

  &:nth-child(9n + 5):hover:before {
    background: rgb(255, 255, 255);
    box-shadow: 0 0 3px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255);
  }

  &:nth-child(9n + 6):hover:before {
    background: var(--primary-color);
    box-shadow: 0 0 3px var(--primary-color), 0 0 10px var(--primary-color);
  }

  &:nth-child(9n + 7):hover:before {
    background: rgb(255, 255, 255);
    box-shadow: 0 0 3px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255);
  }

  &:nth-child(9n + 8):hover:before {
    background: var(--primary-color);
    box-shadow: 0 0 3px var(--primary-color), 0 0 10px var(--primary-color);
  }

  &:nth-child(9n + 9):hover:before {
    background: rgb(255, 255, 255);
    box-shadow: 0 0 3px rgb(255, 255, 255), 0 0 10px rgb(255, 255, 255);
  }
`