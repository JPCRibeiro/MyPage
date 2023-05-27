import { AboutHeader, AboutSection, AboutText, AboutTextContainer, AboutTitle, Line, PerfilContainer, AboutLocal } from "../../styles/About.styled";
import { Reveal } from "../Reveal";
import { GiEarthAmerica } from 'react-icons/gi';
import Stats from "./TechsAbout";
import profilePicture from '../../assets/profile.svg';

export default function About() {
  return(
    <AboutSection name='sobre'>
      <AboutHeader>
        <h3>
          <Reveal>
            <AboutTitle>
              Sobre
              <span>.</span>
            </AboutTitle>
          </Reveal>
        </h3>
        <Line/>
      </AboutHeader>
      <AboutTextContainer>
        <div>
          <Reveal>
            <AboutText>
              Olá, me chamo João Pedro e seja bem-vindo à minha página pessoal, tenho 19 anos e moro no Rio de Janeiro. Gosto de futebol, música e tecnologia.
            </AboutText>
          </Reveal>
          <Reveal>
            <AboutText>
              Anteriormente realizei alguns cursos de programação de Back-End, de C++ e Python.
            </AboutText>
          </Reveal>
          <Reveal>
            <AboutText>
              No momento, estou cursando Engenharia de Software, aprendendo Front-End e Back-End.
            </AboutText>
          </Reveal>
        </div>
        <Stats/>
      </AboutTextContainer>
        <PerfilContainer>
          <Reveal>
            <img src={profilePicture} alt="profile" />
            <AboutLocal>
              <GiEarthAmerica/>
              Rio de Janeiro, Brasil
            </AboutLocal>
            <AboutText>
              Meu foco é projetar e criar produtos, Web sites e experiências digitais para as pessoas.
            </AboutText>
          </Reveal>
        </PerfilContainer>
    </AboutSection>
  )
}