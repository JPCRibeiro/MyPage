import { styled } from "styled-components";
import { motion as m } from "framer-motion";
import { Link as LinkScroll} from 'react-scroll';

export const Navbar = styled(m.nav)`
  background-color: #080808;
  height: 100svh;
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  -ms-overflow-style: none; 
  scrollbar-width: none; 
  box-shadow: 4px 0px 21px -7px rgb(0 0 0 / 64%);

  &::-webkit-scrollbar {
  display: none;
}
`

export const LogoBox = styled(LinkScroll)`
  flex-shrink: 0;
  max-width: 50px;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  margin: 1.8rem 0 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 1.6px;
    background-color: #080808;
    border-radius: 7px;
  }

  &.active::before {
    content: '';
    position: absolute;
    width: 35px;
    height: 140%;
    background-color: var(--primary-color);
    animation: animate 4s linear infinite;
  }

  &:hover::before {
    content: '';
    position: absolute;
    width: 35px;
    height: 140%;
    background-color: var(--primary-color);
    animation: animate 4s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Logo = styled.img`
  display: flex;
  user-select: none;
  position: relative;
  z-index: 999;
`

export const NavLinksMotion = styled(m.span)`
  display: flex;
  width: 100%;
`

export const NavLinks = styled(LinkScroll)`
  font-family: 'Poppins', sans-serif;
  height: 100px;
  flex-shrink: 0;
  writing-mode: vertical-lr;
  font-size: 1.8rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  border-right: 1px solid transparent;
  transition: 0.1s all;
  width: 100%;
  cursor: pointer;
  user-select: none;
  position: relative;

  &:hover {
    background: #111;
    opacity: 1;
    transition: 0.2s all;
  }

  &.active {
    background: #111;
    opacity: 1;
  }

  &.active::after {
    transform: scaleY(1);
  }

  &::after{
    content: "";
    position: absolute;
    background-color: var(--primary-color);
    width: 2px;
    height: 100%;
    right: 0;
    transition: 0.3s ease;
    border-radius: 9999px;
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  &:hover::after{
    transform: scaleY(1);
  }
`

/**/

export const Header = styled.header`
  height: calc(45px + 3.6rem);
  padding: 0 3.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 60px;
  right: 0;
  z-index: 20;
  background: hsla(0,0%,7%,.25);
  backdrop-filter: blur(12px);
  font-size: 2.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 0 2.4rem;
  }
`

export const Links = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 10px;
`

export const Link = styled.a`
  opacity: 0.5;
  position: relative;
  z-index: 20;

  &:hover {
    color: var(--primary-color);
    opacity: 1;
    transition: all 0.2s ease 0s;
  }
`

export const CVButton = styled.button`
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

