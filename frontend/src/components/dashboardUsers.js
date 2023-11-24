import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/dashboard.scss";
import Grafico from "../service/graficos/apresentacao";
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

import GraficoApresentacao from "../service/graficos/review/apresentacao.js";
import GraficoAtendimento from "../service/graficos/review/atendimento.js";
import GraficoHigiene from "../service/graficos/review/higiene.js";
import GraficoSaborDaRefeicao from "../service/graficos/review/saborDaRefeicao.js";
import GraficoSaborDaSobremesa from "../service/graficos/review/saborDaSobremesa.js";
import GraficoSaborDoSuco from "../service/graficos/review/saborDoSuco.js";
import GraficoTemperaturaDoAlimento from "../service/graficos/review/temperaturaDoAlimento.js";
import GraficoTemperaturaDoAmbiente from "../service/graficos/temperaturaDoAmbiente.js";
import GraficoTempoDeEspera from "../service/graficos/review/tempoDeEspera.js";
import GraficoVariedade from "../service/graficos/review/variedade.js";

const logo = require("../assets/images/logo.png");
const avatar = require("../assets/images/avatar.png");

const Sidebar = () => {

  const [vinculado, setVinculoAoIfes] = useState([]);
  const [cafeDaManha, setCafeDaManha] = useState([]);
  const [almoco, setAlmoco] = useState([]);
  const [lancheDaTarde, setLancheDaTarde] = useState([]);
  const [jantar, setJantar] = useState([]);
  const [vegetariano, setVegetariano] = useState([]);


  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const handleShow = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    navigate("/");
  };

  useEffect(() => {
    if (id != 1) {
      navigate("/");
    }
  }, []);

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
              <Link to="/dashboard" className="text-decoration-none w-100">
                <Button className="w-100">
                  <Row>
                    <Col md={2}>
                      <ion-icon name="stats-chart"></ion-icon>
                    </Col>
                    <Col md={2}>Estatísticas</Col>
                  </Row>
                </Button>
              </Link>
              <Link to="" className="text-decoration-none w-100 active-sidebar">
                <Button className="w-100">
                  <Row>
                    <Col md={2}>
                      <ion-icon name="people"></ion-icon>
                    </Col>
                    <Col md={2}>Usuários</Col>
                  </Row>
                </Button>
              </Link>
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
              <Button onClick={handleShow}>
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
                <Row className="m-0 p-0">
                  <Col>
                    <Card className="card-top-1">
                      <Card.Body>
                        <Row>
                          <Col
                            md={4}
                            className="d-flex align-items-center justify-content-center"
                          >
                            <ion-icon name="thumbs-up-sharp"></ion-icon>
                          </Col>
                          <Col md={6} className="d-flex align-items-center">
                            Avaliações boas
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                            {}
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-top-2">
                      <Card.Body>
                        <Row>
                          <Col
                            md={4}
                            className="d-flex align-items-center justify-content-center"
                          >
                            <ion-icon name="thumbs-down-sharp"></ion-icon>
                          </Col>
                          <Col md={6} className="d-flex align-items-center">
                            Avaliações ruins
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                            10
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="card-top-3">
                      <Card.Body>
                        <Row>
                          <Col
                            md={4}
                            className="d-flex align-items-center justify-content-center"
                          >
                            <ion-icon name="analytics-sharp"></ion-icon>
                          </Col>
                          <Col md={6} className="d-flex align-items-center">
                            Total de avaliações
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                            {}
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Stack gap={4}>
                    <Row className="p-0 m-0">
                      <Col md={8}>
                        <Card className="h-100">
                          <Card.Header>Apresentação</Card.Header>
                          <Card.Body>
                            <GraficoApresentacao />
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={4}>
                        <Stack gap={4}>
                          <Card>
                            <Card.Header>Variedade</Card.Header>
                            <Card.Body>
                              <GraficoVariedade />
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Header>Sabor da Refeição</Card.Header>
                            <Card.Body>
                              <GraficoSaborDaRefeicao />
                            </Card.Body>
                          </Card>
                        </Stack>
                      </Col>
                    </Row>
                    <Row className="p-0 m-0">
                      <Col md={4}>
                        <Stack gap={4}>
                          <Card>
                            <Card.Header>Sabor do Suco</Card.Header>
                            <Card.Body>
                              <GraficoSaborDoSuco />
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Header>Sabor da Sobremesa</Card.Header>
                            <Card.Body>
                              <GraficoSaborDaSobremesa />
                            </Card.Body>
                          </Card>
                        </Stack>
                      </Col>
                      <Col md={8}>
                        <Card className="h-100">
                          <Card.Header>Temperatura do Alimento</Card.Header>
                          <Card.Body>
                            <GraficoTemperaturaDoAlimento />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="p-0 m-0">
                      <Col md={6}>
                        <Card>
                          <Card.Header>Higiene</Card.Header>
                          <Card.Body>
                            <GraficoHigiene />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card>
                          <Card.Header>Temperatura do Ambiente</Card.Header>
                          <Card.Body>
                            <GraficoTemperaturaDoAmbiente />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="p-0 m-0">
                      <Col md={7}>
                        <Card>
                          <Card.Header>Atendimento</Card.Header>
                          <Card.Body>
                            <GraficoAtendimento />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={5}>
                        <Card className="h-100">
                          <Card.Header>Tempo de Espera</Card.Header>
                          <Card.Body>
                            <GraficoTempoDeEspera />
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
export default Sidebar;
