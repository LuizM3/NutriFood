import "../assets/styles/login.scss";
import { Row, Col, Form, Button, Modal} from "react-bootstrap";
import { Link, redirect } from "react-router-dom";
import React, { useState } from "react";

const SignUpConst = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

 const [successModal, setSuccessModal] = useState(false);
 const [errorModal, setErrorModal] = useState(false);
 const [passcheckModal, setPasscheckModal] = useState(false);
 // teste
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setPasscheckModal(true);
      return;
    }
    if (senha === "" || email === "" || nome === "") {
      setErrorModal(true);
      return;
    }    

    try {
      const response = await fetch("http://localhost:9000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (response.ok) {
        setSuccessModal(true); // Exibe o modal
        
      } else {
        setErrorModal(true);
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  return (
    <>
     <Modal show={successModal} onHide={() => setSuccessModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Sucesso!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Cadastro concluído</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setSuccessModal(false)}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>



     <Modal show={errorModal} onHide={() => setErrorModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Erro!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Erro ao cadastrar usuário</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setErrorModal(false)}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>


     <Modal show={passcheckModal} onHide={() => setPasscheckModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Erro!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Erro na confirmação de senha, por favor tente novamente</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setPasscheckModal(false)}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>

      <div className="cont">
        <Row>
          <Col>
            <Form id="form-login" onSubmit={handleSubmit}>
              <h2>Cadastro</h2>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Form.Group>

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
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
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
