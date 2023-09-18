import React from "react";
import "../assets/styles/footer.scss";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterConst = () => {
  return (
    <>
      <Navbar className="footer h-25" fixed-bottom>
        <Container>
          <Row md={4} className="m-2">
            <Col md={12}>
              <h6>Sobre</h6>
            </Col>
            <Col md={12}>
              <Link to="/" className="text-decoration-none" data-test="">
                Contate-nos
              </Link>
            </Col>

            <Col md={12}>
              <Link to="/" className="text-decoration-none" data-test="">
                Perguntas frequentes
              </Link>
            </Col>
          </Row>
          <Row md={4} className="m-2 ">
            <Col md={12}>
              <h6>Feedback</h6>
            </Col>
            <Col md={12}>
              <Link to="/" className="text-decoration-none" data-test="">
                Avaliações
              </Link>
            </Col>
            <Col md={12}>
              <Link to="/" className="text-decoration-none" data-test="">
                Sugestões
              </Link>
            </Col>
          </Row>
          <Row md={4} className="m-2">

            <Col md={12}>
              <h6>Comunidade</h6>
            </Col>
            <Col md={12}>
              <Link to="/" className="text-decoration-none" data-test="">
                Github
              </Link>
            </Col>
            <Col md={12}>
              <Link to="/" className="text-decoration-none" data-test="">
                Instagram
              </Link>
            </Col>




          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default FooterConst;
