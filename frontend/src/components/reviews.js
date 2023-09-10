import React, { useState } from "react";
import {

  Carousel,
  Form,
  ProgressBar

} from "react-bootstrap";

const ReviewsConst = () => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(false);

  const [progress, setProgress] = useState(0);

  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.checked);
    setProgress((prevProgress) => prevProgress + 7, 8);
  };

  return (
    <>
      <div className="cont2">
        <ProgressBar now={progress} />

        <h2>Coleta da avaliação</h2>
        <Form>
          <h6>
            Dentre os pontos abordados abaixo, qual a sua avaliação em
            relação ao Restaurante Institucional?
          </h6>
          <h5>Apresentação das preparações</h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Gosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-9`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Gosto moderado"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Não gosto/desgosto"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto moderadamente"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>
        <Form>
          <h5>Variedade do cardápio</h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Gosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-9`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Gosto moderado"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Não gosto/desgosto"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto moderadamente"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>{" "}
        <Form>
          <h5>Sabor das refeições</h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Gosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-9`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Gosto moderado"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Não gosto/desgosto"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto moderadamente"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>
        <Form>
          <h5>Sabor do suco</h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Gosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-9`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Gosto moderado"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Não gosto/desgosto"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto moderadamente"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>
        <Form>
          <h5>Sabor da sobremesa</h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Gosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-9`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Gosto moderado"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Não gosto/desgosto"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto moderadamente"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>
        <Form>
          <h5>Temperatura dos alimentos</h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Gosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-9`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Gosto moderado"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Não gosto/desgosto"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto moderadamente"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>
        <Form>
          <h5>Atendimento dos funcionários</h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Gosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-9`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Gosto moderado"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Não gosto/desgosto"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto moderadamente"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Desgosto muito"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>
        <Form>
          <h5>
          Higiene do restaurante(buffet, mesas, cadeiras, pisos,
            pratos, bandejas e talheres)
          </h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Ótimo"
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
                label="Regular"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Ruim"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Péssimo"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>
        <Form>
          <h5>Temperatura do ambiente</h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Ótimo"
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
                label="Regular"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Ruim"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Péssimo"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>
        <Form>
          <h5>
            Tempo de espera para preparar o prato(sem considerar fila)
          </h5>
          <p>Marque apenas uma opção.</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-4">
              <Form.Check
                inline
                label="Ótimo"
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
                label="Regular"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Ruim"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
              <Form.Check
                inline
                label="Péssimo"
                name="group3"
                type={type}
                id={`inline-${type}-10`}
                onChange={handleOpcaoChange}
              />
            </div>
          ))}
        </Form>

      </div>
    </>
  );
};

export default ReviewsConst;
