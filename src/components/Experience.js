
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/logo.jpg';

const Experience = () => {
  return(
      <Container>
        <Row className="justify-content-center text-center">
          <Col md="auto">
            <img src={logo} />
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col  md="auto">
          <h6>OLTRE I VIAGGI, ESPERIENZE</h6>
            <p>Siamo una experience agency e il nostro obiettivo<br/>
                è trasformare il tuo temp libero in ricordi realmente indelebili.</p>
            <p>Che si parli di poche ore, giorni, settimane o mesi, poco cambia,<br/>
                perchè il tempo è il bene più prezioso che abbiamo.<br/>
                Per questo, studiamo ogni esperienza nel minimo dettaglio,<br/>In base alla tua persona e ai tuoi interessi
            </p>
            <p>Perchè è vero che il tempo scorre per tutti uguale,<br/>ma ognuno ha il suo modo perfetto di farlo scorrere</p>
            <p>Avventura, relax, divertimento,<br/>
            a pochi passi da casa o dall'altra parte del mondo<br/>qualunque sia l'esperienza che hai sempre sognato,<br/>
            divenerà prima realtà e poi un magnifico ricordo.</p>
          </Col>
        </Row>
      </Container>
  )
}

export default Experience;