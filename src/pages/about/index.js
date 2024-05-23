import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
          <h4>Date of birth:</h4><p>2003/02/03</p>
          <h4>Ethnic group: </h4><p>Han Chinese</p>
          <h4>Attend an institution:</h4><p>Hebei university</p>
          <h4>Origin:</h4><p>Hebei Province, China</p>

          </Col>
          <Col lg="5">
          <h4>English name: </h4><p>Joey</p>
          <h4>Phone number:</h4> <p>15731030958</p>
          <h4>Mail:</h4><p>boxxue15731030958@1 63 com</p>
          <h4>Current City :</h4><p>Baoding. China</p>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <img className="my_resume" src={dataabout.my_resume} alt="resume" />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
