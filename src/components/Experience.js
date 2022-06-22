
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/logo.jpg';
import { useTranslation } from 'react-i18next';
const Experience = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="justify-content-center text-center">
        <Col md="auto">
          <img src={logo} className="img-fluid img-experience" />
        </Col>
      </Row>
      <Row className="justify-content-center text-center mb-4">
        <Col md="auto">
          <h6 className="speak-bold">{t("p1")}</h6>
          <p>{t("p2")}<br />
            {t("p3")}</p>
          <p>{t("p4")}<br />
            {t("p5")}<br />
            {t("p6")}<br />
            {t("p7")}
          </p>
          <p> {t("p8")}<br />
            {t("p9")}</p>
          <p> {t("p10")}<br />
            {t("p11")}<br />
            {t("p12")}<br />
            {t("p13")}</p>
          <div>
            <ul className="list-inline">
              <li className="list-inline-item experience-list">{t("travel")}</li>
              <li className="list-inline-item experience-list-divider">|</li>
              <li className="list-inline-item experience-list">{t("events")}</li>
              <li className="list-inline-item experience-list-divider">|</li>
              <li className="list-inline-item experience-list">{t("freeTime")}</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Experience;