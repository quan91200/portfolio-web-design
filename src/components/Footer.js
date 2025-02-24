import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/linkedin.svg"
import navIcon2 from "../assets/img/facebook.svg"
import navIcon3 from "../assets/img/github.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/cobham-nguyen/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/people/Dev-Cobham/pfbid02qh2sHtYMoq5M7omWGbqYbuDYUbydtakw9iNKpmFzZGM86B4Kw1b4MetHUc2EWPzMl/?mibextid=wwXIfr&rdid=KP0GMluKSicUkpLZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BE4opkm82%2F%3Fmibextid%3DwwXIfr"
                target="_blank" rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://github.com/quan91200" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
