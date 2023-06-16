import React from "react";
import { Container, Col, Card, Button, CardGroup } from 'react-bootstrap';
import "../Sass/_main.scss"

const Section2 = () => {
  return (
    <>
      <Container id="container-main" className="d-md-flex gap-3">
          <Card className="card">
            <Card.Header>Noticias</Card.Header>
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title>Notícias do mundo nutricional</Card.Title>
              <Card.Text>Recentemente, surgiram várias notícias interessantes no campo da nutrição, trazendo insights e descobertas surpreendentes. Uma nova pesquisa revelou a importância de uma alimentação equilibrada para o bem-estar mental. De acordo com o estudo, uma dieta rica em frutas, legumes e alimentos integrais está associada a um menor risco de desenvolver condições como ansiedade e depressão.

Além disso, cientistas descobriram uma ligação fascinante entre a nutrição e a saúde do cérebro.
</Card.Text>
<Button className="bt-more">Saiba mais</Button>
            </Card.Body>
          </Card>
          <Card className="card">
            <Card.Header>Noticias</Card.Header>
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title>Alimentação diversificada</Card.Title>
              <Card.Text>Uma notícia interessante é o crescente reconhecimento dos benefícios dos alimentos fermentados para a saúde digestiva. Alimentos como iogurte, kombucha e kimchi são ricos em probióticos, que são bactérias benéficas para o intestino. O consumo regular desses alimentos pode ajudar a fortalecer a saúde intestinal, melhorar a digestão, aumentar a absorção de nutrientes e fortalecer o sistema imunológico.

Essas descobertas destacam a importância de uma alimentação equilibrada e diversificada.</Card.Text>
<Button className="bt-more">Saiba mais</Button>
            </Card.Body>
          </Card>
          
          
      </Container>
    </>
  )
}

export default Section2;