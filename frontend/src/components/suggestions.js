import React, { useState } from "react";
import { Form, Row, Col, Container, Button, Alert, ListGroup, ListGroupItem } from "react-bootstrap";
import "../assets/styles/suggestions.scss";
import Filter from "bad-words";
import { ResponsiveEmbed } from "react-bootstrap";

const SuggestionsConst = () => {
  const [suggestion, setSuggestion] = useState("");
  // const [suggestion2, setSuggestion2] = useState("");
  // const [suggestion3, setSuggestion3] = useState("");
  // const [suggestion4, setSuggestion4] = useState("");
  // const [suggestion5, setSuggestion5] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  // Estado para controlar a exibição do alert
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };
  // const handleSuggestionChange2 = (event) => {
  //   setSuggestion2(event.target.value);
  // };
  // const handleSuggestionChange3 = (event) => {
  //   setSuggestion3(event.target.value);
  // };
  // const handleSuggestionChange4 = (event) => {
  //   setSuggestion4(event.target.value);
  // };
  // const handleSuggestionChange5 = (event) => {
  //   setSuggestion5(event.target.value);
  // };

  const handleSubmit = async (event) => {

    event.preventDefault();
    if (suggestion === ""
      //  || suggestion2 === "" || suggestion3 === "" || suggestion4 === "" || suggestion5 === ""
    ) {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 5000);
      return;
    }

    // instância do filtro
    const filter = new Filter();

    // Verificando se a sugestão contém linguagem imprópria
    if (
      filter.isProfane(suggestion)
      // filter.isProfane(suggestion2) ||
      // filter.isProfane(suggestion3) ||
      // filter.isProfane(suggestion4) ||
      // filter.isProfane(suggestion5)
    ) {
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

      if(response){
        setShowAlertSuccess(true);
      setTimeout(() => {
        setShowAlertSuccess(false);
      }, 5000);
      console.log("Sucesso em enviar sugestão")
      } else{
        alert("Algo deu errado");
      }

    }

  };

  return (
    <>
      <Row className="position-fixed alert-row">
        {showAlert && (
          <Alert variant="warning" className="align-items-center d-flex fade" onClose={() => setShowAlert(false)}>
            Linguagem imprópria detectada!

          </Alert>
        )}  {showAlertSuccess && (
          <Alert variant="success" className="align-items-center d-flex fade" onClose={() => setShowAlertSuccess(false)}>
            Sugestão enviada com sucesso!
          </Alert>
        )}
        {showErrorAlert && (
          <Alert variant="danger" className="align-items-center d-flex fade" onClose={() => setErrorAlert(false)}>
            Erro ao enviar sugestão
          </Alert>
        )}

      </Row>
      <Container className="s-container justify-content-center align-items-center d-flex flex-column">
        <Row className="mt-0 d-flex justify-content-center align-items-center text-center w-100" md={12}>
        

          <Col lg={8} md={12} xl={6} className="d-flex flex-column align-items-center w-100">

            <h2>Coleta de sugestões</h2>
            <Form className="m-0" onSubmit={handleSubmit}>
              <Row>
                {/* <Col md={12} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      Quais pontos você acha que precisam ser melhorados para aumentar a sua satisfação com as refeições do RI?
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Escreva aqui"
                      value={suggestion}
                    maxLength={200}
                      onChange={handleSuggestionChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3"><Form.Group>
                  <Form.Label>Você tem alguma sugestão para obter melhorias propostas na questão anterior?</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui"
                    value={suggestion2}
                    maxLength={200}
                    onChange={handleSuggestionChange2}
                  />
                </Form.Group>

                </Col>

                <Col md={12} className="mb-3"><Form.Group>
                  <Form.Label>Qual o ponto positivo do restaurante que você destacaria?</Form.Label>

                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui"
                    value={suggestion3}
                    maxLength={200}
                    onChange={handleSuggestionChange3}
                  />
                </Form.Group>
                </Col>
                <Col md={12} className="mb-3"> <Form.Group>
                  <Form.Label>Qual a sua preparação preferida do almoço/jantar?</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui"
                    maxLength={200}
                    value={suggestion4}
                    onChange={handleSuggestionChange4}
                  />
                </Form.Group>
                </Col>
                <Col md={12} className="mb-3">  <Form.Group><Form.Label>
                  Qual sua preparação do café da manhã/lanche da tarde?
                </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui"
                    maxLength={200}
                    onChange={handleSuggestionChange5}
                    value={suggestion5}
                  />
                </Form.Group>
                </Col> */}
                <Col md={6} className="mb-3">
                  <ListGroup>
                    <ListGroupItem>

                      1 - Quais pontos você acha que precisam ser melhorados para aumentar a sua satisfação com as refeições do RI?
                    </ListGroupItem>
                    <ListGroupItem>

                      2 - Você tem alguma sugestão para obter melhorias propostas na questão anterior?
                    </ListGroupItem>
                    <ListGroupItem>

                      3 - Qual o ponto positivo do restaurante que você destacaria?
                    </ListGroupItem>
                    <ListGroupItem>

                      4 - Qual a sua preparação preferida do almoço/jantar?
                    </ListGroupItem>
                    <ListGroupItem>

                      5 - Qual sua preparação do café da manhã/lanche da tarde?
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <Col md={6} className="mb-3">  <Form.Group className="h-75">
                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui"
                    className="h-100"
                    maxLength={200}
                    onChange={handleSuggestionChange}
                    value={suggestion}
                  />
                <Col className="d-flex justify-content-center mb-3" md={6}>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Col>
                </Form.Group>

                </Col>

              </Row>

            </Form>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default SuggestionsConst;
