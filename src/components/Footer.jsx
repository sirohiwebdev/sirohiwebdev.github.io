import React from "react";
import {Col, Row} from "react-bootstrap";
import {SocialIcons} from "./styled/SocialIcons";

export const Footer = () => {
    return <Row className={'bg-light'}>
        <Col>
            <div className="py-5 text-center">
                <SocialIcons> <a href="https://linkedin.com/in/sirohiwebdev" target={'_blank'} rel="noopener noreferrer"><i className={'fa fa-linkedin'}/></a> </SocialIcons>
                <SocialIcons>  <a href="https://github.com/sirohiwebdev" target={'_blank'} rel="noopener noreferrer"><i className={'fa fa-github'}/></a></SocialIcons>
                <SocialIcons>  <a href="mailto:sirohiwebdev@gmail.com"><i className={'fa fa-envelope'}/></a> </SocialIcons>
            </div>
        </Col>
    </Row>
}