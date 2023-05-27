import { Reveal } from "../Reveal";
import { useAnimation, useInView, motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectImageBox, ProjectImage, ProjectContainerText, ProjectTitle, ProjectTitleLine, ProjectTech, ProjectDescription } from "../../styles/Projects.styled";
import ProjectModal from "./ProjectModal";

export const Project = ({ modalContent, projectLink, description, imgSrc, title, code, tech }) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <m.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <ProjectImageBox
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
        >
          <ProjectImage hovered={hovered ? 1 : 0}
            src={imgSrc}
            alt={`An image of the ${title} project.`}
          />
        </ProjectImageBox>
        <ProjectContainerText>
          <Reveal width="100%">
            <ProjectTitle>
              <h4>{title}</h4>
              <ProjectTitleLine/>

              <a href={code} target="blank" rel="nofollow noreferrer">
                <AiFillGithub size="2.8rem" />
              </a>

              <a href={projectLink} target="blank" rel="nofollow noreferrer">
                <AiOutlineExport size="2.8rem" />
              </a>
            </ProjectTitle>
          </Reveal>
          <Reveal>
            <ProjectTech>{tech.join(" - ")}</ProjectTech>
          </Reveal>
          <Reveal>
            <ProjectDescription>
              {description} <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </ProjectDescription>
          </Reveal>
        </ProjectContainerText>
      </m.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
