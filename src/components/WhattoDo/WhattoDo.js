import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaDesktop } from "react-icons/fa";

export default function WhattoDo() {
  return (
    <section className="serviceSection fix" id="whattodo">
      <Container className="pt100 pb100">
        <div className="sectionTitle mb70">
          <h2>What I Do?</h2>
        </div>
        <Row>
          <Col xs={4} md={4}>
            <div className="serviceItem">
              <FaDesktop />
              <h4>Graphic</h4>
              <p>Lorem ipsum dolor sit amet, augue theophrastus ex.</p>
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="serviceItem">
              <FaDesktop />
              <h4>Photography</h4>
              <p>Lorem ipsum dolor sit amet, augue theophrastus ex.</p>
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="serviceItem">
              <FaDesktop />
              <h4>Development</h4>
              <p>Lorem ipsum dolor sit amet, augue theophrastus ex.</p>
            </div>
          </Col>
        </Row>
        <Row className="mt30">
          <Col xs={4} md={4}>
            <div className="serviceItem">
              <FaDesktop />
              <h4>Graphic</h4>
              <p>Lorem ipsum dolor sit amet, augue theophrastus ex.</p>
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="serviceItem">
              <FaDesktop />
              <h4>Photography</h4>
              <p>Lorem ipsum dolor sit amet, augue theophrastus ex.</p>
            </div>
          </Col>
          <Col xs={4} md={4}>
            <div className="serviceItem">
              <FaDesktop />
              <h4>Development</h4>
              <p>Lorem ipsum dolor sit amet, augue theophrastus ex.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
