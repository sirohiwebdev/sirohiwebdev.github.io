import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import { Fade } from "react-reveal";
import { Spring } from "react-spring/renderprops";

const skills = [
  {
    skill: "HTML",
    value: 9
  },
  {
    skill: "CSS",
    value: 8
  },

  {
    skill: "JAVASCRIPT",
    value: 7
  },
  {
    skill: "REACT JS",
    value: 7
  },

  {
    skill: "NODE JS",
    value: 6
  },
  {
    skill: "MONGO DB",
    value: 5
  },
  {
    skill: "PHP",
    value: 8
  },
  {
    skill: "MYSQL",
    value: 7
  },
  {
    skill: "AWS",
    value: 6
  },
  {
    skill: "GIT",
    value: 7
  }
];

export const Skills = () => {
  return (
    <Row className="py-5">
      <Col sm={12} className={"py-3 mt-1 d-flex  justify-content-center"}>
        <h1 className="text-main py-5">My Skills</h1>
      </Col>

      <Col sm={8} className={"p-3 mx-auto"}>
        <Fade cascade delay={500}>
          {skills.map((s, index) => (
            <Row className="py-3">
              <Col sm={3}>{s.skill}</Col>
              <Col sm={9}>
                <Spring from={{ value: 0 }} to={{ value: s.value }}>
                  {props => (
                    <ProgressBar
                      variant="secondary"
                      max={10}
                      min={0}
                      srOnly
                      now={props.value}
                    ></ProgressBar>
                  )}
                </Spring>
              </Col>
            </Row>
          ))}
        </Fade>
      </Col>
    </Row>
  );
};
