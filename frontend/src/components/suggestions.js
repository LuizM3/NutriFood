import React, { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Container,
  Button,
  Alert,
  ListGroup,
  ListGroupItem,
  Figure,
  Badge,
} from "react-bootstrap";
import "../assets/styles/suggestions.scss";
import Filter from "bad-words";
import { Link, useNavigate } from "react-router-dom";
const SuggestionsConst = () => {
  const arrow = require("../assets/images/left-arrow.png");
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [showCont, setShowCont] = useState("");
  const [showAdmin, setShowAdmin] = useState("");
  const navigate = useNavigate();
  const [characterLimit] = useState(200);
  
  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    } else if (token && id != 1) {
      setShowCont(true);
    }
  }, [id]);
  const [suggestion, setSuggestion] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (suggestion === "") {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 5000);
      return;
    }

    // filtro
    const filter = new Filter();

    // Verificando se a sugestão contém linguagem imprópria
    if (filter.isProfane(suggestion)) {
      // Se contiver linguagem imprópria, mostre o alert
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      console.log("Linguagem imprópria");
    } else {
      // Aqui,enviar a sugestão para o backend
      const idUsuario = localStorage.getItem("id");

      const response = await fetch("http://localhost:9000/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ suggestion, idUsuario }),
      });

      if (response) {
        setShowAlertSuccess(true);
        setTimeout(() => {
          setShowAlertSuccess(false);
        }, 5000);
        console.log("Sucesso em enviar sugestão");
        window.location.reload();
      } else {
        alert("Algo deu errado");
      }
    }
  };

  return (
    <>
      <Row className="position-fixed alert-row">
        {showAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setShowAlert(false)}
          >
            Linguagem imprópria detectada!
          </Alert>
        )}{" "}
        {showAlertSuccess && (
          <Alert
            variant="success"
            className="align-items-center d-flex fade"
            onClose={() => setShowAlertSuccess(false)}
          >
            Sugestão enviada com sucesso!
          </Alert>
        )}
        {showErrorAlert && (
          <Alert
            variant="danger"
            className="align-items-center d-flex fade"
            onClose={() => setErrorAlert(false)}
          >
            Erro ao enviar sugestão
          </Alert>
        )}
      </Row>
      <Container className="mb-5 s-container justify-content-start align-items-center d-flex flex-column">
        {showCont ? (
          <Row
            className="mt-5 d-flex justify-content-center align-items-center text-center w-100"
            md={12}
          >
            <Col
              lg={8}
              md={12}
              xl={6}
              className="d-flex flex-column align-items-center w-100"
            >
              <h2>Coleta de sugestões</h2>
              <Form className="m-0 formulario-card" onSubmit={handleSubmit}>
                <Row className="f-row h-100">
                  <Col md={6} className="mb-3" xs={12}>
                    <ListGroup className="text-start">
                      <ListGroupItem>
                        1 - Quais pontos você acha que precisam ser melhorados
                        para aumentar a sua satisfação com as refeições do RI?
                      </ListGroupItem>
                      <ListGroupItem>
                        2 - Você tem alguma sugestão para obter melhorias
                        propostas na questão anterior?
                      </ListGroupItem>
                      <ListGroupItem>
                        3 - Qual o ponto positivo do restaurante que você
                        destacaria?
                      </ListGroupItem>
                      <ListGroupItem>
                        4 - Qual a sua preparação preferida do almoço/jantar?
                      </ListGroupItem>
                      <ListGroupItem>
                        5 - Qual sua preparação do café da manhã/lanche da
                        tarde?
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md={6} xs={12} className="mb-3">
                    <Form.Group className="h-75">
                      <Form.Control
                        as="textarea"
                        placeholder="Escreva aqui"
                        className="h-75"
                        maxLength={200}
                        onChange={handleSuggestionChange}
                        value={suggestion}
                        isInvalid={suggestion.length > characterLimit}
                      />
                      <Badge
                        className="mt-3"
                        bg={`${
                          suggestion.length > characterLimit
                            ? "danger"
                            : "secondary"
                        }`}
                      >
                        {suggestion.length}/{characterLimit}
                      </Badge>
                    </Form.Group>
                    <Form.Group
                      // className="d-flex justify-content-center mb-3" md={6}
                      className="h-25 d-flex justify-content-center"
                    >
                      <Row className="w-100">
                        {/* <Col md={12} className="h-50 p-0"></Col> */}
                        <Col
                          md={12}
                          className="pt-4 d-flex justify-content-center p-0"
                        >
                          <Button
                            variant="primary"
                            type="submit"
                            className="bt-sub bt-tamanho"
                          >
                            Enviar
                          </Button>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        ) : showAdmin ? (
          <Row className="w-100 mt-5 justify-content-center d-flex align-items-center redirect">
            <Col lg={5} md={6} sm={8} className=" mt-5 redirect-c">
              <Container className="d-flex justify-content-center align-items-center h-100 w-100">
                <Row className="h-100 w-100">
                  <Col className="pt-2">Teste</Col>
                </Row>
              </Container>
            </Col>
          </Row>
        ) : (
          <Row className="w-100 mt-5 justify-content-center d-flex align-items-center redirect">
            <Col lg={5} md={6} sm={8} className=" mt-5 redirect-c">
              <Container className="d-flex justify-content-center align-items-center h-100 w-100">
                <Row className="h-100 w-100">
                  <Col className="pt-2">
                    <Link to="/" className="text-decoration-none back">
                      <Figure>
                        <Figure.Image width={25} height={25} src={arrow} />{" "}
                        <Figure.Caption></Figure.Caption>
                      </Figure>
                      Voltar à página principal{" "}
                    </Link>
                  </Col>
                  <Col
                    md={12}
                    className="d-flex justify-content-center align-items-start text-center"
                  >
                    <h4 className="fw-light">
                      Para realizar esta ação é necessário fazer login primeiro
                    </h4>
                  </Col>

                  <Col
                    md={12}
                    className="d-flex align-items-end justify-content-center w-100"
                  >
                    <Row className="d-flex justify-content-center align-items-center w-100 mb-3">
                      <Col>
                        <p>Clique no botão para logar com seu usuário</p>
                      </Col>
                      <Col md={12} lg={4} sm={12} xs={12} className="p-0">
                        <Link to="/login" className="text-decoration-none">
                          <Button className="w-100 bt-sub">Logar</Button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default SuggestionsConst;
