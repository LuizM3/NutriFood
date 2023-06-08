import React from "react";
import { Container, Col, Card, Button, CardGroup } from 'react-bootstrap';
import "../Sass/_main.scss"

const Section2 = () => {
  return (
    <>
      <Container id="container-main" className="d-md-flex gap-3">
          <Card className="card">
            <Card.Header>Não sei o que vai ter aqui</Card.Header>
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Header>Não sei o que vai ter aqui</Card.Header>
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.                 With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          
      </Container>
    </>
  )
}

export default Section2;