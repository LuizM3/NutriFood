import React from "react";
import { Form, Row, Container, Col, Button, FloatingLabel } from "react-bootstrap";
import "../assets/styles/contact.scss";
import { Link } from "react-router-dom";
const AboutConst = () => {

  return (
    <>
      <div id="div-c">
        <Container>
          <section>
            <Row>

              <Col sm={12} md={4} className="order-flex">
                <Row>
                  <Row className="p-0 t-div mt-2">
                    <Col md={12} className="d-flex justify-content-center">

                      <Row className="w-75">
                        <h1 className="p-0 m-1">Contate-nos</h1>
                      </Row>
                    </Col>
                    <Col className="d-flex justify-content-center">

                      <Row className="w-75">
                        <p className="p-0 m-1">Venha aqui para sla</p>
                      </Row>
                    </Col>
                  </Row>
                </Row>

                <Row id="d-r">
                  <Row>
                    <Row className="r-r">
                      <Col md={4} xs={2} className="c-col">
                        <div>
                          <ion-icon name="location"></ion-icon>
                        </div>
                      </Col>
                      <Col md={8} xs={10} className="">
                        <Link to="https://maps.app.goo.gl/BQ8z8Rw6EkLQN9iS8" target="blank">Rodovia ES-080, Km 93 s/n, Santa Teresa - ES, 29660-000
                        </Link>

                      </Col>
                    </Row>

                    <Row className="r-r">
                      <Col md={4} xs={2} className="c-col">
                        <div>
                          <ion-icon name="call"></ion-icon>
                        </div>
                      </Col>
                      <Col md={8} xs={10} className="" >

                        <Link to="" target="blank">
                          (27) 3259-7878
                        </Link>
                      </Col>
                    </Row>
                    <Row className="r-r">
                      <Col md={4} xs={2} className="c-col">
                        <div>
                          <ion-icon name="paper-plane"></ion-icon>
                        </div>
                      </Col>
                      <Col md={8} xs={10} className="">
                        <Link target="blank">

                          suporte@ifes.edu
                        </Link>
                      </Col>
                    </Row>
                    <Row className="r-r">
                      <Col md={4} xs={2} className="c-col">
                        <div>
                          <ion-icon name="earth"></ion-icon>
                        </div>
                      </Col>
                      <Col md={8} xs={10} className="">
                        <Link to="" target="blank">
                          www.ifes.edu.br
                        </Link>
                      </Col>
                    </Row>

                  </Row>
                </Row>

              </Col>
              <Col sm={12} md={8} className="col-c order-flex-2">
                <Row className="mb-3 mt-2">

                  <h1>Contate-nos</h1>
                </Row>
                <Row className="mb-3" md={10}>
                  <Form>
                    <Row className="mb-3">

                      <Form.Group as={Col} controlId="formGridName" md={7}>


                        <FloatingLabel
                          controlId="floating"
                          label="Nome completo"

                        > <Form.Control type="name" placeholder="Nome completo" /></FloatingLabel>

                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email"

                        ><Form.Control type="email" placeholder="Email" /></FloatingLabel>

                      </Form.Group>
                    </Row>

                    <Form.Group as={Col} className="mb-3" controlId="formGridText">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Assunto"

                      >  <Form.Control placeholder="Assunto"
                        /></FloatingLabel>


                    </Form.Group>

                    <Form.Group className="mb-3" as={Col} controlId="formGridAddress2">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Mensagem"

                      >  <Form.Control
                          as="textarea"
                          placeholder="Mensagem"
                          style={{ height: '100px' }}
                        /></FloatingLabel>


                    </Form.Group>


                    <Form.Group className="w-100 d-flex justify-content-center">

                      <Button variant="primary" type="submit" className="w-50">
                        Submit
                      </Button>

                    </Form.Group>
                  </Form>
                </Row>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
};

export default AboutConst;
