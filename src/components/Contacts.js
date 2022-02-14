import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import insta from '../assets/insta.png'

export default function Contacts(props) {
    return (
      <Container className='mt-4 mb-4 text-center p-5'>
        <Row className="justify-content-center mb-5">
          <Col md="auto">
            <h1 className='contact-title'>CONTATTI</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col  md="auto" className="text-center">
            <h6>INFO@DUNIAMILAN.COM</h6>
            <h6>+39 0202020202</h6>
            <h6>Via Aurelio Saffi 26, 20123 Milano</h6>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col  md="auto" className="text-center">
            <img src={insta} className="img-fluid img-insta" />
          </Col>
        </Row>
      </Container>
    );
};

 