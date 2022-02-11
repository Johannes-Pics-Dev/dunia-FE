import React from 'react';
import logo from '../assets/logo.jpg';
import '../styles/scss/_Footer.scss';
import { Container,Row,Col } from 'react-bootstrap';

export default function Footer(props) {
    return (
        <Container>
        <Row className="justify-content-center text-center">
          <Col md="auto">
            <img src={logo} />
          </Col>
        </Row>
        </Container>
    );
}

 