import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

import profileImag from '../../images/profile.jpg';

export default function About() {
  return (
    <section className="aboutSection fix" id="about">
      <Container className="pt100 pb100">
        <Row>
          <div className="sectionTitle mb70">
            <h2>About Me</h2>
          </div>
          <Col xs={6} md={6} className="aboutImg">
            <img src={profileImag} alt=""/>
          </Col>
          <Col xs={6} md={6} className="aboutText">
            <p>I am <ins>Prashant Singh.</ins> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text making it over 2000 years old.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>

            <button type="button" className="btn siteBtn btnOutline transitionEase mt10">Download CV</button>
          </Col>
        </Row>
      </Container>      
    </section>
    
  );
}
