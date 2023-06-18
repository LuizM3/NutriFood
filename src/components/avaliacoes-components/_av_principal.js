import "../../Sass/_avaliacoes.scss";
import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import ProgressBar from 'react-bootstrap/ProgressBar';

let progresso = 12.5;
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
              <Pagination.Prev href="/avaliacoes">Voltar</Pagination.Prev>
            </Pagination>
            <ProgressBar now={progresso} />
          </Col>
        </Row>
       
        <Row className="row">
        <Col className="col-av">
          
          <Form className="formulario-av">
              <h3>Como estava a opção principal?</h3>
              {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-4">
          <Form.Check
            inline
            label="Excelente"
            name="group2"
            type={type}
            id={`inline-${type}-4`}
            onChange={handleOpcaoChange}
          />
          <Form.Check
            inline
            label="Bom"
            name="group2"
            type={type}
            id={`inline-${type}-5`}
            onChange={handleOpcaoChange}
          />
          <Form.Check
            inline
            label="Normal"
            name="group2"
            type={type}
            id={`inline-${type}-6`}
            onChange={handleOpcaoChange}
          />
          <Form.Check
            inline
            label="Ruim"
            name="group2"
            type={type}
            id={`inline-${type}-7`}
            onChange={handleOpcaoChange}
          />
          <Form.Check
            inline
            label="Horrível"
            name="group2"
            type={type}
            id={`inline-${type}-8`}
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
                href="/avaliacoes/principal/complemento"
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
