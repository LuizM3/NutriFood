import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/styles/carousel.scss";
import "../assets/styles/main.scss";
import { Container, Card, Button, Stack, Col, Row, Figure, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const news1 = require("../assets/images/news/1.jpg");
const news2 = require("../assets/images/news/2.jpg");
const news3 = require("../assets/images/news/3.webp");
const news4 = require("../assets/images/news/4.jpeg");
const articles = [
  {
    title: "Campus Santa Teresa realiza evento para inauguração oficial de usina fotovoltaica",
    imageSrc: news1,
    content:
      "O Campus de Santa Teresa do Instituto Federal do Espírito Santo (Ifes), realizou cerimônia de entrega da primeira de suas duas usinas...",
    author: "IFES Santa Teresa",
    comments: "223 visualizações",
    link: "https://conexaosafra.com/graos/producao-de-milho-do-ifes-apresenta-resultados-acima-da-media-nacional/"
  },
  {
    title: '"Só deu tempo de retirar as malas", diz professor do Ifes sobre ônibus incendiado em Santa Teresa',
    imageSrc: news2,
    content:
    "O professor Robson Meirelles era um dos funcionários do Instituto Federal do Espírito Santo (Ifes) que estavam dentro de um ônibus que pegou...",
    author: "IFES Santa Teresa",
    comments: "90 visualizações",
    link: "https://conexaosafra.com/graos/producao-de-milho-do-ifes-apresenta-resultados-acima-da-media-nacional/"
  },
  {
    title: "Produção de milho do Ifes apresenta resultados acima da média nacional",
    imageSrc: news3,
    content:
      "Com um rendimento médio de 50 toneladas por hectare, a produção de milho do Instituto Federal do Espírito Santo (Ifes) Campus Santa Teresa...",
    author: "IFES Santa Teresa",
    comments: "45 visualizações",
    link: "https://conexaosafra.com/graos/producao-de-milho-do-ifes-apresenta-resultados-acima-da-media-nacional/"
  },
];


const island = require("../assets/images/island.png");
const sun = require("../assets/images/sun.png");
const CarouselConst = () => {
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
      <Container>

        <Stack direction="horizontal" gap={3}>

          <div className="p-2">
            <h2>Quem somos</h2>
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
            <Figure className="parallax"><Figure.Image src={sun} width={256} height={256} id="sun"></Figure.Image>
              <Figure.Image
                width={1024}
                height={1024}
                alt="171x180"
                src={island}
                id="island"
              />


            </Figure>

          </div>

        </Stack>

      </Container>
      {/* Noticias */}
      <Container className="main columns news-cont">
        <Row xs={1} md={2} className="g-4">
          {articles.map((article, idx) => (
            <section className="column main-columns" key={idx}>

              <div className="columns">
                <div className="column nested-column">
                  <a className="article" href={article.link}>

                    <Figure className="article-image is-3by2 ">
                      <Figure.Image src={article.imageSrc}>

                      </Figure.Image>

                    </Figure>
                    <div className="article-body">
                      <h2 className="article-title">
                        {article.title}
                      </h2>
                      <p className="article-content">
                        {article.content}
                      </p>
                      <footer className="article-info">
                        <span>{article.author}</span>
                        <span>{article.comments}</span>
                      </footer>
                    </div>
                    
                  </a>
                </div>
              </div>
            </section>
          ))}
        </Row>
    
      </Container>
      {/* Notícias */}
      {/* <Container id="news-cont">
        <Stack> */}
      {/* <Row xs={1} md={2} className="g-4">
            {cardData.map((card, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={card.imageSrc} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}<Link to={card.link}>
                      <Button>Saiba mais</Button>
                    </Link></Card.Text>
                  </Card.Body>


                </Card>
              </Col>
            ))}
          </Row> */}


      {/* </Stack>

      </Container> */}




    </>
  );
};

export default CarouselConst;
