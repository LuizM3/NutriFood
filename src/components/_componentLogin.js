import "../Sass/_componentLogin.scss";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import React from 'react';

const Login = () => {
    return (
        <>
        <Container className="cont">
      <Row>
        <Col> <Form>
          <h2>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
        <Form.Text className="text-muted">
          Nós nunca iremos compartilhar seu email com terceiros
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar de mim" />
      </Form.Group>
      <Button type="submit" id="button-login">
        Entrar
      </Button>
      <Form>     <a href="#cadastro">Não tem conta? Cadastre-se agora</a></Form>
    </Form></Col>
      </Row>
    </Container>
    </>
    );

}

export default Login;