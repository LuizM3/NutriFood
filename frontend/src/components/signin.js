import "../assets/styles/login.scss";
import "../assets/styles/suggestions.scss";
import {
  Modal,
  Row,
  Figure,
  Form,
  Button,
  Spinner,
  Container,
  Alert,
  Stack,
  Col
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const logo = require("../assets/images/logo.png");
const LoginConst = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [spinnerModal, setSpinnerModal] = useState(false);
  const [showPassAlert, setShowPassAlert] = useState(false); // Estado para controlar a exibição do alert
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const id = localStorage.getItem("id");
  useEffect(() => {
    if (showAlertSuccess && id == 1) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 5500);
    } else if (id == 1) {
      navigate("/dashboard");
    }
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (senha === "" || email === "") {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 5000);
      return;
    }

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
        const token = data.token;
        const nome = data.nome;
        const id = data.id;

        localStorage.setItem("token", token);
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("id", id);

        if (data.message === "Login") {
          setShowAlertSuccess(true);
          setTimeout(() => {
            setShowAlertSuccess(false);
          }, 4000);
          setTimeout(() => {
            setSpinnerModal(true);
          }, 1000);

          setTimeout(() => {
            navigate("/");
          }, 5000);
        } else {
          // Credenciais inválidas
          setShowPassAlert(true);
          setTimeout(() => {
            setShowPassAlert(false);
          }, 5000);
        }
      } else {
        // Tratar outros erros
        setErrorAlert(true);
        setTimeout(() => {
          setErrorAlert(false);
        }, 5000);
      }
    } catch (error) {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 5000);    }
  };

  return (
    <>
      <Modal
        show={spinnerModal}
        onHide={() => setSpinnerModal(false)}
        className="modal spinner-modal"
        backdrop="static"
        data-test="links"
      >
        <Modal.Body>
          <Spinner
            animation="border"
            role="status"
            show={spinnerModal}
            onHide={() => setSpinnerModal(false)}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Modal.Body>
      </Modal>

      <Row className="position-fixed alert-row" style={{ marginTop: 100 }}>
        {showPassAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setShowPassAlert(false)}
          >
            Usuário inválido ou senha!
          </Alert>
        )}{" "}
        {showAlertSuccess && (
          <Alert
            variant="success"
            className="align-items-center d-flex fade"
            onClose={() => setShowAlertSuccess(false)}
          >
            Login bem-sucedido
          </Alert>
        )}
        {showErrorAlert && (
          <Alert
            variant="danger"
            className="align-items-center d-flex fade"
            onClose={() => setErrorAlert(false)}
          >
            Erro ao enviar requisição
          </Alert>
        )}
      </Row>
      <div id="div-z-cont" data-test="links">
        <Container className="login-cont">
          <section>
            <Row>
              <Form id="form-login" onSubmit={handleSubmit}>
                <div id="div-form-l">
                  <Figure className="logo-tog">
                    <Figure.Image src={logo} />
                  </Figure>

                  <h1>Login</h1>
                  {/* <div className="in-section">
                    <Form.Group className="mb-3">
                      <Form.Label>Insira seus dados de login</Form.Label>
                    </Form.Group>
                  </div> */}

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
                    <Stack gap={2} as="row" className="w-100 d-flex flex-row">
                      <Col>
                        <Link to={"/sign-up"}>Cadastre-se</Link>
                      </Col>
                      <Col>
                        <Button
                          type="submit"
                          className="bt-sub w-100"
                          id="button-login-signup"
                        >
                          Entrar
                        </Button>
                      </Col>
                    </Stack>
                  </div>
                </div>
              </Form>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
};

export default LoginConst;
