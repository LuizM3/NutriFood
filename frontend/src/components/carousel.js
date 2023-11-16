import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/styles/carousel.scss";
import "../assets/styles/main.scss";
import {
  Container,
  Accordion,
  Button,
  Col,
  Row,
  Figure,
  Table,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import GraficoSaborDoSuco from "../service/graficos/saborDoSuco.js";
const CarouselConst = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    }
  }, [id]);
  const land = require("../assets/images/land.png");
  const island = require("../assets/images/island.png");
  const sun = require("../assets/images/sun.png");
  const quote = require("../assets/images/quote.png");

  return (
    <>
      <Carousel slide={true} interval={950}>
        <Carousel.Item id="day1">
          <h1 className="tittleCar">
            <p>Bem-vindo</p>
          </h1>
        </Carousel.Item>
        <Carousel.Item id="day2">
          <h1 className="tittleCar">
            <p> Avalie nossa comida</p>
            <Link to="/reviews" className="text-decoration-none">
              <Button className="bt-car">Saiba mais</Button>
            </Link>
          </h1>
        </Carousel.Item>
        <Carousel.Item id="day3">
          <h1 className="tittleCar">
            <p> Sugira uma refeição</p>
            <Link to="/suggestions" className="text-decoration-none">
              <Button className="bt-car">Saiba mais</Button>
            </Link>
          </h1>
        </Carousel.Item>

        <Carousel.Item id="day4">
          <h1 className="tittleCar">
            <p>Cardápio do dia</p>
            <Link to="/menu" className="text-decoration-none">
              <Button className="bt-car">Saiba mais</Button>
            </Link>
          </h1>
        </Carousel.Item>

        <Carousel.Item id="day5">
          <h1 className="tittleCar">
            <p>Sobre Nutrifood</p>
            <Link to="/about" className="text-decoration-none">
              <Button className="bt-car">Saiba mais</Button>
            </Link>
          </h1>
        </Carousel.Item>
      </Carousel>
      <div id="div-l-cont">
        <Container>
          <section>
            <Row id="as">
              <Figure className="parallax">
                <Figure.Image src={sun} />
                <Figure.Image src={island} />
              </Figure>
            </Row>
            <Row>
              <div>
                <h1>Quem somos?</h1>
                <p>
                  O Restaurante Institucional(RI) do Ifes Campus Santa Teresa
                  tem o objetivo de fornecer refeições equilibradas e adequadas
                  às necessidades nutricionais dos estudantes, segundo os
                  princípios dietéticos preconizados pelas normas de alimentação
                  definidas pelo Ministério da Educação, e com observância das
                  normas gerais de higiene sanitária para a produção da
                  alimentação. Somos mais do que um restaurante; somos uma
                  jornada gastronómica dedicada à nutrição consciente e ao
                  prazer de comer bem. Nossa paixão pela saúde e bem-estar é o
                  nosso ingrediente secreto.
                </p>
              </div>
            </Row>
          </section>
        </Container>
      </div>

      <div id="div-f-cont">
        {/* <Image src={decorPaper}>

      </Image> */}
        <Container className="land-cont">
          <section>
            <Row>
              <div>
                <h1>Sabor e Saúde em Cada Prato</h1>
                <p>
                  Bem-vindo ao nosso mundo de nutrição e bem-estar. Desfrute de
                  refeições deliciosas que também são boas para você. Descubra
                  um cardápio diversificado, com opções frescas e saudáveis,
                  preparadas com ingredientes de qualidade. Compartilhe suas
                  sugestões para melhorarmos ainda mais. Explore agora!
                </p>
              </div>
            </Row>

            <Row>
              <Figure>
                <Figure.Image src={land} className="animated-image" />
              </Figure>
            </Row>
          </section>
        </Container>
      </div>
      <div>
        <Container className="acord-cont">
          <section>
            <Row>
              <h1>Cardápio do dia</h1>
            </Row>
            <Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Café da manhã</th>
                    <th>Almoço</th>
                    <th>Lanche da tarde</th>
                    <th>Janta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pão sírio</td>
                    <td>Carne suína</td>
                    <td>Bolo de cenoura</td>
                    <td>Churrasco misto</td>
                  </tr>
                  <tr>
                    <td>Goiaba</td>
                    <td>Arroz, feijão, batata cozida e polenta </td>
                    <td>Banana</td>
                    <td>Arroz, feijão e cenoura cozida</td>
                  </tr>
                  <tr>
                    <td>Suco de maçã</td>
                    <td>Suco de uva</td>
                    <td>Achocolatado</td>
                    <td>Suco de limão</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </section>
        </Container>
      </div>

      <div id="div-r-ac">
        <Container className="acord-cont" id="acord-id">
          <section>
            <Row>
              <Col>
                <Row>
                  <h1>Perguntas frequentes</h1>
                  <p>Com dúvida em mais alguma coisa? Tente nos contatar</p>
                </Row>{" "}
                <Row>
                  <Figure>
                    <Figure.Image src={quote} />
                  </Figure>
                </Row>
              </Col>
            </Row>
            <Row>
              <Accordion className="acc">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    O que é o projeto Nutrifood?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      O projeto nutrifood é um projeto criado pelos alunos Bryan
                      Zucoloto, Ruan Pablo, Luiz Felipe, Filipe Kiefer, Alex
                      Brandão e Heitor Poleze; do terceiro ano, do curso de
                      informática para a internet no campus IFES Santa Teresa.
                      No terceiro ano do curso, todos os alunos devem
                      desenvolver um projeto e apresentar a fim de demonstrar
                      seus conhecimentos adquiridos ao longo do curso. Nós do
                      projeto nutrifood aproveitamos essa oportunidade para
                      desenvolver algo que ajude a nossa comunidade, não apenas
                      um projeto para passar de ano, a partir dessa mentalidade
                      decidimos desenvolver um site nutricional do restaurante
                      institucional do campus.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Como o site começou?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Ao pensarmos sobre o projeto, todos entramos de acordo que
                      queríamos algo que ajudasse nossa comunidade e então
                      analisamos nossas possibilidades, que numa primeira
                      conversa foram muitas, após algumas reuniões e com a ajuda
                      dos orientadores fomos encaminhados a nutricionista do
                      campus que tinha algumas dificuldades na captação de dados
                      sobre o restaurante e as avaliações sobre as refeições
                      realizadas no mesmo. Ao entendermos as preocupações da
                      nutricionista foi-se decidido embarcar nessa aventura e
                      começamos a desenvolver a primeira versão do site em uso
                      atualmente.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Qual a finalidade do projeto?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      O projeto começou a partir das necessidades da
                      nutricionista do IFES, que precisava realizar diversas
                      pesquisas e apresentar ao final do ano a fim de manter a
                      funcionalidade do restaurante institucional, pesquisas
                      essas que se dividiam em muitas subseções que eram muito
                      difícil de unir e apresentar ao fim do ano. Tendo
                      conhecimento dessas necessidades e somando necessidades
                      que nós como alunos tínhamos como por exemplo: saber o
                      cardápio diários e semanais, uma forma de conseguir se
                      comunicar com a direção do restaurante e outras demandas,
                      pensamos a criação desse projeto que reúne tanto as
                      necessidades da direção na captação e análise de dados
                      como a dos alunos na visualização e transmissão de
                      informações a respeito da sua alimentação.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Quem são os tutores?</Accordion.Header>
                  <Accordion.Body>
                    <p>Professor Milton</p>
                    <p>
                      Professor Fábio Bigati (colocar uma foto e uma breve fala
                      sobre a história dele) idade, formação e uma breve fala
                      sobre sua experiência profissional. professor da área
                      técnica.
                    </p>
                    <p>
                      Professor Filipe Ribeiro (colocar uma foto e uma breve
                      fala sobre a história dele) idade, formação e uma breve
                      fala sobre sua experiência profissional. professor da área
                      básica.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Quem são os integrantes?</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </section>
        </Container>
      </div>

      {/* Noticias */}
      {/* <Container className="main columns news-cont" >
        <div id="news-title">
          <h1>Últimas notícias</h1>
        </div>
        <Row xs={1} md={2} lg={3} className="p-0">
          {noticias.map((noticia, idx) => (
            <Col key={idx} className="column main-columns">
              <Link to={noticia.url} className="article" target="blank">
                <Figure className="article-image is-3by2">
                  <Figure.Image src={noticia.urlToImage} />
                </Figure>
                <div className="article-body">
                  <h2 className="article-title">{noticia.title}</h2>
                  <p className="article-content">{noticia.description}</p>
                  <footer className="article-info">
                    <span>{noticia.author}</span>
                    <span>{noticia.name}</span>
                  </footer>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container> */}
    </>
  );
};

export default CarouselConst;
