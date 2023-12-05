import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Figure,
  Offcanvas,
  Row,
  Stack,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/dashboard.scss";

import { useMediaQuery } from "react-responsive";
import GraficoAlunoGraduacao from "../service/graficos/user/graficoAlunoGraduacao.js";
import GraficoAlunoMedio from "../service/graficos/user/graficoAlunoMedio.js";
import GraficoOutros from "../service/graficos/user/graficoOutros.js";
import GraficoSDT from "../service/graficos/user/graficoSDT.js";
import GraficoVegetariano from "../service/graficos/user/graficoVegetariano.js";

import userReq from "../service/requisicao/userReq.js";
const logo = require("../assets/images/logo.png");
const avatar = require("../assets/images/avatar.png");

const DashboardConst = () => {
  const [scrolling, setScrolling] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOff = () => setShow(true);
  const isResponsive = useMediaQuery({ query: "(max-width: 990px)" });
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const [quantidadeAM, setQuantidadeAM] = useState(0);
  const [quantidadeAG, setQuantidadeAG] = useState(0);
  const [quantidadeSDT, setQuantidadeSDT] = useState(0);
  const [quantidadeOutro, setQuantidadeOutro] = useState(0);
  const [quantidadeVeg, setQuantidadeVeg] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
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
    let cont = 0;

    userReq().then((Object) => {
      for (const element of Object.vinculoAoIfes) {
        switch (element) {
          case "AM":
            qtdAM++;
            break;
          case "AG":
            qtdAG++;
            break;
          case "SDT":
            qtdSDT++;
            break;
          case "Outro":
            qtdOutro++;
        }
        cont++;
        if (Object.vegetariano[cont] == "1") {
          qtdVeg++;
        }
      }
      qtd = qtdAG + qtdAM + qtdSDT + qtdOutro;
      setQuantidadeAG(qtdAG);
      setQuantidadeAM(qtdAM);
      setQuantidadeSDT(qtdSDT);
      setQuantidadeOutro(qtdOutro);
      setQuantidadeVeg(qtdVeg);
      setQuantidade(qtd);

      qtdAM = 0;
      qtdAG = 0;
      qtdSDT = 0;
      qtdOutro = 0;
      qtdVeg = 0;
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  let qtdAM = 0;
  let qtdAG = 0;
  let qtdSDT = 0;
  let qtdOutro = 0;
  let qtdVeg = 0;
  let qtd = 0;

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
                        <Button className="w-100">
                          <Row className="w-100">
                            <Col>Estatísticas</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Link
                        to="/dashboard/users"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100 active-sidebar">
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

                      <Button disabled className="bt-sub text-white">
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
                  <Button className="w-100">
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
                  <Button className="w-100 active-sidebar">
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
                <Button disabled className="bt-sub text-white">
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
              <Stack gap={5}>
                <Row className="m-0 p-0">
                  <Stack gap={2}>
                    <Stack gap={2} className="d-flex flex-row">
                      <Col className="m-0 p-0">
                        <Stack gap={2}>
                          <Col md={12}>
                            <Card className="card-top-4">
                              <Card.Body>
                                <Row className="row-resp-info">
                                  <Col
                                    md={6}
                                    lg={3}
                                    className="d-flex align-items-center justify-content-center c-2"
                                  >
                                    <ion-icon name="leaf"></ion-icon>
                                  </Col>
                                  <Row
                                    className="d-flex justify-content-center align-items-center c-1 w-50"
                                  >
                                    <Col className="d-flex justify-content-center align-items-center">
                                      <h5>Vegetarianos</h5>
                                    </Col>
                                    <Col
                                      lg={12}
                                      md={12}
                                      className="d-flex justify-content-center align-items-center c-3"
                                    >
                                      <h3>{quantidadeVeg}</h3>
                                    </Col>
                                  </Row>
                                  <Col lg={3}></Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={12}>
                            <Card className="card-top-4">
                              <Card.Body>
                                <Row className="row-resp-info">
                                  <Col
                                    lg={3}
                                    md={6}
                                    className="d-flex align-items-center justify-content-center c-2"
                                  >
                                    <ion-icon name="person"></ion-icon>
                                  </Col>
                                  <Row
                                    className="d-flex justify-content-center align-items-center c-1 w-50"
                                  >
                                    <Col className="d-flex justify-content-center align-items-center">
                                      <h5>Alunos</h5>
                                    </Col>
                                    <Col
                                      lg={12}
                                      md={12}
                                      className="d-flex justify-content-center align-items-center c-3"
                                    >
                                      <h3>{quantidadeAM}</h3>
                                    </Col>
                                  </Row>
                                  <Col lg={3}></Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col md={12}>
                            <Card className="card-top-4">
                              <Card.Body>
                                <Row className="row-resp-info">
                                  <Col
                                    lg={3}
                                    md={6}
                                    className="d-flex align-items-center justify-content-center c-2"
                                  >
                                    {/* <ion-icon name="person"></ion-icon> */}
                                    <ion-icon name="analytics"></ion-icon>
                                  </Col>
                                  <Row
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
                      <Col className="m-0 p-0">
                        <Stack gap={2}>
                          <Col md={12}>
                            <Card className="card-top-4">
                              <Card.Body>
                                <Row className="row-resp-info">
                                  <Col
                                    lg={3}
                                    md={6}
                                    className="d-flex align-items-center justify-content-center c-2"
                                  >
                                    <ion-icon name="ribbon"></ion-icon>
                                  </Col>
                                  <Row
                                    className="d-flex justify-content-center align-items-center c-1 w-50"
                                  >
                                    <Col className="d-flex justify-content-center align-items-center">
                                      <h5>Superior</h5>
                                    </Col>

                                    <Col
                                      lg={12}
                                      md={12}
                                      className="d-flex justify-content-center align-items-center c-3"
                                    >
                                      <h3>{quantidadeAG}</h3>
                                    </Col>
                                  </Row>
                                  <Col lg={3}></Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={12}>
                            <Card className="card-top-4">
                              <Card.Body>
                                <Row className="row-resp-info">
                                  <Col
                                    lg={3}
                                    md={6}
                                    className="d-flex align-items-center justify-content-center c-2"
                                  >
                                    <ion-icon name="people"></ion-icon>
                                  </Col>
                                  <Row
                                    className="d-flex justify-content-center align-items-center c-1 w-50"
                                  >
                                    <Col className="d-flex justify-content-center align-items-center">
                                      <h5>Outro</h5>
                                    </Col>
                                    <Col
                                      lg={12}
                                      md={12}
                                      className="d-flex justify-content-center align-items-center c-3"
                                    >
                                      <h3>{quantidadeOutro}</h3>
                                    </Col>
                                  </Row>
                                  <Col lg={3}></Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col md={12}>
                            <Card className="card-top-4">
                              <Card.Body>
                                <Row className="row-resp-info">
                                  <Col
                                    lg={3}
                                    md={6}
                                    className="d-flex align-items-center justify-content-center c-2"
                                  >
                                    <ion-icon name="hammer"></ion-icon>
                                  </Col>
                                  <Row
                                    className="d-flex justify-content-center align-items-center c-1 w-50"
                                  >
                                    <Col className="d-flex justify-content-center align-items-center">
                                      <h5>SDT</h5>
                                    </Col>

                                    <Col
                                      lg={12}
                                      md={12}
                                      className="d-flex justify-content-center align-items-center c-3"
                                    >
                                      <h3>{quantidadeSDT}</h3>
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
                    <Stack className="d-flex justify-content-center align-items-center"></Stack>
                  </Stack>
                </Row>
                {/* Conteudo 2 */}
                <Row>
                  <Stack gap={4}>
                    <Row className="p-0 m-0">
                      <Col md={12} lg={6}>
                        <Card className="h-100">
                          <Card.Header className="border-0">
                            Vegetariano X Geral
                          </Card.Header>
                          <Card.Body>
                            <GraficoVegetariano />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={12} lg={6} className="div-resp">
                        <Card>
                          <Card.Header className="border-0">
                            Aluno Médio X Geral
                          </Card.Header>
                          <Card.Body>
                            <GraficoAlunoMedio />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="p-0 m-0">
                      <Col md={12} lg={6}>
                        <Card>
                          <Card.Header className="border-0">
                            Outros X Geral
                          </Card.Header>
                          <Card.Body>
                            <GraficoOutros />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={12} lg={6} className="div-resp">
                        <Card>
                          <Card.Header className="border-0">
                            Aluno Graduação X Geral
                          </Card.Header>
                          <Card.Body>
                            <GraficoAlunoGraduacao />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="p-0 m-0">
                      <Col md={12} lg={12}>
                        <Card>
                          <Card.Header className="border-0">
                            SDT X Geral
                          </Card.Header>
                          <Card.Body>
                            <GraficoSDT />
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
