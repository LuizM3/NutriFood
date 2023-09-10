import "../assets/styles/login.scss";
import { Modal, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <Modal show={spinnerModal} onHide={() => setSpinnerModal(false)} className="modal">
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

      <Modal show={successModal} onHide={() => setSuccessModal(false)}>
        <Modal.Body>
          Login concluído
        </Modal.Body>

      </Modal>

      <Modal show={errorModal} onHide={() => setErrorModal(false)} className="modal">
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

      <div className="cont">
        <div id="in-cont">
          <Form id="form-login" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <section className="mb-4">
              <div className="in-section">
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Label>Senha</Form.Label>
                </Form.Group>
              </div>
              <div id="linha-vertical"></div>
              <div className="in-section">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  /> <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  /> 
                </Form.Group>
              </div>
            </section> 
            {/* <Form.Check type="checkbox" label="Lembrar de mim" /> */}
            <div id="div-btn"> <div id="div-btn">
              <Link to="/sign-up">Cadastre-se agora</Link>
            </div>
              <Button type="submit" id="button-login-signup">
                Entrar
              </Button>
            </div>

           
          </Form>



        </div>


        {/* <Form.Group className="mb-3" controlId="formBasicEmail">



        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">

        </Form.Group>
        {" "} */}

      </div>
    </>
  );
};

export default LoginConst;
