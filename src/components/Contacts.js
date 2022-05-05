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
            <h6><a href="mailto:info@duniamilan.com" class="contact-link">INFO@DUNIAMILAN.COM</a></h6>
            <h6><a href="tel:+39 0247707218" class="contact-link">+39 0247707218</a></h6>
            <h6>Via Aurelio Saffi 26, 20123 Milano</h6>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col  md="auto" className="text-center">
            <a href="https://www.instagram.com/duniamilano" target="_blank">
             <img src={insta} className="img-fluid img-insta" />
            </a>
          </Col>
        </Row>
      </Container>
    );
};

 