import React from "react";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
export const Education = () => {
  return (
    <Row className={"py-5 bg-light"}>
      <Col sm={12} className={"mx-auto"}>
        <h1 className="text-main py-5 text-center">My Education</h1>
      </Col>

      <Col sm={12} md={8} className={"mx-auto mb-5"}>
        <Fade left>
          <Row className="align-items-center justify-content-between">
            <Col md={4} className="p-4">
              <h3 className="text-pre">2016-2020</h3>
            </Col>
            <Col md={8} className="p-4">
              <h5 className="text-muted">
                Bachelor of Technology, Computer Science &amp; Engineering
              </h5>
              <h4>Rajkiya Engineering College, Kannauj</h4>
              <h6>Aggregate CGPA : 7.2</h6>
            </Col>
          </Row>
        </Fade>
      </Col>

      <Col sm={12} md={8} className={"mx-auto mb-5"}>
        <Fade left>
          <Row className=" align-items-center justify-content-between">
            <Col md={4} className="p-4">
              <h3 className="text-pre">2014-2015</h3>
            </Col>
            <Col md={8} className="p-4">
              <h5 className="text-muted">
                12th Intermediate, Physics, Chemistry, Mathematics &amp; English
              </h5>
              <h4>Meerut Public School, Meerut Cantt.</h4>
              <h6>Aggregate % : 91</h6>
            </Col>
          </Row>
        </Fade>
      </Col>

      <Col sm={12} md={8} className={"mx-auto mb-5"}>
        <Fade left>
          <Row className=" align-items-center justify-content-between">
            <Col md={4} className="p-4">
              <h3 className="text-pre">2012-2013</h3>
            </Col>
            <Col md={8} className="p-4">
              <h5 className="text-muted">1oth High School</h5>
              <h4>Meerut Public School, Meerut Cantt.</h4>
              <h6>Aggregate CGPA : 10.0</h6>
            </Col>
          </Row>
        </Fade>
      </Col>
    </Row>
  );
};
