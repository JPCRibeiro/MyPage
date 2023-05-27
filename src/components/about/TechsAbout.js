
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "../Reveal";
import { Col2, Grid, Tech } from "../../styles/About.styled";

export default function Stats() {
  return (
    <div style={{position: 'relative'}}>
      <Reveal>
        <Col2>
          <h4>
            <AiFillCode size="3rem" color="var(--primary-color)" />
            <span>Tecnologias que uso</span>
          </h4>
          <Grid>
            <Tech>ReactJS</Tech>
            <Tech>React Native</Tech>
            <Tech>JavaScript</Tech>
            <Tech>HTML</Tech>
            <Tech>CSS</Tech>
            <Tech>Node</Tech>
            <Tech>GitHub</Tech>
            <Tech>Photoshop</Tech>
            <Tech>Git</Tech>
            <Tech>Illustrator</Tech>
          </Grid>
        </Col2>
      </Reveal>
    </div>
  );
};
