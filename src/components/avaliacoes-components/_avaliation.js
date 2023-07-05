import React, { useState } from "react";
import { Container, Carousel, Form, Pagination, ProgressBar } from "react-bootstrap";

const Avaliacoes = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(false);
  const [progresso, setProgresso] = useState(0);

  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.checked);
    setProgresso((prevProgresso) => prevProgresso + 12.5);
  };

  const handleNextClick = () => {
    if (opcaoSelecionada) {
      // Avance para a próxima etapa
    } else {
      // Exiba uma mensagem de erro ou tome a ação apropriada
    }
  };

  return (
    <>
      <Container className="cont2">
        {/* Barra de progresso */}
        <ProgressBar now={progresso} />

        {/* Troca de página */}
        <Carousel
          prevIcon={null}
          nextIcon={null}
          indicators={false}
          interval={null} // Desabilita a rotação automática do carrossel
          wrap={false} // Desabilita o loop do carrossel
        >
          <Carousel.Item>
            <Form className="formulario-av">
              <h3>O que você escolheu hoje de principal?</h3>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Carne"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Opção vegetariana"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    onChange={handleOpcaoChange}
                  />
                  <Form.Check
                    inline
                    label="Nada"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                    onChange={handleOpcaoChange}
                  />
                </div>
              ))}
            </Form>
          </Carousel.Item>

          <Carousel.Item>
            <Form className="formulario-av">
              <h3>Como estava a opção principal?</h3>
              {["radio"].map((type) => (
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
          </Carousel.Item>

          <Carousel.Item>
            <Form className="formulario-av">
              <h3>Como estava o complemento?</h3>
              <p>(Polenta, Purê, Pirão...)</p>
              {["radio"].map((type) => (
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
          </Carousel.Item>

          <Pagination>
            <Pagination.Prev
              className="carousel-control-prev"
              onClick={handleNextClick}
              disabled={!opcaoSelecionada} // Desativa o botão quando nenhuma opção estiver selecionada
            >
              Voltar
            </Pagination.Prev>
              <Pagination.Next
              className="carousel-control-next"
              onClick={handleNextClick}
              disabled={!opcaoSelecionada} // Desativa o botão quando nenhuma opção estiver selecionada
            >
              Próximo
            </Pagination.Next>
          </Pagination>
        </Carousel>
      </Container>
    </>
  );
};

export default Avaliacoes;
