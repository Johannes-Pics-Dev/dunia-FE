import { Col, Row, Container } from "react-bootstrap";
import fourSeason from '../assets/fourSeason.png'
import belmond from '../assets/belmond.png';
import como from '../assets/como.png';
import aman from '../assets/aman.png'

const Partner = () => {
  return(
    <div className="partner p-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col><img src={fourSeason} className="img-fluid" /></Col>
          <Col><img src={belmond} className="img-fluid" /></Col>
          <Col><img src={como} className="img-fluid" /></Col>
          <Col><img src={aman} className="img-fluid" /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Partner;