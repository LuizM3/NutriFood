import "../assets/styles/login.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const LoginConst = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha: password }),
      });

      if (response.ok) {
        // Faça algo após o sucesso, como redirecionar o usuário
        console.log("Login bem-sucedido");
      } else {
        // Trate erros de acordo
        console.error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  return (
    <>
      <div className="cont">
        <Row className="row">
          <Col>
            <Form id="form-login" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Endereço de email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Nós nunca iremos compartilhar seu email com terceiros
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembrar de mim" />
              </Form.Group>
              <Button type="submit" id="button-login-signup">
                Entrar
              </Button>
              <div>
                <Link to="/sign-up">Não tem conta? Cadastre-se agora</Link>
              </div>{" "}
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginConst;
