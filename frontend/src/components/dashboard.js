import React, { useEffect, useState } from "react";
import "../assets/styles/dashboard.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Stack,
  Button,
  Card,
  Figure,
  Offcanvas,
} from "react-bootstrap";

import { useMediaQuery } from "react-responsive";
import GraficoApresentacao from "../service/graficos/review/apresentacao.js";
import GraficoAtendimento from "../service/graficos/review/atendimento.js";
import GraficoHigiene from "../service/graficos/review/higiene.js";
import GraficoSaborDaRefeicao from "../service/graficos/review/saborDaRefeicao.js";
import GraficoSaborDaSobremesa from "../service/graficos/review/saborDaSobremesa.js";
import GraficoSaborDoSuco from "../service/graficos/review/saborDoSuco.js";
import GraficoTemperaturaDoAlimento from "../service/graficos/review/temperaturaDoAlimento.js";
import GraficoTemperaturaDoAmbiente from "../service/graficos/review/temperaturaDoAmbiente.js";
import GraficoTempoDeEspera from "../service/graficos/review/tempoDeEspera.js";
import GraficoVariedade from "../service/graficos/review/variedade.js";

import review from "../service/requisicao/reviewReq.js";

const logo = require("../assets/images/logo.png");
const avatar = require("../assets/images/avatar.png");

