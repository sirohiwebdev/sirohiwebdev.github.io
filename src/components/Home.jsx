import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyAvatar } from "./MyAvatar";
import { animated, useSpring } from "react-spring";
import pic from "../assets/images/pic.jpeg";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Work } from "./Work";
import { Fade } from "react-reveal";
import {Footer} from "./Footer";

export const Home = () => {
  const opacitySpring = useSpring({
    opacity: 1,
    from: {
      opacity: 0
    },
    config: {
      duration: 1200,
      delay: 300
    }
  });
  const avtarSpring = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: {
      opacity: 0.5,
      transform: "scale(0)"
    },
    config: { duration: 800 }
  });
  return (
    <Container fluid>
      <Row className="vh-100">
        <Col sm={12} md={6} className={"p-3 d-flex align-items-center"}>
          <MyAvatar style={avtarSpring} source={pic} className={"mx-auto"} />
        </Col>

        <Col sm={12} md={6} className={"p-3 d-flex align-items-center"}>
          <animated.div
            style={opacitySpring}
            className={"mx-auto text-center text-main"}
          >
            <h3>Hi,</h3>
            <h1 className="font-weight-bold">
              <small>I am</small> Abhishek Sirohi
            </h1>
            <h4 className={"text-pre"}>Full-stack Developer | Freelancer | Designer</h4>
          </animated.div>
        </Col>
      </Row>

      <Row className="bg-light py-5">
        <Col sm={12} className={"py-3 mt-1 d-flex  justify-content-center"}>
          <h1 className="text-main py-5">About Me</h1>
        </Col>

        <Fade bottom>
          <Col sm={12} md={8} className={"p-3 mx-auto"}>
            <p className="text-justify p-3 text-secondary h5">
              I am a person of my dreams, determined and dedicated towards my
              career. I love to explore new technologies, building interesting
              stuff from the scratch. I am passionate about coding and specially
              web development. Helping others in their work and life is my
              pleasure.
            </p>
          </Col>
        </Fade>
      </Row>

      <Skills />
      <Education />
      <Work />
      <Footer/>
    </Container>
  );
};
