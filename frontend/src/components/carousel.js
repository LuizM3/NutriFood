import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/styles/carousel.scss";
import "../assets/styles/main.scss";
import { Container, Accordion, Button, Col, Row, Figure, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const apiKey = "eedb530eb8a34cd2b4049d1be24cde1a";
const pageSize = 6;
const apiUrl = `https://newsapi.org/v2/everything?q=news&from=2023-08-14&pageSize=${pageSize}&sortBy=publishedAt&apiKey=${apiKey}`;


const CarouselConst = () => {
  const land = require('../assets/images/land.png');
  const island = require("../assets/images/island.png");
  const sun = require("../assets/images/sun.png");
  const quote = require("../assets/images/quote.png");
  const noticias = [
    {
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsantateresa.ifes.edu.br%2Findex.php%2Fnoticias%2F17707-ifes-campus-santa-teresa-recebe-a-visita-de-alunos-da-escola-eeefm-joao-neiva&psig=AOvVaw3GTZRKM0newvCzGvuqQJuJ&ust=1695515166403000&source=images&cd=vfe&opi=89978449&ved=0CBIQjhxqGAoTCIi3l6u8v4EDFQAAAAAdAAAAABCnAQ",
      urlToImage: "https://santateresa.ifes.edu.br/images/Noticias_2022/20220531_152733.jpg",
      title: "Ifes – Campus Santa Teresa - Ifes Campus Santa Teresa recebe a visita de alunos da Escola EEEFM João Neiva.",
      description:
        "No dia 31 de maio e 01 de junho, cerca de 140 alunos de 1° e 2° séries do Ensino Médio Integral e 3°séries do Ensino Médio Regular da escola EEEFM JOÃO NEIVA visitaram o Ifes Campus Santa Teresa. Os alunos tiveram a oportunidade de conhecer os cursos superiores ministrados no Campus e participar de algumas práticas realizadas nos laboratórios nos cursos de Bacharelado em Agronomia, Licenciatura em Ciências Biológicas e Tecnologia em Sistemas para Internet.",
      author: "IFES Santa Teresa",
      name: "Teste"
    },
    {
      url: "https://www.agazeta.com.br/concursos-e-empregos/empregos/ifes-abre-mais-de-mil-vagas-em-cursos-tecnicos-para-2-semestre-0423",
      urlToImage: "https://midias.agazeta.com.br/2023/01/12/ifes-instituto-federal-948470.jpg",
      title: "A Gazeta | Ifes abre mais de mil vagas em cursos técnicos para 2° semestre",
      description:
        "O Instituto Federal do Espírito Santo (Ifes) vai abrir inscrições para 1.272 vagas em cursos técnicos integrados, concomitantes e subsequentes e do Proeja. As oportunidades são para aulas presenciais e a distância em 12 unidades da instituição, com início das aulas no segundo semestre de 2023.",
      author: "IFES Santa Teresa",
      name: "Teste"
    },
    {
      url: "https://santateresa.ifes.edu.br/index.php/noticias/17792-jogo-22",
      urlToImage: "https://santateresa.ifes.edu.br/images/Noticias_2022/1662633773093.jpg",
      title: "Ifes – Campus Santa Teresa - O Ifes Campus Santa Teresa participou dos jogos da Etapa Regional Serrana - JIFES 2022",
      description:
        "No dia 7 de setembro, o Campus Venda Nova do Imigrante recebeu a Etapa Regional Serrana, com disputas de futsal e vôlei. O Ifes Campus Santa Teresa participou nas duas modalidades e foi vitorioso nas modalidades de vôlei masculino, vôlei feminino e futsal masculino.O futsal feminino foi vice.",
      author: "IFES Santa Teresa",
      name: "Teste"
    },
    {
      url: "https://www.ifes.edu.br/noticias/21053-campus-santa-teresa-realiza-evento-para-inauguracao-oficial-de-usina-fotovoltaica",
      urlToImage: "https://www.ifes.edu.br/images/Foto_placa.jpg",
      title: "Campus Santa Teresa realiza evento para inauguração oficial de usina fotovoltaica",
      description:
        "O Campus de Santa Teresa do Instituto Federal do Espírito Santo (Ifes), realizou cerimônia de entrega da primeira de suas duas usinas...",
      author: "IFES Santa Teresa",
      name: "Teste"
    },
    {
      url: "https://www.folhavitoria.com.br/geral/noticia/08/2023/hospital-madre-regina-santa-teresa-es-interditado-defesa-civil-desabamento",
      urlToImage: "https://redesantacatarina.org.br/hospital/madreregina/Imagens/Galeria%20de%20Fotos/hmrp-principal.jpg",
      title: "Defesa Civil interdita hospital de Santa Teresa e atendimentos são suspensos por 48h",
      description:
        "Parte do Hospital Madre Regina ProtMann, em Santa Teresa, na Região Serrana do Espírito Santo, foi interditado pela Defesa Civil por risco de desabamento, após uma obra particular ao lado ceder e atingir algumas alas do hospital.",
      author: "IFES Santa Teresa",
      name: "Teste"
    },
    {
      url: "https://www.agazeta.com.br/es/policia/policia-investiga-furtos-em-80-tumulos-em-cemiterio-de-santa-teresa-0923",
      urlToImage: "https://midias.agazeta.com.br/2023/09/20/criminosos-roubaram-todo-material-metalico-desde-crucifixos-ate-letreiros-1869040-article.jpeg",
      title: "Polícia investiga furtos em 80 túmulos em cemitério de Santa Teresa",
      description:
        "Moradores de Santa Teresa, na região Serrana do Espírito Santo, encontraram 80 túmulos vandalizados no Cemitério Municipal, localizado no bairro Vila Nova. A situação foi observada na última terça-feira (19). Os criminosos furtaram material metálico dos túmulos, de crucifixos a letreiros. A Polícia Civil informou que está investigando o caso.",
      author: "IFES Santa Teresa",
      name: "Teste"
    },
  ];
  // const [noticias, setNoticias] = useState([]);
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.status === "ok") {
  //         setNoticias(data.articles);
  //       }
  //     })
  //     .catch((error) => console.error("Erro ao buscar notícias:", error));
  // }, []);
  return (
    <>

      <Carousel slide={true} interval={950} >
        <Carousel.Item id="day1">

          <h1 className="tittleCar">
            <p>Bem-vindo</p>
          </h1>
        </Carousel.Item>
        <Carousel.Item id="day2">

          <h1 className="tittleCar">
            <p> Avalie nossa comida</p>
            <Link to="/reviews">

              <Button className="bt-car">Saiba mais</Button>
            </Link>
          </h1>

        </Carousel.Item>
        <Carousel.Item id="day3">
          <h1 className="tittleCar">
            <p> Sugira uma refeição</p>
            <Link to="/suggestions">

              <Button className="bt-car">Saiba mais</Button>
            </Link>
          </h1>
        </Carousel.Item>

        <Carousel.Item id="day4">
          <h1 className="tittleCar">
            <p>Cardápio do dia</p>
            <Link to="/menu">

              <Button className="bt-car">Saiba mais</Button>
            </Link>
          </h1>
        </Carousel.Item>

        <Carousel.Item id="day5">
          <h1 className="tittleCar">
            <p>Contate-nos </p>
            <Link to="/contact">

              <Button className="bt-car">Saiba mais</Button>
            </Link>
          </h1>
        </Carousel.Item>
      </Carousel>
      <div id="div-l-cont">
        <Container>
          <section><Row id="as">

            <Figure className="parallax">
              <Figure.Image src={sun} />
              <Figure.Image src={island} />
            </Figure>

          </Row>
            <Row>
              <div>
                <h1>
                  Quem somos?
                </h1>
                <p>
                  O Restaurante Institucional(RI) do Ifes Campus Santa Teresa tem o objetivo de fornecer
                  refeições equilibradas e adequadas às necessidades nutricionais dos estudantes, segundo
                  os princípios dietéticos preconizados pelas normas de alimentação definidas pelo Ministério
                  da Educação, e com observância das normas gerais de higiene sanitária para a produção
                  da alimentação. Somos mais do que um restaurante; somos uma jornada gastronómica
                  dedicada à nutrição consciente e ao prazer de comer bem. Nossa paixão pela saúde e
                  bem-estar é o nosso ingrediente secreto.
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
                  Bem-vindo ao nosso mundo de nutrição e bem-estar. Desfrute de refeições deliciosas que também são boas para você. Descubra um cardápio diversificado, com opções frescas e saudáveis, preparadas com ingredientes de qualidade. Compartilhe suas sugestões para melhorarmos ainda mais. Explore agora!
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

                    <p>
                      O projeto nutrifood é um projeto criado pelos alunos Bryan Zucoloto, Ruan Pablo, Luiz
                      Felipe, Filipe Kiefer, Alex Brandão e Heitor Poleze; do terceiro ano, do curso de informática
                      para a internet no campus IFES Santa Teresa. No terceiro ano do curso, todos os alunos
                      devem desenvolver um projeto e apresentar a fim de demonstrar seus conhecimentos
                      adquiridos ao longo do curso. Nós do projeto nutrifood aproveitamos essa oportunidade
                      para desenvolver algo que ajude a nossa comunidade, não apenas um projeto para passar
                      de ano, a partir dessa mentalidade decidimos desenvolver um site nutricional do restaurante
                      institucional do campus.
                    </p>

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Como o site começou?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Ao pensarmos sobre o projeto, todos entramos de acordo que queríamos algo que ajudasse
                      nossa comunidade e então analisamos nossas possibilidades, que numa primeira conversa
                      foram muitas, após algumas reuniões e com a ajuda dos orientadores fomos encaminhados
                      a nutricionista do campus que tinha algumas dificuldades na captação de dados sobre o
                      restaurante e as avaliações sobre as refeições realizadas no mesmo. Ao entendermos as
                      preocupações da nutricionista foi-se decidido embarcar nessa aventura e começamos a
                      desenvolver a primeira versão do site em uso atualmente.
                    </p>

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Qual a finalidade do projeto?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      O projeto começou a partir das necessidades da nutricionista do IFES, que precisava
                      realizar diversas pesquisas e apresentar ao final do ano a fim de manter a funcionalidade do
                      restaurante institucional, pesquisas essas que se dividiam em muitas subseções que eram
                      muito difícil de unir e apresentar ao fim do ano. Tendo conhecimento dessas necessidades e
                      somando necessidades que nós como alunos tínhamos como por exemplo: saber o
                      cardápio diários e semanais, uma forma de conseguir se comunicar com a direção do
                      restaurante e outras demandas, pensamos a criação desse projeto que reúne tanto as
                      necessidades da direção na captação e análise de dados como a dos alunos na
                      visualização e transmissão de informações a respeito da sua alimentação.

                    </p>

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Quem são os tutores?</Accordion.Header>
                  <Accordion.Body>

                    <p>
                      Professor Milton
                    </p>
                    <p>
                      Professor Fábio Bigati (colocar uma foto e uma breve fala sobre a história dele)
                      idade, formação e uma breve fala sobre sua experiência profissional.
                      professor da área técnica.
                    </p>
                    <p>
                      Professor Filipe Ribeiro (colocar uma foto e uma breve fala sobre a história dele)
                      idade, formação e uma breve fala sobre sua experiência profissional.
                      professor da área básica.
                    </p>


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

      {/* Noticias */}
      <Container className="main columns news-cont" >
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
      </Container>
    </>

  );
};

export default CarouselConst;
