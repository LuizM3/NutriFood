import { Container, Col, Row } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import "../assets/styles/about.scss";
import Chart from "chart.js/auto";
import { Link, useNavigate } from "react-router-dom";
const AboutConst = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    }
  }, [id]);
  return (
    <>
     <Container className="flex-column r-about">
        <Row className="m-5">
          <Col
            md={12}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Sobre o Projeto</h2>
          </Col>
          <Col>
            <p>
            Bem-vindo ao Projeto Nutrifood, uma iniciativa que vai além de um simples site 
            - é a confluência entre nutrição consciente, tecnologia e um compromisso genuíno 
            com a saúde da comunidade estudantil do IFES Campus Santa Teresa.
            </p>
          </Col>
        </Row>
        <Row md={12} className="m-5">
          <Col
            md={4}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Figura</h2>
          </Col>
          <Col md={8}>
            <p>
            O Projeto Nutrifood é fruto do empenho e comprometimento dos alunos 
            Bryan Zucoloto, Ruan Pablo, Luiz Felipe, Filipe Kiefer, Alex Brandão e Heitor Poleze 
            do curso de informática para a internet no IFES Santa Teresa. Nossa jornada começou 
            com a meta de criar algo significativo para nossa comunidade, indo além de um simples 
            projeto acadêmico. Decidimos aproveitar a oportunidade do terceiro ano do curso para 
            desenvolver um site nutricional voltado para o Restaurante Institucional do campus.
            </p>
          </Col>
        </Row>
        <Row md={12} className="m-5">
          <Col
            md={4}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Figura</h2>
          </Col>
          <Col md={8}>
            <p>
              Ao compreender as dificuldades da nutricionista do campus na captação de dados sobre 
              o restaurante e a avaliação das refeições, decidimos unir esforços para criar uma 
              solução inovadora. Nosso projeto atende às necessidades da direção ao coletar 
              e analisar dados, além de proporcionar aos alunos acesso fácil e transparente 
              a informações vitais sobre o cardápio diário e semanal, facilitando a comunicação 
              com a direção do restaurante.
            </p>
          </Col>
        </Row>{" "}
        <Row md={12} className="m-5">
          <Col
            md={4}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Figura</h2>
          </Col>
          <Col md={8}>
            <p>
            Nosso time conta com o apoio e orientação valiosa dos 
            professores Milton, Fábio Bigati e Filipe. Os Professores Milton e Fábio, 
            especialista na área técnica, trazem consigo vasta experiência profissional, 
            enquanto o Professor Filipe, da área básica, contribui com sua expertise, 
            enriquecendo nosso time com sua formação e visão única. Juntos, eles são peças 
            fundamentais para o desenvolvimento e sucesso deste projeto.
            </p>
          </Col>
        </Row>
        <Row md={12} className="m-5">
          <Col
            md={6}
            className="text-center align-items-center justify-content-center d-flex"
          >
            <h2>Comprometimento</h2>
          </Col>
          <Col>
            <p>
            Estamos comprometidos em tornar a alimentação uma experiência mais transparente, 
            acessível e saudável para toda a comunidade do IFES Campus Santa Teresa. 
            Junte-se a nós nessa jornada de nutrição e inovação!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutConst;
