// import React from "react";
// import { Form, Row, Col, Container, Button, FloatingLabel } from "react-bootstrap";
// import "../assets/styles/suggestions.scss";

// const AboutConst = () => {

//   return (
//     <>
//       <Container className="s-container  justify-content-center align-items-center d-flex">

//         <Row className="mt-5 d-flex justify-content-center align-items-center text-center" md={12}>
//           <Col lg={8} md={12} xl={6}>
//             <h2>
//               Coleta de sugestões
//             </h2>
//             <Form className="m-5">
//               <Row>
//                 <Col md={12} className="mb-3">
//                   <Form.Group>
//                     <Form.Label>Quais pontos você acha que precisam ser melhorados para aumentar a sua satisfação com as refeições do RI?</Form.Label>
//                     <Form.Control
//                       as="textarea"
//                       placeholder="Escreva aqui"
//                       style={{ height: '100px' }}
//                     />
//                   </Form.Group>

//                 </Col>
//                 <Col md={12}className="mb-3"><Form.Group>
//                   <Form.Label>Você tem alguma sugestão para obter melhorias propostas na questão anterior?</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     placeholder="Escreva aqui"
//                     style={{ height: '100px' }}
//                   />
//                 </Form.Group>

//                 </Col>

//                 <Col md={12}className="mb-3"><Form.Group>
//                   <Form.Label>Qual o ponto positivo do restaurante que você destacaria?</Form.Label>

//                   <Form.Control
//                     as="textarea"
//                     placeholder="Escreva aqui"
//                     style={{ height: '100px' }}
//                   />
//                 </Form.Group>
//                 </Col>
//                 <Col md={12}className="mb-3"> <Form.Group>
//                   <Form.Label>Qual a sua preparação preferida do almoço/jantar?</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     placeholder="Escreva aqui"
//                     style={{ height: '100px' }}
//                   />
//                 </Form.Group>
//                 </Col>
//                 <Col md={12}className="mb-3">  <Form.Group><Form.Label>
//                   Qual sua preparação do café da manhã/lanche da tarde?
//                 </Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     placeholder="Escreva aqui"
//                     style={{ height: '100px' }}
//                   />
//                 </Form.Group>
//                 </Col>
//                 <Col className="d-flex justify-content-center mb-3" md={12}>
//                   <Button variant="primary" type="submit" className="w-50">
//                     Submit
//                   </Button>
//                 </Col>




//               </Row>

//             </Form>
//           </Col>
//         </Row>

//       </Container>
//     </>
//   );
// };

// export default AboutConst;
import React, { useState } from "react";
import { Form, Row, Col, Container, Button, Alert } from "react-bootstrap";
import "../assets/styles/suggestions.scss";
import Filter from "bad-words";// biblioteca bad-words

const SuggestionsConst = () => {
  const [suggestion, setSuggestion] = useState("");
  const [suggestion2, setSuggestion2] = useState("");
  const [suggestion3, setSuggestion3] = useState("");
  const [suggestion4, setSuggestion4] = useState("");
  const [suggestion5, setSuggestion5] = useState("");
  const [showAlert, setShowAlert] = useState(true); // Estado para controlar a exibição do alert

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };
  const handleSuggestionChange2 = (event) => {
    setSuggestion2(event.target.value);
  };
  const handleSuggestionChange3 = (event) => {
    setSuggestion3(event.target.value);
  };
  const handleSuggestionChange4 = (event) => {
    setSuggestion4(event.target.value);
  };
  const handleSuggestionChange5 = (event) => {
    setSuggestion5(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // instância do filtro
    const filter = new Filter();

    // Verificando se a sugestão contém linguagem imprópria
    if (
      filter.isProfane(suggestion) ||
      filter.isProfane(suggestion2) ||
      filter.isProfane(suggestion3) ||
      filter.isProfane(suggestion4) ||
      filter.isProfane(suggestion5)
    ) {
      // Se contiver linguagem imprópria, mostre o alert
      setShowAlert(true);
      console.log("Linguagem imprópria");
    } else {
      // Aqui,enviar a sugestão para o backend
    }
  };

  return (
    <>
      <Container className="s-container justify-content-center align-items-center d-flex flex-column">{showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Linguagem imprópria detectada!</Alert.Heading>
          {/* <p>
                Sua sugestão contém linguagem imprópria. Por favor, revise sua mensagem antes de enviar.
              </p> */}
        </Alert>
      )}
        <Row className="mt-5 d-flex justify-content-center align-items-center text-center" md={12}>

          <Col lg={8} md={12} xl={6}>
            <h2>Coleta de sugestões</h2>
            <Form className="m-5" onSubmit={handleSubmit}>
              <Row>
                <Col md={12} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      Quais pontos você acha que precisam ser melhorados para aumentar a sua satisfação com as refeições do RI?
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Escreva aqui"
                      style={{ height: '100px' }}
                      value={suggestion}
                      onChange={handleSuggestionChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3"><Form.Group>
                  <Form.Label>Você tem alguma sugestão para obter melhorias propostas na questão anterior?</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui"
                    style={{ height: '100px' }}
                    value={suggestion2}
                    onChange={handleSuggestionChange2}
                  />
                </Form.Group>

                </Col>

                <Col md={12} className="mb-3"><Form.Group>
                  <Form.Label>Qual o ponto positivo do restaurante que você destacaria?</Form.Label>

                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui"
                    style={{ height: '100px' }}
                    value={suggestion3}
                    onChange={handleSuggestionChange3}
                  />
                </Form.Group>
                </Col>
                <Col md={12} className="mb-3"> <Form.Group>
                  <Form.Label>Qual a sua preparação preferida do almoço/jantar?</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui"
                    style={{ height: '100px' }}

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
                    style={{ height: '100px' }}

                    onChange={handleSuggestionChange5}
                    value={suggestion5}
                  />
                </Form.Group>
                </Col>
                <Col className="d-flex justify-content-center mb-3" md={12}>
                  <Button variant="primary" type="submit" className="w-50">
                    Submit
                  </Button>
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
