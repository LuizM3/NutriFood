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
  Stack,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

let cardapioMain = [];
const CarouselConst = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();
  const [menuCardapio, setMenuCardapio] = useState("");

  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    }
    const menu = async () => {
      try {
        const response = await fetch(
          "http://localhost:9000/getCardapioMain?dia=" + dia ,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          for(const element of data.response){
            cardapioMain.push(element[0]);
          }
        setTimeout(()=>{
           setMenuCardapio(true);
        }, 1000);
        } else {
          console.log("Erro na requisição");
        }
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
      }
    };
    menu();
  }, [id]);
  let mesString = "";
  const hoje = new Date().getMonth();
  const dia = new Date().getDate();
  switch (hoje) {
    case 0:
      mesString = "Janeiro";
      break;
    case 1:
      mesString = "Fevereiro";
      break;
    case 2:
      mesString = "Março";
      break;
    case 3:
      mesString = "Abril";
      break;
    case 4:
      mesString = "Maio";
      break;
    case 5:
      mesString = "Junho";
      break;
    case 6:
      mesString = "Julho";
      break;
    case 7:
      mesString = "Agosto";
      break;
    case 8:
      mesString = "Setembro";
      break;
    case 9:
      mesString = "Outubro";
      break;
    case 10:
      mesString = "Novembro";
      break;
    case 11:
      mesString = "Dezembro";
      break;
  }

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
            <div>{/* <h4>{mesString}</h4> */}</div>
            <Row>
              <h1>Cardápio do dia {dia} de 
              {mesString}</h1>
            </Row>
            <Row>
              {menuCardapio ? (
                <>
                  <Col md={12} sm={12}>
                    <Stack className="h-100 d-flex justify-content-end">
                      <Table responsive striped bordered className="table-cp">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Comida</th>
                            <th>Bebida</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Café Da Manhã</td>
                            <td>{cardapioMain[0].comida}</td>
                            <td>{cardapioMain[0].bebida}</td>
                          </tr>
                          <tr>
                            <td>Lanche Da Tarde</td>
                            <td>{cardapioMain[2].comida}</td>
                            <td>{cardapioMain[2].bebida}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Stack>
                  </Col>
                  <Col md={12} sm={12}>
                    <Stack className="h-100 d-flex justify-content-start">
                      <Table responsive striped bordered className="table-cp">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Principal</th>
                            <th>Opção</th>
                            <th>Arroz</th>
                            <th>Feijão</th>
                            <th>Guarnição</th>
                            <th>Salada I</th>
                            <th>Salada II</th>
                            <th>Sobremesa</th>
                            <th>Suco</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Almoço</td>
                            <td>{cardapioMain[1].principal}</td>
                            <td>{cardapioMain[1].opcao}</td>
                            <td>{cardapioMain[1].arroz}</td>
                            <td>{cardapioMain[1].feijao}</td>
                            <td>{cardapioMain[1].guarnicao}</td>
                            <td>{cardapioMain[1].salada1}</td>
                            <td>{cardapioMain[1].salada2}</td>
                            <td>{cardapioMain[1].sobremesa}</td>
                            <td>{cardapioMain[1].suco}</td>
                          </tr>
                          <tr>
                            <td>Jantar</td>
                            <td>{cardapioMain[3].principal}</td>
                            <td>{cardapioMain[3].opcao}</td>
                            <td>{cardapioMain[3].arroz}</td>
                            <td>{cardapioMain[3].feijao}</td>
                            <td>{cardapioMain[3].guarnicao}</td>
                            <td>{cardapioMain[3].salada1}</td>
                            <td>{cardapioMain[3].salada2}</td>
                            <td>{cardapioMain[3].sobremesa}</td>
                            <td>{cardapioMain[3].suco}</td>
                          </tr>
                        </tbody>
                      </Table>
                      <div></div>
                    </Stack>
                  </Col>
                </>
              ) : (
                <div></div>
              )}
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
                    <p>Professor Fábio Bigati</p>
                    <p>Professor Filipe Ribeiro</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Quem são os integrantes?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Bryan Zucoloto, Ruan Pablo, Luiz Felipe, Filipe Kiefer,
                      Alex Brandão e Heitor Poleze
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
};

export default CarouselConst;
