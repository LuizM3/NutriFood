import "../assets/styles/login.scss";
import { Modal, Row, Figure, Form, Button, Spinner, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const arrow = require("../assets/images/left-arrow.png");
const logo = require("../assets/images/logo.png");
const LoginConst = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [spinnerModal, setSpinnerModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.message === "Login") {


          console.log("Token feito");
          setTimeout(() => {
            setSpinnerModal(true);
          }, 1000);

          setTimeout(() => {
            navigate("/");
          }, 6000); // Atraso de 5 segundos (5000 milissegundos)
          // Login bem-sucedido
        } else {
          // Credenciais inválidas
          setErrorModal(true);

          alert("1");

        }
      } else {
        // Tratar outros erros
        setErrorModal(true);
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  return (
    <>
      <Modal show={spinnerModal} onHide={() => setSpinnerModal(false)} className="modal" data-test="links">
        <Modal.Body>
          <Spinner
            variant="light"
            animation="border"
            role="status"
            show={spinnerModal}
            onHide={() => setSpinnerModal(false)}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Modal.Body>
      </Modal>

      <Modal show={successModal} onHide={() => setSuccessModal(false)} data-test="links">
        <Modal.Body>
          Login concluído
        </Modal.Body>

      </Modal>

      <Modal show={errorModal} onHide={() => setErrorModal(false)} className="modal" data-test="links">
        <Modal.Header closeButton>
          <Modal.Title>Erro!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Erro ao fazer login</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setErrorModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <div id="div-z-cont">
        <Container className="login-cont">
          <section>
            <Row>
              <Form id="form-login" onSubmit={handleSubmit}>
                <div id="div-arrow">
                  <Link to="/" id="arrow">
                    <Figure>
                      <Figure.Image src={arrow}></Figure.Image>
                    </Figure>
                  </Link>
                </div>
                <div id="div-form-l">
                  <Figure>
                    <Figure.Image src={logo} />
                  </Figure>
                  <h1>Login</h1>
 <div className="in-section">
                  <Form.Group className="mb-3">
                    <Form.Label>Insira seus dados de login</Form.Label>

                  </Form.Group>
                </div>

                <div className="in-section">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Digite seu email"
                      value={email}
                      data-test="form-email"
                      onChange={(e) => setEmail(e.target.value)}
                    /> 
                    <Form.Control
                      type="password"
                      placeholder="Digite sua senha"
                      value={senha}
                      data-test="form-pass"
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </Form.Group>
                </div>

                <div id="div-btn">
                  <Link to="/sign-up">Cadastre-se agora</Link>
                  <Button type="submit" id="button-login-signup">
                    Entrar
                  </Button>
                </div>
                </div>

               


              </Form>

            </Row>
          </section>
        </Container>

      </div>







      {/* <Form.Group className="mb-3" controlId="formBasicEmail">



        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">

        </Form.Group>
        {" "} */}


    </>
  );
};

export default LoginConst;
