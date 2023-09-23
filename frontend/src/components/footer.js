import React from "react";
import "../assets/styles/footer.scss";
import { Figure, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const logo = require("../assets/images/logo.png");
const FooterConst = () => {
  return (
    <>
      <div className="w-100 justify-content-center d-flex m-0 d-footer flex-column align-items-center text-center">
        <Container className="h-auto text-center w-100 footer m-0 p-0 pt-4 pb-4" static="bottom">
          <Row className="w-100 justify-content-center" md={4}>
            <Row md={12}>

              <Col md={12} sm={4}>
                <Row>
                  <Col md={12}>
                    <Figure id="logo-footer">
                      <Figure.Image src={logo} width={64} height={64}>

                      </Figure.Image>
                    </Figure>
                  </Col>
                  <Col md={12}> <h6>Nutrifood</h6></Col>

                </Row>

              </Col>
              <Col md={12} xs={12} sm={4}>
                <Link to="/" className="text-decoration-none" data-test="">
                  Visite o campus
                </Link>
              </Col>
              <Col md={12} xs={12} sm={4}>

                <Link to="/" className="text-decoration-none" data-test="">
                  Notícias
                </Link>
              </Col>

            </Row>
            <Row md={12}>
              <Col md={12} sm={4}><h6>Referências</h6></Col>

              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  Avaliações
                </Link>
              </Col>
              <Col md={12} xs={12} sm={2}>

                <Link to="/" className="text-decoration-none" data-test="">
                  Cardápio
                </Link>
              </Col>
              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  Sugestões
                </Link>
              </Col>
              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  Contate-nos
                </Link>
              </Col>

            </Row>

            <Row md={12}>
              <Col md={12} sm={4}><h6>Referências</h6></Col>
              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  Sobre
                </Link>
              </Col>

              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  Cadastre-se
                </Link>
              </Col>
              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  Dúvidas
                </Link>
              </Col>

              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  API
                </Link>
              </Col>
            </Row>
            <Row md={12}>

              <Col md={12} sm={4} className="comunidade"><h6>Comunidade</h6></Col>
              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  {/* <ion-icon name="logo-github"></ion-icon> */}
                  Github
                  <ion-icon name="open-outline"></ion-icon>
                </Link>
              </Col>
              <Col md={12} xs={12} sm={2}>

                <Link to="/" className="text-decoration-none" data-test="">
                  {/* <ion-icon name="logo-instagram"></ion-icon> */}
                  Instagram
                  <ion-icon name="open-outline"></ion-icon>
                </Link>
              </Col>
              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  {/* <ion-icon name="logo-facebook"></ion-icon> */}
                  Facebook
                  <ion-icon name="open-outline"></ion-icon>
                  <Col>
                  </Col>
                </Link>

              </Col>
              <Col md={12} xs={12} sm={2}>
                <Link to="/" className="text-decoration-none" data-test="">
                  {/* <ion-icon name="logo-paypal"></ion-icon> */}
                  Paypal
                  <ion-icon name="open-outline"></ion-icon>
                </Link>
              </Col>
            </Row>
            
          </Row>
          
        </Container>
        <p style={{fontSize:"small"}}>
        ©2023 Nutrifood – Todos os direitos reservados.
        </p>
      </div>

    </>
  );
};

export default FooterConst;
