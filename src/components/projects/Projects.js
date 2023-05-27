import { Line, ProjectsSection, ProjectsTitle, ProjectsHeader, ProjectsContainer } from "../../styles/Projects.styled";
import { Reveal } from "../Reveal";
import { Project } from "./Project";
import project1Img from '../../assets/portal.png';
import project2Img from '../../assets/redesocial.png';

export default function Projects() {
  return(
    <ProjectsSection name='projetos'>
      <ProjectsHeader>
        <Line></Line>
        <h3>
          <Reveal>
            <ProjectsTitle>
              Projetos
              <span>.</span>
            </ProjectsTitle>
          </Reveal>
        </h3>
      </ProjectsHeader>
      <ProjectsContainer>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </ProjectsContainer>
    </ProjectsSection>
  )
}

const projects = [
  {
    title: "Portal do Aluno",
    imgSrc: project1Img,
    code: "https://github.com/JPCRibeiro/Portal",
    projectLink: "https://jpcribeiro.github.io/Portal/",
    tech: ["ReactJS", "React Router", "MUI", "JSON"],
    description:
      "Plataforma online para que estudantes alcancem uma experiência educacional interativa e eficiente.",
    modalContent: (
      <>
        <p>
          Projetado para atender às necessidades dos alunos, fornecendo recursos valiosos para auxiliar no processo de aprendizagem. 
        </p>
        <p>
          Feito com React, utilizando um arquivo JSON externo e assim coletando os dados dos alunos, como matrícula e nome, usando React Router para a navegação do Portal.
        </p>
        <p>
          Dica para logar no Portal: João Pedro, João, Pedro
        </p>
      </>
    ),
  },
  {
    title: "Rede Social",
    imgSrc: project2Img,
    code: "",
    projectLink: "",
    tech: ["ReactJS", "MUI"],
    description:
      "Projeto de rede social projetado para conectar pessoas ao redor do mundo, semelhante ao Twitter.",
    modalContent: (
      <>
        <p>
          Utilizando React e objetos para renderizar o feed, MUI foi utilizado para os ícones e botões.
        </p>
      </>
    ),
  },
];

