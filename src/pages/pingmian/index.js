import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { pingmian, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Pingmian = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Graphic design | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
          <Link to="/portfolio">Back</Link>
            <h1 className="display-4 mb-4"> Graphic design </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {pingmian.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
