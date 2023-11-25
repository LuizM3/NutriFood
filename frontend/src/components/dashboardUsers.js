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
} from "react-bootstrap";

import GraficoAtendimento from "../service/graficos/review/atendimento.js";
import GraficoHigiene from "../service/graficos/review/higiene.js";
import GraficoSaborDaRefeicao from "../service/graficos/review/saborDaRefeicao.js";
import GraficoSaborDaSobremesa from "../service/graficos/review/saborDaSobremesa.js";
import GraficoSaborDoSuco from "../service/graficos/review/saborDoSuco.js";
import GraficoTemperaturaDoAlimento from "../service/graficos/review/temperaturaDoAlimento.js";
import GraficoTemperaturaDoAmbiente from "../service/graficos/review/temperaturaDoAmbiente.js";
import GraficoTempoDeEspera from "../service/graficos/review/tempoDeEspera.js";
import GraficoVariedade from "../service/graficos/review/variedade.js";

import GraficoVegetariano from "../service/graficos/user/graficoVegetariano.js";
import GraficoAlunoMedio from "../service/graficos/user/graficoAlunoMedio.js";
import GraficoAlunoGraduacao from "../service/graficos/user/graficoAlunoGraduacao.js";
import GraficoSDT from "../service/graficos/user/graficoSDT.js";
import GraficoOutros from "../service/graficos/user/graficoOutros.js";

import userReq from "../service/requisicao/userReq.js";

const logo = require("../assets/images/logo.png");
const avatar = require("../assets/images/avatar.png");

const Sidebar = () => {
  const [quantidadeAM, setQuantidadeAM] = useState(0);
  const [quantidadeAG, setQuantidadeAG] = useState(0);
  const [quantidadeSDT, setQuantidadeSDT] = useState(0);
  const [quantidadeOutro, setQuantidadeOutro] = useState(0);
  const [quantidadeVeg, setQuantidadeVeg] = useState(0);

  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const handleShow = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    navigate("/");
  };

  let qtdAM = 0;
  let qtdAG = 0;
  let qtdSDT = 0;
  let qtdOutro = 0;
  let qtdVeg = 0;

  useEffect(() => {
    if (id != 1) {
      navigate("/");
    }

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
      setQuantidadeAG(qtdAG);
      setQuantidadeAM(qtdAM);
      setQuantidadeSDT(qtdSDT);
      setQuantidadeOutro(qtdOutro);
      setQuantidadeVeg(qtdVeg);

      qtdAM = 0;
      qtdAG = 0;
      qtdSDT = 0;
      qtdOutro = 0;
      qtdVeg = 0;
    });
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
              <Link to="/dashboard/users" className="text-decoration-none w-100 active-sidebar">
                <Button className="w-100">
                  <Row>
                    <Col md={2}>
                      <ion-icon name="people"></ion-icon>
                    </Col>
                    <Col md={2}>Usuários</Col>
                  </Row>
                </Button>
              </Link>
              <Link to="/dashboard/suggestions" className="text-decoration-none w-100">
                <Button className="w-100">
                  <Row>
                    <Col md={2}>
                      <ion-icon name="file-tray"></ion-icon>
                    </Col>
                    <Col md={2}>Sugestões</Col>
                  </Row>
                </Button>
              </Link>
              <Link to="/dashboard/cardapio" className="text-decoration-none w-100">
                <Button className="w-100">
                  <Row>
                    <Col md={2}>
                      <ion-icon name="restaurant"></ion-icon>
                    </Col>
                    <Col md={2}>Cardápio</Col>
                  </Row>
                </Button>
              </Link>
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
                            Vegetariano
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                            {quantidadeVeg}
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
                            Aluno Medio
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                            {quantidadeAM}
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
                            Aluno Graduação
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                            {quantidadeAG}
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
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
                            SDT
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                            {quantidadeSDT}
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
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
                            Outro
                          </Col>
                          <Col md={2} className="d-flex align-items-center">
                            {quantidadeOutro}
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
                          <Card.Header>Vegetariano x Geral</Card.Header>
                          <Card.Body>
                            <GraficoVegetariano />
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={4}>
                        <Stack gap={4}>
                          <Card>
                            <Card.Header></Card.Header>
                            <Card.Body>
                              <GraficoHigiene />
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
                          <Card.Header>Aluno Medio x Geral</Card.Header>
                          <Card.Body>
                            <GraficoAlunoMedio />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="p-0 m-0">
                      <Col md={6}>
                        <Card>
                          <Card.Header>Outros x Geral</Card.Header>
                          <Card.Body>
                            <GraficoOutros />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card>
                          <Card.Header>Aluno Graduação x Geral</Card.Header>
                          <Card.Body>
                            <GraficoAlunoGraduacao />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="p-0 m-0">
                      <Col md={7}>
                        <Card>
                          <Card.Header>SDT x Geral</Card.Header>
                          <Card.Body>
                            <GraficoSDT />
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
