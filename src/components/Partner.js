import { Col, Row, Container } from "react-bootstrap";
import fourSeason from '../assets/fourSeason.png'
import belmond from '../assets/belmond.png';
import como from '../assets/como.png';
import aman from '../assets/aman.png'

const Partner = () => {
  return(
    <div className="partner p-4">
      <Container>
      <Row className="justify-content-center text-center">
          <h1 className="partner-title">I NOSTRI PARTNER</h1>
      </Row>
      <Row className="justify-content-center text-center align-self-center mt-2">
          <Col className="align-self-center"><img src={fourSeason} className="img-fluid" /></Col>
          <Col className="align-self-center"><img src={belmond} className="img-fluid" /></Col>
          <Col className="align-self-center"><img src={como} className="img-fluid" /></Col>
          <Col className="align-self-center"><img src={aman} className="img-fluid" /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Partner;