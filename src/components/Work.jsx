import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { WorkCard } from "./styled/WorkCard";
import safepe from "../assets/images/safepe.png";
import icdsa from "../assets/images/icdsa.png";
import {Fade } from "react-reveal";

export const Work = () => {
  return (
    <Row className={"py-5"}>
      <Col sm={12} className={"mx-auto"}>
        <h1 className="text-main py-5 text-center">My Work</h1>
      </Col>

      <Col md={10} className="mx-auto">
        <div className="d-md-flex justify-content-around align-items-center flex-wrap">
          <Fade bottom>
            <WorkCard source={safepe}>
              <div className="card-overlay">
                <div className="d-flex flex-column justify-content-center align-items-center text-white h-100">
                  <h4>SafePe Payment Website</h4>
                  <a href="http://safepeindia.com" target="_blank" rel="noopener noreferrer">
                    <Button variant={"outline-light"}>Visit</Button>
                  </a>
                </div>
              </div>
            </WorkCard>

            <WorkCard source={icdsa}>
              <div className="card-overlay">
                <div className="d-flex flex-column justify-content-center align-items-center text-white h-100">
                  <h4>ICDSA Website</h4>
                  <a href="http://icdsa.reck.ac.in/" target="_blank" rel="no">
                    <Button variant={"outline-light"}>Visit</Button>
                  </a>
                </div>
              </div>
            </WorkCard>
          </Fade>
        </div>
      </Col>
    </Row>
  );
};
