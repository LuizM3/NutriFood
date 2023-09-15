import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/styles/carousel.scss";
import "../assets/styles/main.scss";
import { Container, Accordion, Button, Stack, Col, Row, Figure, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const apiKey = "61c379021f8b42b3bda1cfd5ddff9255";
const pageSize = 6;
const apiUrl = `https://newsapi.org/v2/everything?q=nutrition&from=2023-08-14&pageSize=${pageSize}&sortBy=publishedAt&apiKey=${apiKey}`;


const CarouselConst = () => {
  const land = require('../assets/images/land.png');
  const island = require("../assets/images/island.png");
  const sun = require("../assets/images/sun.png");
  const quote = require("../assets/images/quote.png");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setNoticias(data.articles);
        }
      })
      .catch((error) => console.error("Erro ao buscar notícias:", error));
  }, []);
  return (
    <>
      <Carousel fade className="carousel">
        <Carousel.Item id="day1">
          <h1 className="tittleCar">
            <p>Bem-vindo</p>
          </h1>
        </Carousel.Item>

        <Carousel.Item id="day2">
          <h1 className="tittleCar">
            <p> Avalie nossa comida</p>
            <Button className="bt-car">Saiba mais</Button>
          </h1>
        </Carousel.Item>

        <Carousel.Item id="day3">
          <h1 className="tittleCar">
            <p> Sugira uma refeição</p>
            <Button className="bt-car">Saiba mais</Button>
          </h1>
        </Carousel.Item>

        <Carousel.Item id="day4">
          <h1 className="tittleCar">
            <p>Cardápio do dia</p>
            <Button className="bt-car">Saiba mais</Button>
          </h1>
        </Carousel.Item>

        <Carousel.Item id="day5">
          <h1 className="tittleCar">
            <p>Contate-nos </p>
            <Button className="bt-car">Saiba mais</Button>
          </h1>
        </Carousel.Item>
      </Carousel>
      <div id="div-w-cont">
        <Container id="who-cont">

          <Stack direction="horizontal" gap={3}>

            <div className="p-2">
              <h1>Quem somos</h1>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). Lorem Ipsum is simply
              dummy text of the printing and typese
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum <div id="item-block3">
                <Link to="https://santateresa.ifes.edu.br/" id="link-land">
                  <Button id="button-land">Visite o campus</Button>
                </Link>
              </div>
            </div>

            <div className="p-2">
              <Figure className="parallax">
                <Figure.Image src={sun} width={256} height={256} id="sun"></Figure.Image>
                <Figure.Image width={1024} height={1024} alt="171x180" src={island} id="island" />
              </Figure>

            </div>

          </Stack>

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
                  Bem-vindo ao nosso mundo de nutrição e bem-estar. Desfrute de refeições deliciosas que também são boas para você. Descubra um cardápio diversificado, com opções frescas e saudáveis, preparadas com ingredientes de qualidade. Compartilhe suas sugestões para melhorarmos ainda mais. Explore agora!
                </p>
              </div>

            </Row>

            <Row>

              <Figure>
                <Figure.Image src={land} class="animated-image" />
              </Figure>

            </Row>
          </section>


        </Container>
      </div>
      <div>
        <Container className="acord-cont">
          <section>
            <Row>
              <h1>
                Cardápio do dia
              </h1>
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
                    <td>	Arroz, feijão e cenoura cozida</td>
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
              <Col><Row>
              <h1>Perguntas frequentes</h1>
              <p>Com dúvida em mais alguma coisa? Tente nos contatar</p>
            </Row> <Row>
                <Figure>
                 
                    <Figure.Image src={quote} />
                </Figure>
            </Row>
            
          </Col>

        </Row>
        <Row>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>O que é o projeto Nutrifood?</Accordion.Header>
              <Accordion.Body>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Como o site começou?</Accordion.Header>
              <Accordion.Body>

              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Qual a finalidade do projeto?</Accordion.Header>
              <Accordion.Body>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Quem são os tutores?</Accordion.Header>
              <Accordion.Body>

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Quem são os integrantes?</Accordion.Header>
              <Accordion.Body>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </section>
    </Container >
      </div >

  {/* Noticias */ }
  <Container Container className = "main columns news-cont" >
        <div id="news-title">
          <h1>Últimas notícias</h1>
        </div>
        <Row xs={1} md={2} lg={3}>
          {noticias.map((noticia, idx) => (
            <Col key={idx} className="column main-columns">
              <Link to={noticia.url} className="article">
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
        </Container>
      </>

  );
};

export default CarouselConst;
