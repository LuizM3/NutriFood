import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/dashboard.scss";
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
  Offcanvas,
  ListGroup,
  Spinner,
} from "react-bootstrap";

import { format } from "date-fns";
import { useMediaQuery } from "react-responsive";
const logo = require("../assets/images/logo.png");
const avatar = require("../assets/images/avatar.png");

let listaSuggestions = [];
let listaData = [];

const DashboardConst = () => {
  const [scrolling, setScrolling] = useState(false);
  const [show, setShow] = useState(false);
  const [spin, setSpin] = useState(false);
  const handleClose = () => setShow(false);
  const handleOff = () => setShow(true);
  const isResponsive = useMediaQuery({ query: "(max-width: 990px)" });
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState("");
  const id = localStorage.getItem("id");
  const [suggestions, setSuggestions] = useState([]);
  const [dataCriacao, setDataCriacao] = useState([]);

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

  const handlePull = () => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
    }, 4000);

    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:9000/getAdminSuggestions",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        listaSuggestions = [];
        listaData = [];
        if (response.ok) {
          const data = await response.json();
          if (data.message === "FEITO") {
            for (let i = data.suggestions.length; i > 0; i--) {
              listaSuggestions.push(data.suggestions[i - 1]);
              listaData.push(data.data_criacao[i - 1]);
            }
          } else {
            console.log("error");
          }
        } else {
          console.log("Erro na requisição");
        }
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
      }
    };
    fetchData();
  };
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
                            {/* <Col>
                              <ion-icon name="stats-chart"></ion-icon>
                            </Col> */}
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
                            {/* <Col md={2}>
                              <ion-icon name="people"></ion-icon>
                            </Col> */}
                            <Col>Usuários</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Link
                        to="/dashboard/suggestions"
                        className="text-decoration-none w-100"
                      >
                        <Button className="w-100 active-sidebar">
                          <Row className="w-100">
                            {/* <Col md={2}>
                              <ion-icon name="file-tray"></ion-icon>
                            </Col> */}
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
                            {/* <Col md={2}>
                              <ion-icon name="restaurant"></ion-icon>
                            </Col> */}
                            <Col>Cardápio</Col>
                          </Row>
                        </Button>
                      </Link>
                      <Button
                        onClick={handlePull}
                        className="bt-sub text-white"
                      >
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
                  <Button className="w-100 active-sidebar">
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
                <Button onClick={handlePull} className="bt-sub text-white">
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
                <h2>Listagem de sugestões</h2>
                <Row className="admin-suges-row">
                  <Col className="overflow-scroll h-100 suges-col p-2 pt-0">
                    <ListGroup className="m-0 p-0">
                      {listaSuggestions.map((suggestion, index) => {
                        const dataFormatada = format(
                          new Date(listaData[index]),
                          "dd/MM/yyyy"
                        );
                        return (
                          <Col md={12}>
                            <Card key={index} className="m-2">
                              <Card.Header className="p-0 mb-1 m-0 border-0">
                                <Row className="p-2">
                                  <Col>
                                    Sugestão{" "}
                                    <span>#{listaData.length - index}</span>
                                  </Col>
                                  <Col className="d-flex justify-content-end text-muted">
                                    {dataFormatada}
                                  </Col>
                                </Row>
                              </Card.Header>

                              <Card.Body
                                className="pt-0 pb-0 p-2 m-0"
                                style={{ minHeight: "100px" }}
                              >
                                <span>{suggestion}</span>
                              </Card.Body>
                            </Card>
                          </Col>
                        );
                      })}
                    </ListGroup>
                  </Col>
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