const DashboardConst = () => {
  const [scrolling, setScrolling] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOff = () => setShow(true);
  const isResponsive = useMediaQuery({ query: "(max-width: 990px)" });
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState("");
  const [boasAvaliacoes, setBoasAvaliacoes] = useState("");
  const [graph, setGraph] = useState(false);
  const [masAvaliacoes, setMasAvaliacoes] = useState("");
  const id = localStorage.getItem("id");
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
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);
  const showGraph = () => {
    setGraph(true);
  };
  const vetMedia = [];

  review().then((Objeto) => {
    setQuantidade(Objeto.length);
    for (const element of Objeto) {
      let soma = 0;
      soma += Number(element.apresentacao);
      soma += Number(element.variedade);
      soma += Number(element.saborDaRefeicao);
      soma += Number(element.saborDoSuco);
      soma += Number(element.saborDaSobremesa);
      soma += Number(element.temperaturaDoAlimento);
      soma += Number(element.atendimento);
      soma += Number(element.higiene);
      soma += Number(element.temperaturaDoAlimento);
      soma += Number(element.tempoDeEspera);
      soma = soma / 10;
      vetMedia.push(soma);
    }

    let boas = 0;
    let ruins = 0;
    for (const element of vetMedia) {
      if (element < 3) {
        ruins += 1;
      } else {
        boas += 1;
      }
    }
    setBoasAvaliacoes(boas);
    setMasAvaliacoes(ruins);
  });

  //obter média das reviews

  return (
    <div className="dashboard">
      <Container fluid className="h-100 w-100">
        <Row className="h-100 d-flex">
          {isResponsive ? (
            <Container
              className={`dashboard w-100 cont-nv ${
                scrolling ? "scrolled" : ""
              }`}
              // className="w-100 cont-nv"
            >
              <Row className="w-100 d-flex align-items-center rr">
                <Col className="h-100 d-flex justify-content-center align-items-center">
                  <Button
                    variant="primary"
                    onClick={handleOff}
                    className="off-btn"
                  >
                    <ion-icon name="menu-outline"></ion-icon>
                  </Button>
                </Col>
                <Col className="h-100 d-flex justify-content-center align-items-center">
                  <Figure className="m-0 p-0">
                    <Figure.Image
                      className="m-0 p-0"
                      src={logo}
                      width={64}
                      height={64}
                    ></Figure.Image>
                  </Figure>
                </Col>
                <Col></Col>
              </Row>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <Figure>
                      <Figure.Image
                        src={logo}
                        width={64}
                        height={64}
                      ></Figure.Image>
                    </Figure>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Col
                    lg={2}
                    className="p-3 m-0 flex-column redm gap-1 d-flex h-100"
                  >
                    <Stack gap={4}>
                      <Card className="card-side">
                        <Card.Body>
                          <Row className="d-flex justify-content-center align-items-center">
                            <Col xs={4}>
                              <Figure className="m-0 w-100 d-flex justify-content-center">
                                <Figure.Image
                                  className="fig m-0"
                                  src={avatar}
                                  width={64}
                                  height={64}
                                ></Figure.Image>
                              </Figure>
                            </Col>
                            <Col className="d-flex justify-content-center">
                              Administrador
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Stack>
                    <Stack gap={2} className="stack-bt">
                      <Link
                        to="/dashboard"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100 active-sidebar">
                          <Row className="w-100">
                            <Col>Estatísticas</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Link
                        to="/dashboard/users"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100">
                          <Row className="w-100">
                            <Col>Usuários</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Link
                        to="/dashboard/suggestions"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100">
                          <Row className="w-100">
                            <Col>Sugestões</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Link
                        to="/dashboard/cardapio"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100">
                          <Row className="w-100">
                            <Col>Cardápio</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Button onClick={showGraph} className="bt-sub text-white">
                        <Row className="w-100 m-0 p-0">
                          <Col className="d-flex justify-content-center align-items-center">
                            Atualizar
                          </Col>
                        </Row>
                      </Button>
                    </Stack>
                    <Stack className="align-self-end stack-log w-100">
                      <Button onClick={handleShow}>
                        <Row className="justify-content-center align-items-center">
                          <Col></Col>
                          <Col></Col>
                          <Col>Sair</Col>
                          <Col className="d-flex align-items-center">
                            <ion-icon name="log-out-outline"></ion-icon>
                          </Col>
                          <Col></Col>
                          <Col></Col>
                        </Row>
                      </Button>
                    </Stack>
                  </Col>
                </Offcanvas.Body>
              </Offcanvas>
            </Container>
          ) : (
            <Col lg={2} className="p-3 m-0 flex-column redm gap-1 d-flex h-100">
              <Stack gap={4}>
                <Figure>
                  <Figure.Image
                    src={logo}
                    width={64}
                    height={64}
                  ></Figure.Image>
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
                  <Button className="w-100 active-sidebar">
                    <Row>
                      <Col md={2}>
                        <ion-icon name="stats-chart"></ion-icon>
                      </Col>
                      <Col md={2}>Estatísticas</Col>
                    </Row>
                  </Button>
                </Link>
                <Link
                  to="/dashboard/users"
                  className="text-decoration-none w-100"
                >
                  <Button className="w-100">
                    <Row>
                      <Col md={2}>
                        <ion-icon name="people"></ion-icon>
                      </Col>
                      <Col md={2}>Usuários</Col>
                    </Row>
                  </Button>
                </Link>
                <Link
                  to="/dashboard/suggestions"
                  className="text-decoration-none w-100"
                >
                  <Button className="w-100">
                    <Row>
                      <Col md={2}>
                        <ion-icon name="file-tray"></ion-icon>
                      </Col>
                      <Col md={2}>Sugestões</Col>
                    </Row>
                  </Button>
                </Link>
                <Link
                  to="/dashboard/cardapio"
                  className="text-decoration-none w-100"
                >
                  <Button className="w-100">
                    <Row>
                      <Col md={2}>
                        <ion-icon name="restaurant"></ion-icon>
                      </Col>
                      <Col md={2}>Cardápio</Col>
                    </Row>
                  </Button>
                </Link>
                <Button onClick={showGraph} className="bt-sub text-white">
                  <Row className="w-100 m-0 p-0">
                    <Col className="d-flex justify-content-center align-items-center">
                      Atualizar
                    </Col>
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
          )}

          {/* Conteudo */}
          <Col className="flex-shrink-1 overflow-scroll col-dash-cont">
            <Container fluid className="w-100 p-5">
              {graph ? (
                <Stack gap={5}>
                  <Row className="m-0 p-0">
                    <Stack gap={2}>
                      <Stack gap={2} className="d-flex flex-row">
                        <Col className="m-0 p-0">
                          <Stack gap={2}>
                            <Col md={12}>
                              <Card className="card-top-1">
                                <Card.Body>
                                  <Row className="row-resp-info">
                                    <Col
                                      md={6}
                                      lg={3}
                                      className="d-flex align-items-center justify-content-center c-2"
                                    >
                                      <ion-icon name="thumbs-up"></ion-icon>
                                    </Col>
                                    <Row
                                      // lg={4}
                                      // md={12}
                                      className="d-flex justify-content-center align-items-center c-1 w-50"
                                    >
                                      <Col className="d-flex justify-content-center align-items-center">
                                        <h5>Positivas</h5>
                                      </Col>
                                      <Col
                                        lg={12}
                                        md={12}
                                        className="d-flex justify-content-center align-items-center c-3"
                                      >
                                        <h3>{boasAvaliacoes}</h3>
                                      </Col>
                                    </Row>
                                    <Col lg={3}></Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Stack>
                        </Col>
                        <Col className="m-0 p-0">
                          <Stack gap={2}>
                            <Col md={12}>
                              <Card className="card-top-2">
                                <Card.Body>
                                  <Row className="row-resp-info">
                                    <Col
                                      md={6}
                                      lg={3}
                                      className="d-flex align-items-center justify-content-center c-2"
                                    >
                                      <ion-icon name="thumbs-down"></ion-icon>
                                    </Col>
                                    <Row
                                      // lg={4}
                                      // md={12}
                                      className="d-flex justify-content-center align-items-center c-1 w-50"
                                    >
                                      <Col className="d-flex justify-content-center align-items-center">
                                        <h5>Negativas</h5>
                                      </Col>
                                      <Col
                                        lg={12}
                                        md={12}
                                        className="d-flex justify-content-center align-items-center c-3"
                                      >
                                        <h3>{masAvaliacoes}</h3>
                                      </Col>
                                    </Row>
                                    <Col lg={3}></Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Stack>
                        </Col>
                      </Stack>
                      <Stack className="d-flex justify-content-center align-items-center">
                        <Col className="m-0 p-0 w-100">
                          <Stack
                            gap={2}
                            className="d-flex justify-content-center align-items-center"
                          >
                            <Col lg={6} xs={12}>
                              <Card className="card-top-3">
                                <Card.Body>
                                  <Row className="row-resp-info">
                                    <Col
                                      lg={3}
                                      md={6}
                                      className="d-flex align-items-center justify-content-center c-2"
                                    >
                                      {/* <ion-icon name="person"></ion-icon> */}
                                      <ion-icon name="stats-chart"></ion-icon>
                                    </Col>
                                    <Row
                                      // lg={6}
                                      // md={12}
                                      className="d-flex justify-content-center align-items-center c-1 w-50"
                                    >
                                      <Col className="d-flex justify-content-center align-items-center">
                                        <h5>Total</h5>
                                      </Col>

                                      <Col
                                        lg={12}
                                        md={12}
                                        className="d-flex justify-content-center align-items-center c-3"
                                      >
                                        <h3>{quantidade}</h3>
                                      </Col>
                                    </Row>
                                    <Col lg={3}></Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Stack>
                        </Col>
                      </Stack>
                    </Stack>
                  </Row>
                  <Row>
                    <Stack gap={4}>
                      <Row className="p-0 m-0">
                        {/* <Stack> */}
                        <Col md={12} lg={8}>
                          <Card className="h-100">
                            <Card.Header className="border-0">
                              Apresentação
                            </Card.Header>
                            <Card.Body>
                              <GraficoApresentacao />
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={12} lg={4} className="div-resp">
                          <Stack gap={4}>
                            <Card>
                              <Card.Header className="border-0">
                                Variedade
                              </Card.Header>
                              <Card.Body>
                                <GraficoVariedade />
                              </Card.Body>
                            </Card>
                            <Card>
                              <Card.Header className="border-0">
                                Sabor da Refeição
                              </Card.Header>
                              <Card.Body>
                                <GraficoSaborDaRefeicao />
                              </Card.Body>
                            </Card>
                          </Stack>
                        </Col>
                        {/* </Stack> */}
                      </Row>
                      <Row className="p-0 m-0">
                        {/* <Stack gap={4}> */}
                        <Col md={12} lg={4}>
                          <Stack gap={4}>
                            <Card>
                              <Card.Header className="border-0">
                                Sabor do Suco
                              </Card.Header>
                              <Card.Body>
                                <GraficoSaborDoSuco />
                              </Card.Body>
                            </Card>
                            <Card>
                              <Card.Header className="border-0">
                                Sabor da Sobremesa
                              </Card.Header>
                              <Card.Body>
                                <GraficoSaborDaSobremesa />
                              </Card.Body>
                            </Card>
                          </Stack>
                        </Col>
                        <Col className="div-resp" md={12} lg={8}>
                          <Card className="h-100">
                            <Card.Header className="border-0">
                              Temperatura do Alimento
                            </Card.Header>
                            <Card.Body>
                              <GraficoTemperaturaDoAlimento />
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="p-0 m-0">
                        <Col md={6} lg={6}>
                          <Card>
                            <Card.Header className="border-0">
                              Higiene
                            </Card.Header>
                            <Card.Body>
                              <GraficoHigiene />
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col md={6} lg={6} className="div-resp">
                          <Card>
                            <Card.Header className="border-0">
                              Temperatura do Ambiente
                            </Card.Header>
                            <Card.Body>
                              <GraficoTemperaturaDoAmbiente />
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="p-0 m-0">
                        <Col lg={7} md={6}>
                          <Card>
                            <Card.Header className="border-0">
                              Atendimento
                            </Card.Header>
                            <Card.Body>
                              <GraficoAtendimento />
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col lg={5} md={6} className="div-resp">
                          <Card className="h-100">
                            <Card.Header className="border-0">
                              Tempo de Espera
                            </Card.Header>
                            <Card.Body>
                              <GraficoTempoDeEspera />
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Stack>
                  </Row>
                </Stack>
              ) : (
                <></>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardConst;
