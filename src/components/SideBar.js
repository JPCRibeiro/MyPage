import {
  Logo,
  LogoBox,
  NavLinks,
  Navbar,
  NavLinksMotion,
} from "../styles/Nav.styled";
import logo from "../assets/logo-green.svg";

export default function Sidebar() {
  return (
    <Navbar
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LogoBox 
      to="inicio"
      exact="true"
      activeClass="active"
      spy={true}
      smooth={true}
      duration={200}
      offset={-35}
      >
        <Logo src={logo}></Logo>
      </LogoBox>
      <NavLinksMotion
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <NavLinks
          to="sobre"
          exact="true"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={200}
          offset={-35}
        >
          Sobre
        </NavLinks>
      </NavLinksMotion>
      <NavLinksMotion
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <NavLinks
          to="projetos"
          exact="true"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={200}
          offset={-35}
        >
          Projetos
        </NavLinks>
      </NavLinksMotion>
      <NavLinksMotion
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <NavLinks
          to="contato"
          exact="true"
          spy={true}
          smooth={true}
          duration={200}
          offset={-35}
        >
          Contato
        </NavLinks>
      </NavLinksMotion>
    </Navbar>
  );
}
