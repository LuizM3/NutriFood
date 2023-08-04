import "../sass/login.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const SignUpConst = () => {
  return (
    <>
      <div className="cont">
        <Row>
          <Col>
            {" "}
            <Form id="form-login">
              <h2>Cadastro</h2>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" />
              </Form.Group>

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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme sua senha"
                />
              </Form.Group>
              <Button type="submit" id="button-login-signup">
                Cadastrar
              </Button>
              <div>
                 <Link to="/login">Já possui conta? Faça login</Link>
              </div>
            </Form>
             
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SignUpConst;
