import React from 'react';
import logo from '../assets/logo.jpg';
import { Container,Row,Col } from 'react-bootstrap';

export default function Footer(props) {
    return (
        <Container>
        <Row className="justify-content-center flex-column text-center">
          <Col md="auto">
            <p class="legal_footer">P.Iva - IT12071420967 Rea - MI - 2638514 Capitale sociale  10.000,00</p>
          </Col>
          <Col md="auto">
            <img src={logo} className="img-fluid img-footer" />
          </Col>
          
        </Row>
        </Container>
    );
}

 