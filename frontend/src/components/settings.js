import {
  Button,
  Row,
  Container,
  Col,
  ListGroup,
  ListGroupItem,
  Figure,
  Form,
  Modal,
  Alert,
  Spinner,
  Offcanvas,
  Stack,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { checkEmailUniqueness } from "../service/EmailService";
const SettingsConst = () => {
  const navigate = useNavigate();
  const [emailNovo, setEmailNovo] = useState("");
  const [senha, setSenha] = useState("");
  const email = localStorage.getItem("email");
  const [spinnerModal, setSpinnerModal] = useState(false);
  const [passModal, setPassModal] = useState(false);
  const [showPassAlert, setShowPassAlert] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const [showEmailAlert, setEmailAlert] = useState(false);
  const id = localStorage.getItem("id");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    } else if (id == null) {
      navigate("/login");
    }
  }, [emailNovo, id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailUnique = await checkEmailUniqueness(emailNovo);
    if (isEmailUnique === false) {
      setEmailAlert(true);
      setTimeout(() => {
        setEmailAlert(false);
      }, 5000);
    } else {
      setPassModal(true);
    }
  };

  const handleSubmitAuth = async (e) => {
    e.preventDefault();
    setPassModal(false);
    try {
      const response = await fetch("http://localhost:9000/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailNovo, email, senha }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === "CRUD") {
          setShowAlertSuccess(true);
          setTimeout(() => {
            setShowAlertSuccess(false);
          }, 5000);
          setTimeout(() => {
            setSpinnerModal(true);
          }, 1000);
          setTimeout(() => {
            navigate("/");
            localStorage.removeItem("id");
            localStorage.removeItem("email");
            localStorage.removeItem("nome");
            localStorage.removeItem("token");
          }, 2000);
          return;
        } else {
          setShowPassAlert(true);
          setTimeout(() => {
            setShowPassAlert(false);
          }, 5000);
        }
      } else {
        setShowPassAlert(true);
        setTimeout(() => {
          setShowPassAlert(false);
        }, 5000);
      }
    } catch (error) {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 5000);
      console.error("Erro ao enviar requisição:", error);
    }
  };
  const isResponsive = useMediaQuery({ query: "(max-width: 768px)" });
  const arrow = require("../assets/images/left-arrow.png");

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

      <Modal
        show={passModal}
        onHide={() => setPassModal(false)}
        className="modal modal-senha"
        backdrop="static"
        data-test="links"
      >
        <Modal.Body>
          <Form onSubmit={handleSubmitAuth} className="formulario-card">
            <Stack gap={2}>
              <Form.Group>
                <Form.Text>Digite sua senha</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  data-test="form-pass"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Button
                  className="bt-sub"
                  type="submit"
                  id="button-login-signup"
                >
                  Autenticar
                </Button>
              </Form.Group>
            </Stack>
          </Form>
        </Modal.Body>
      </Modal>

      <Row className="position-fixed alert-row" style={{ marginTop: 100 }}>
        {showPassAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setShowPassAlert(false)}
          >
            Senha incorreta
          </Alert>
        )}{" "}
        {showEmailAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setEmailAlert(false)}
          >
            Email já cadastrado
          </Alert>
        )}{" "}
        {showAlertSuccess && (
          <Alert
            variant="success"
            className="align-items-center d-flex fade"
            onClose={() => setShowAlertSuccess(false)}
          >
            Email alterado com sucesso
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
      <div className="bg-light div-config d-flex justify-content-center align-items-center">
        <Container className="cont-resp">
          <Row className="w-100 overflow-hidden pb-0 d-flex justify-content-center row-response">
            {isResponsive ? (
              <div className="tab-response p-0">
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Configurações</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <ListGroup className="mb-3 tab-resp d-flex p-0 pt-1">
                      <ListGroupItem>
                        <Link to="/user/settings">
                          <Button>Conta do Usuário</Button>
                        </Link>
                      </ListGroupItem>
                      <ListGroupItem>
                        <Link to="/user/settings-security">
                          <Button>Segurança e Privacidade</Button>
                        </Link>
                      </ListGroupItem>
                      <ListGroupItem>
                        <Link to="/user/settings-data">
                          <Button>Coleta de Dados</Button>
                        </Link>
                      </ListGroupItem>
                    </ListGroup>
                  </Offcanvas.Body>
                </Offcanvas>
                <Row>
                  <Col sm={8} xs={8} className="d-flex align-items-center mt-3">
                    <Link
                      to="/"
                      className="text-decoration-none back d-flex align-items-center"
                    >
                      <Figure className="d-flex align-items-center m-0 p-0">
                        <Figure.Image width={25} height={25} src={arrow} />{" "}
                        <Figure.Caption></Figure.Caption>
                      </Figure>
                      Voltar à página principal{" "}
                    </Link>
                  </Col>
                  <Col
                    sm={4}
                    xs={4}
                    className="off-canv d-flex align-items-center mt-3 justify-content-end"
                  >
                    <Button variant="primary" onClick={handleShow}>
                      <ion-icon name="menu"></ion-icon>
                    </Button>
                  </Col>
                </Row>
              </div>
            ) : (
              <Col lg={4} xs={4}>
                <div>
                  <Link to="/" className="text-decoration-none back">
                    <Figure>
                      <Figure.Image width={25} height={25} src={arrow} />{" "}
                      <Figure.Caption></Figure.Caption>
                    </Figure>
                    Voltar à página principal{" "}
                  </Link>
                </div>
                <ListGroup>
                  <ListGroupItem>
                    <Link>
                      <Button className="bg-transparent border-0 text-black w-100">
                        <Row className="d-flex align-items-center">
                          <Col
                            md={4}
                            xs={4}
                            className="d-flex justify-content-center"
                          >
                            <ion-icon name="person-sharp"></ion-icon>
                          </Col>
                          <Col
                            md={8}
                            xs={8}
                            className="d-flex justify-content-center"
                          >
                            Conta do Usuário
                          </Col>
                        </Row>
                      </Button>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/user/settings-security">
                      <Button className="bg-transparent border-0 text-black w-100">
                        <Row className="d-flex align-items-center">
                          <Col
                            md={4}
                            xs={4}
                            className="d-flex justify-content-center"
                          >
                            <ion-icon name="lock-open-sharp"></ion-icon>
                          </Col>
                          <Col
                            md={8}
                            xs={8}
                            className="d-flex justify-content-center"
                          >
                            Segurança e Privacidade
                          </Col>
                        </Row>
                      </Button>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/user/settings-data">
                      <Button className="bg-transparent border-0 text-black w-100">
                        <Row className="d-flex align-items-center">
                          <Col
                            md={4}
                            xs={4}
                            className="d-flex justify-content-center"
                          >
                            <ion-icon name="server-sharp"></ion-icon>
                          </Col>
                          <Col
                            md={8}
                            xs={8}
                            className="d-flex justify-content-center"
                          >
                            Coleta de Dados
                          </Col>
                        </Row>
                      </Button>
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            )}

            <Col
              lg={8}
              xs={12}
              md={8}
              className="cont-config2 overflow-scroll border bg-white"
            >
              <div className="">
                <div className="div-pattern">
                  <h2>Configurações da Conta</h2>
                  <p>
                    Bem-vindo às configurações da sua conta. Aqui você pode
                    personalizar as preferências e informações relacionadas à
                    sua conta.
                  </p>
                  <h3>Informações Pessoais</h3>
                  <p>
                    Atualize suas informações pessoais, como nome,
                    classificações, etc.
                  </p>
                  <Form onSubmit={handleSubmit} className="formulario-card">
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Alterar email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="nome@exemplo.com"
                        value={emailNovo}
                        onChange={(e) => setEmailNovo(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Text>
                      Seu email deve conter as normas padrões de endereço de
                      email.
                    </Form.Text>
                    <Row>
                      <Col className="justify-content-end d-flex m-3 mt-0 mb-3">
                        <Form.Group>
                          <Button type="submit" className="bt-sub">
                            Enviar
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                  <h3>Informações de coleta</h3>
                  <p>
                    Marque ou altere suas informações para coleta nutricional
                    para o funcionamento do site.
                  </p>
                  <Form>
                    <p>Escolha sua opção de prato:</p>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Vegetariano"
                    />
                    <p>Escolha as refeições que realiza na instituição:</p>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Café da manhã"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Almoço"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Lanche da tarde"
                    />
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      label="Jantar"
                    />
                  </Form>
                  <p>Escolha seu vínculo com a instituição:</p>
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`vinculo-${type}`} className="mb-3">
                        <Form.Check
                          label="Ensino médio"
                          name="group1"
                          type={type}
                          id={`vinculo-${type}-1`}
                        />
                        <Form.Check
                          label="Servidor, docente ou tercerizado"
                          name="group1"
                          type={type}
                          id={`vinculo-${type}-2`}
                        />
                        <Form.Check
                          label="Graduação"
                          name="group1"
                          type={type}
                          id={`vinculo-${type}-3`}
                        />
                        <Form.Check
                          label="Outro"
                          name="group1"
                          type={type}
                          id={`vinculo-${type}-4`}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SettingsConst;
