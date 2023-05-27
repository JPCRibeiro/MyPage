import { useEffect } from "react";
import ReactDOM from "react-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectWindow, ProjectWindowCard, WindowCardContent, WindowCardFooter, WindowCardImg, WindowCardLinks, WindowCardTech, WindowCardText, WindowCardLinkText } from "../../styles/Projects.styled";

export default function ProjectModal({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <ProjectWindow onClick={() => setIsOpen(false)}>
      <ProjectWindowCard
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <WindowCardImg
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <WindowCardContent>
          <h4>{title}</h4>
          <WindowCardTech>{tech.join(" - ")}</WindowCardTech>
          <WindowCardText>{modalContent}</WindowCardText>
          <WindowCardFooter>
            <WindowCardLinkText>
              Project Links<span>.</span>
            </WindowCardLinkText>
            <WindowCardLinks>
              <a target="_blank" rel="noopener noreferrer" href={code}>
                <AiFillGithub /> source code
              </a>
              <a target="blank" rel="noopener noreferrer" href={projectLink}>
                <AiOutlineExport /> live project
              </a>
            </WindowCardLinks>
          </WindowCardFooter>
        </WindowCardContent>
      </ProjectWindowCard>
    </ProjectWindow>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.getElementById("root"));
};
