import React, { useState } from "react";
import { Form, Row, Col, Container, Button, Alert, ListGroup, ListGroupItem } from "react-bootstrap";
import "../assets/styles/suggestions.scss";
import Filter from "bad-words";
import { ResponsiveEmbed } from "react-bootstrap";

const SuggestionsConst = () => {
  const [suggestion, setSuggestion] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  // Estado para controlar a exibição do alert
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    if (suggestion === ""
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
      <Container className="mb-5 s-container justify-content-start align-items-center d-flex flex-column">
        <Row className="mt-5 d-flex justify-content-center align-items-center text-center w-100" md={12}>


          <Col lg={8} md={12} xl={6} className="d-flex flex-column align-items-center w-100">

            <h2>Coleta de sugestões</h2>
            <Form className="m-0" onSubmit={handleSubmit}>
              <Row className="f-row h-100">
                <Col md={6} className="mb-3" xs={12}>
                  <ListGroup className="text-start">
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
                <Col md={6} xs={12} className="mb-3">
                  <Form.Group className="h-75">
                    <Form.Control
                      as="textarea"
                      placeholder="Escreva aqui"
                      className="h-100"
                      maxLength={1000}
                      onChange={handleSuggestionChange}
                      value={suggestion}
                    />

                  </Form.Group>
                  <Form.Group
                    // className="d-flex justify-content-center mb-3" md={6}
                    className="h-25 d-flex justify-content-center"
                  >
                    <Row className="w-100">
                      {/* <Col md={12} className="h-50 p-0"></Col> */}
                      <Col md={12} className="pt-4 d-flex justify-content-end p-0">

                      <Button variant="primary" type="submit" className="w-100">
                          Submit
                        </Button>
                      </Col>
                    </Row>

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
