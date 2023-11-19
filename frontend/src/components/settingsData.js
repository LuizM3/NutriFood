import {
  Button,
  Row,
  Container,
  Col,
  ListGroup,
  ListGroupItem,
  Figure,
  Form,
  Card,
  Offcanvas,
  Badge,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { format } from "date-fns";
const SettingsConst = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [emailNovo, setEmailNovo] = useState("");
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("id");
  const [suggestions, setSuggestions] = useState([]);
  const [dataCriacao, setDataCriacao] = useState([]);
  const [edit, setEdit] = useState(false);
  const [selecionaSugestaoIndex, setSelecionaSugestaoIndex] = useState(null);
  const [salvar, setSalvar] = useState("");
  const [conteudo, setConteudo] = useState("");

  const [characterLimit] = useState(200);
  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    } else if(id == null) {
      navigate("/login")
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:9000/getSuggestions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.message === "OK") {
              setSuggestions(data.suggestions);
              setDataCriacao(data.data_criacao);
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
    }
  }, [emailNovo, id]);

  const handleEdit = (index) => {
    setSelecionaSugestaoIndex(index);
    setEdit(true);
    setConteudo(suggestions[index]);
  };

  const handleSalvar = async (e) => {
    if(salvar == ""){
      setEdit(false);
      return;
    }
    console.log(salvar);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/editSuggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ salvar, id, conteudo }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === "SALVO") {
          window.location.reload();
        } else {
          console.log("Error");
        }
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
    setEdit(false);
  };
  const handleDelete = () => {};

  const isResponsive = useMediaQuery({ query: "(max-width: 768px)" });
  const arrow = require("../assets/images/left-arrow.png");

  return (
    <>
      <div className="bg-light div-config d-flex justify-content-center align-items-center">
        <Container className="cont-resp">
          <Row className="w-100 overflow-hidden pb-0 d-flex justify-content-center row-response">
            {isResponsive ? (
              <div className="tab-response p-0">
                {" "}
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Configurações</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <ListGroup className="mb-3 tab-resp d-flex p-0 pt-1">
                      <ListGroupItem>
                        <Link to="/user/settings">
                          <Button>Conta do Usuário</Button>
                        </Link>
                      </ListGroupItem>
                      <ListGroupItem>
                        <Link to="/user/settings-security">
                          <Button>Segurança e Privacidade</Button>
                        </Link>
                      </ListGroupItem>
                      <ListGroupItem>
                        <Link to="/user/settings-data">
                          <Button>Coleta de Dados</Button>
                        </Link>
                      </ListGroupItem>
                    </ListGroup>
                  </Offcanvas.Body>
                </Offcanvas>
                <Row>
                  <Col sm={8} xs={8} className="d-flex align-items-center mt-3">
                    <Link
                      to="/"
                      className="text-decoration-none back d-flex align-items-center"
                    >
                      <Figure className="d-flex align-items-center m-0 p-0">
                        <Figure.Image width={25} height={25} src={arrow} />{" "}
                        <Figure.Caption></Figure.Caption>
                      </Figure>
                      Voltar à página principal{" "}
                    </Link>
                  </Col>
                  <Col
                    sm={4}
                    xs={4}
                    className="off-canv d-flex align-items-center mt-3 justify-content-end"
                  >
                    <Button variant="primary" onClick={handleShow}>
                      <ion-icon name="menu"></ion-icon>
                    </Button>
                  </Col>
                </Row>
              </div>
            ) : (
              <Col lg={4} xs={4}>
                <div>
                  <Link to="/" className="text-decoration-none back">
                    <Figure>
                      <Figure.Image width={25} height={25} src={arrow} />{" "}
                      <Figure.Caption></Figure.Caption>
                    </Figure>
                    Voltar à página principal{" "}
                  </Link>
                </div>
                <ListGroup>
                  <ListGroupItem>
                    <Link to="/user/settings">
                      <Button className="bg-transparent border-0 text-black w-100">
                        <Row className="d-flex align-items-center">
                          <Col
                            md={4}
                            xs={4}
                            className="d-flex justify-content-center"
                          >
                            <ion-icon name="person-sharp"></ion-icon>
                          </Col>
                          <Col
                            md={8}
                            xs={8}
                            className="d-flex justify-content-center"
                          >
                            Conta do Usuário
                          </Col>
                        </Row>
                      </Button>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/user/settings-security">
                      <Button className="bg-transparent border-0 text-black w-100">
                        <Row className="d-flex align-items-center">
                          <Col
                            md={4}
                            xs={4}
                            className="d-flex justify-content-center"
                          >
                            <ion-icon name="lock-open-sharp"></ion-icon>
                          </Col>
                          <Col
                            md={8}
                            xs={8}
                            className="d-flex justify-content-center"
                          >
                            Segurança e Privacidade
                          </Col>
                        </Row>
                      </Button>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/user/settings-data">
                      <Button className="bg-transparent border-0 text-black w-100">
                        <Row className="d-flex align-items-center">
                          <Col
                            md={4}
                            xs={4}
                            className="d-flex justify-content-center"
                          >
                            <ion-icon name="server-sharp"></ion-icon>
                          </Col>
                          <Col
                            md={8}
                            xs={8}
                            className="d-flex justify-content-center"
                          >
                            Coleta de Dados
                          </Col>
                        </Row>
                      </Button>
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            )}

            <Col
              lg={8}
              xs={12}
              md={8}
              className="cont-config2 overflow-scroll border bg-white"
            >
              <div className="">
                <div className="div-pattern">
                  <h2>Configurações de Dados</h2>
                  <p>
                    Bem-vindo à seção de configurações de dados. Aqui você pode
                    gerenciar como os dados são coletados, armazenados e
                    utilizados em sua conta.
                  </p>
                  <h3>Preferências de Coleta de Dados</h3>

                  <p>
                    Escolha suas preferências em relação à coleta de dados,
                    decidindo quais informações deseja compartilhar.
                  </p>
                  <Form>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Anonimato de avaliação"
                    />
                  </Form>
                  <h3>Histórico de Avaliações</h3>
                  <p>
                    Confira abaixo seu histórico de avaliações, você poderá ver
                    suas avaliações já feitas.
                  </p>
                  <h3>Histórico de Sugestões</h3>
                  <Row className="suges-row pt-3 pb-3">
                    <Col className="overflow-scroll h-100 suges-col p-2 pt-0">
                      <ListGroup className="m-0 p-0">
                        {suggestions.map((suggestion, index) => {
                          const dataFormatada = format(
                            new Date(dataCriacao[index]),
                            "dd/MM/yyyy"
                          );
                          return (
                            <Card key={index} className="m-2">
                              <Card.Title className="p-0 mb-1 m-0">
                                <Row className="p-2">
                                  <Col>
                                    Sugestão <span>#{index + 1}</span>
                                  </Col>

                                  <Col className="align-items-center justify-content-end d-flex lixeira-lapis gap-2">
                                    <Button
                                      className="align-items-center justify-content-center btn-pencil"
                                      onClick={() => handleEdit(index)}
                                    >
                                      <ion-icon name="pencil"></ion-icon>
                                    </Button>
                                    <Button
                                      className="align-items-center justify-content-center btn-trash"
                                      onClick={() => handleDelete(index)}
                                    >
                                      <ion-icon name="trash"></ion-icon>
                                    </Button>
                                  </Col>
                                </Row>
                              </Card.Title>

                              <Card.Subtitle className="p-2 pt-0 pb-0 text-muted align-self-start">
                                {dataFormatada}
                              </Card.Subtitle>
                              <Card.Body className="pt-0 pb-0 p-2 m-0">
                                {edit && selecionaSugestaoIndex === index ? (
                                  <>
                                    <Form onSubmit={handleSalvar} className="formulario-card">
                                      <Form.Control
                                        as="textarea"
                                        defaultValue={suggestion}
                                        style={{ height: "100px" }}
                                        value={salvar}
                                        maxLength={200}
                                        isInvalid={
                                          salvar.length > characterLimit
                                        }
                                        onChange={(e) =>
                                          setSalvar(e.target.value)
                                        }
                                      />
                                      <Row className="p-2">
                                        <Col>
                                          <Badge
                                            className="mt-3"
                                            bg={`${
                                              salvar.length > characterLimit
                                                ? "danger"
                                                : "secondary"
                                            }`}
                                          >
                                            {salvar.length}/{characterLimit}
                                          </Badge>
                                        </Col>
                                        <Col className="d-flex align-items-center justify-content-end">
                                          <Button type="submit" className="h-100 bt-sub">Salvar</Button>
                                        </Col>
                                      </Row>
                                    </Form>
                                  </>
                                ) : (
                                  <span>{suggestion}</span>
                                )}
                              </Card.Body>
                            </Card>
                          );
                        })}
                      </ListGroup>
                    </Col>
                  </Row>

                  <p>
                    Confira abaixo seu histórico se sugestões, você poderá ver
                    suas sugestões já feitas.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SettingsConst;
