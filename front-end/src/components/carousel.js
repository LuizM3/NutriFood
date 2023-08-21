import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../sass/carousel.scss";
import "../sass/main.scss";
import { Container, Card, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselConst = () => {
  return (
    <>
      <Carousel fade className="carousel">
        <Carousel.Item id="day1">
          <h1 className="tittleCar">Bem-vindo </h1>
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
      {/* Divisão - para visualizar*/}
      <div id="container-div">
        <Stack direction="horizontal" gap={3}>
          <div className="p-2">
            <div id="item-block"></div>
          </div>

          <div className="p-3">
            <div id="item-block2">
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
              with the release of Letraset sheets containing Lorem Ipsum
            </div>
            <div id="item-div"></div>
            <div id="item-block3">
              <Link to="https://santateresa.ifes.edu.br/" id="link-land">
                <Button id="button-land">Visite o campus</Button>
              </Link>
            </div>
          </div>
        </Stack>
      </div>

      {/* Noticias */}
      <div id="container-main" className="d-md-flex gap-3">

        <Card className="card">
          <Card.Header>Noticias</Card.Header>
          <Card.Body className="d-flex flex-column justify-content-around">
            <Card.Title>Notícias do mundo nutricional</Card.Title>
            <Card.Text>
              Recentemente, surgiram várias notícias interessantes no campo da
              nutrição, trazendo insights e descobertas surpreendentes. Uma nova
              pesquisa revelou a importância de uma alimentação equilibrada para
              o bem-estar mental. De acordo com o estudo, uma dieta rica em
              frutas, legumes e alimentos integrais está associada a um menor
              risco de desenvolver condições como ansiedade e depressão. Além
              disso, cientistas descobriram uma ligação fascinante entre a
              nutrição e a saúde do cérebro.
            </Card.Text>
            <Button className="bt-more">Saiba mais</Button>
          </Card.Body>
        </Card>

       
        <Card className="card">
          <Card.Header>Noticias</Card.Header>
          <Card.Body className="d-flex flex-column justify-content-around">
            <Card.Title>Notícias do mundo nutricional</Card.Title>
            <Card.Text>
              Recentemente, surgiram várias notícias interessantes no campo da
              nutrição, trazendo insights e descobertas surpreendentes. Uma nova
              pesquisa revelou a importância de uma alimentação equilibrada para
              o bem-estar mental. De acordo com o estudo, uma dieta rica em
              frutas, legumes e alimentos integrais está associada a um menor
              risco de desenvolver condições como ansiedade e depressão. Além
              disso, cientistas descobriram uma ligação fascinante entre a
              nutrição e a saúde do cérebro.
            </Card.Text>
            <Button className="bt-more">Saiba mais</Button>
          </Card.Body>
        </Card>
      
        <Card className="card">
          <Card.Header>Noticias</Card.Header>
          <Card.Body className="d-flex flex-column justify-content-around">
            <Card.Title>Alimentação diversificada</Card.Title>
            <Card.Text>
              Uma notícia interessante é o crescente reconhecimento dos
              benefícios dos alimentos fermentados para a saúde digestiva.
              Alimentos como iogurte, kombucha e kimchi são ricos em
              probióticos, que são bactérias benéficas para o intestino. O
              consumo regular desses alimentos pode ajudar a fortalecer a saúde
              intestinal, melhorar a digestão, aumentar a absorção de nutrientes
              e fortalecer o sistema imunológico. Essas descobertas destacam a
              importância de uma alimentação equilibrada e diversificada.
            </Card.Text>
            <Button className="bt-more">Saiba mais</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CarouselConst;
