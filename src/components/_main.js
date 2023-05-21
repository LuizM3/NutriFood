import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "../Sass/_main.scss"

const Section2 = () => {
    return (
        <>
      <Container id="container-main">
      <Row>
        <Col>Horário de funcionamento</Col>
        <Col>Feedback dos alunos</Col>
        <Col>Notícias</Col>
      </Row>
    </Container>
        </>
    )
}

export default Section2;