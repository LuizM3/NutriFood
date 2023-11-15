import React, { useEffect, useRef } from "react";
import "../assets/styles/dashboard.scss";
import Grafico from "../graficos/apresentacao";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Stack,
  Button,
  Card,
  Figure,
} from "react-bootstrap";

const logo = require("../assets/images/logo.png");
const avatar = require("../assets/images/avatar.png");
const DashboardConst = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    }
  }, [id]);
  return (
    <>
      <Sidebar />
    </>
  );
};

const Sidebar = () => {
  return (
    <div className="dashboard">
      <Container fluid className="h-100 w-100">
        <Row className="h-100 d-flex">
          <Col md={2} className="p-3 m-0 flex-column redm gap-1 d-flex h-100">
            <Stack gap={4}>
              <Figure>
                <Figure.Image src={logo} width={64} height={64}></Figure.Image>
              </Figure>
              <Card className="card-side">
                <Card.Body>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col md={4}>
                      <Figure className="m-0">
                        <Figure.Image
                          className="fig m-0"
                          src={avatar}
                          width={64}
                          height={64}
                        ></Figure.Image>
                      </Figure>
                    </Col>
                    <Col md={8}>Administrador</Col>
                  </Row>
                </Card.Body>
              </Card>
            </Stack>
            <Stack gap={2} className="stack-bt">
              <Button>
                <Row>
                  <Col md={2}>
                    <ion-icon name="stats-chart"></ion-icon>
                  </Col>
                  <Col md={2}>Estatísticas</Col>
                </Row>
              </Button>
              <Button>
                <Row>
                  <Col md={2}>
                    <ion-icon name="people"></ion-icon>
                  </Col>
                  <Col md={2}>Usuários</Col>
                </Row>
              </Button>
              <Button>
                <Row>
                  <Col md={2}>
                    <ion-icon name="file-tray"></ion-icon>
                  </Col>
                  <Col md={2}>Sugestões</Col>
                </Row>
              </Button>
              <Button>
                <Row>
                  <Col md={2}>
                    <ion-icon name="restaurant"></ion-icon>
                  </Col>
                  <Col md={2}>Cardápio</Col>
                </Row>
              </Button>
            </Stack>
            <Stack className="align-self-end stack-log w-100">
              <Button>
                <Row className="justify-content-center align-items-center">
                  <Col md={2}>Sair</Col>
                  <Col md={2} className="d-flex align-items-center">
                    <ion-icon name="log-out-outline"></ion-icon>
                  </Col>
                </Row>
              </Button>
            </Stack>
          </Col>
          {/* Conteudo */}
          <Col className="flex-shrink-1 overflow-scroll col-dash-cont">
            <Container fluid className="w-100 p-5">
              <Stack gap={5}>
                <Row>
                  <Col>
                    <Card>
                      <Card.Body>
                        This is some text within a card body.
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        This is some text within a card body.
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Body>
                        This is some text within a card body.
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Stack gap={4}>
                    <Row className="p-0 m-0">
                      <Col md={8}>
                        <Card className="h-100">
                          <Card.Body>
                            <Grafico />
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={4}>
                        <Stack gap={4}>
                          <Card>
                            <Card.Body>
                              <Grafico />
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Body>
                              <Grafico />
                            </Card.Body>
                          </Card>
                        </Stack>
                      </Col>
                    </Row>
                    <Row className="p-0 m-0">
                      <Col md={4}>
                        <Stack gap={4}>
                          <Card>
                            <Card.Body>
                              <Grafico />
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Body>
                              <Grafico />
                            </Card.Body>
                          </Card>
                        </Stack>
                      </Col>
                      <Col md={8}>
                        <Card className="h-100">
                          <Card.Body>
                            <Grafico />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Stack>
                </Row>
              </Stack>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default DashboardConst;
