import "../../Sass/_avaliacoes.scss";
import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import ProgressBar from 'react-bootstrap/ProgressBar';

let progresso = 25;
const Avaliacoes = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(false);

  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.checked);
    progresso += 12.5;
  };

  const handleNextClick = () => {
    if (opcaoSelecionada) {
     
    } else {
      
    }
  };

  return (
    <>
      <Container className="cont2">
        
        <Row className="row">
          <Col id="pg-prev">
            <Pagination>
              <Pagination.Prev href="/avaliacoes/principal">Voltar</Pagination.Prev>
            </Pagination>
            <ProgressBar now={progresso} />
          </Col>
        </Row>
        
        <Row className="row">
        <Col className="col-av">
          
          <Form className="formulario-av">
              <h3>Como estava o complemento?</h3>
                <p>
                    (Polenta, Purê, Pirão...)
                
                </p>
              {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-4">
          <Form.Check
            inline
            label="Excelente"
            name="group3"
            type={type}
            id={`inline-${type}-9`}
            onChange={handleOpcaoChange}
          />
          <Form.Check
            inline
            label="Bom"
            name="group3"
            type={type}
            id={`inline-${type}-10`}
            onChange={handleOpcaoChange}
          />
          <Form.Check
            inline
            label="Normal"
            name="group3"
            type={type}
            id={`inline-${type}-11`}
            onChange={handleOpcaoChange}
          />
          <Form.Check
            inline
            label="Ruim"
            name="group3"
            type={type}
            id={`inline-${type}-12`}
            onChange={handleOpcaoChange}
          />
          <Form.Check
            inline
            label="Horrível"
            name="group3"
            type={type}
            id={`inline-${type}-13`}
            onChange={handleOpcaoChange}
          />
          
        </div>
      ))}

            </Form>
          </Col>
        </Row>
        <Row className="row">
          <Col id="pg-next">
            <Pagination>
              <Pagination.Next
                href="/avaliacoes/principal/complemento/salada"
                onClick={handleNextClick}
                disabled={!opcaoSelecionada} // Desativa o botão quando nenhuma opção estiver selecionada
              >
                Próximo
              </Pagination.Next>
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Avaliacoes;
