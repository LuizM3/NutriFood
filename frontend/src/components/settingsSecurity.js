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
const passwordValidator = require("password-validator");
const schema = new passwordValidator();
schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(2) // Must have at least 2 digits
  .has()
  .not()
  .spaces() // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]); // Blacklist these values

const SettingsConst = () => {
  const navigate = useNavigate();
  const [senha, setSenha] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
  const [senhaNovaConfirmar, setSenhaNovaConfirmar] = useState("");
  const [spinnerModal, setSpinnerModal] = useState(false);
  const [showPassAlert, setShowPassAlert] = useState(false);
  const [showConfirmAlert, setConfirmAlert] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const [showRequisitoAlert, setRequisitoAlert] = useState(false);
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
  }, [id]);

  const handleSubmitAuth = async (e) => {
    e.preventDefault();
    if (schema.validate(senhaNova) === true) {
      if (senhaNova == senhaNovaConfirmar) {
        try {
          const response = await fetch("http://localhost:9000/editSenha", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, senhaNova, senha }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.message === "PASSOU") {
              setShowAlertSuccess(true);
              setTimeout(() => {
                setShowAlertSuccess(false);
              }, 5000);
              setTimeout(() => {
                setSpinnerModal(true);
              }, 1000);

              setTimeout(() => {
                localStorage.removeItem("id");
                localStorage.removeItem("email");
                localStorage.removeItem("nome");
                localStorage.removeItem("token");
                navigate("/");
              }, 2000);
            } else {
              setErrorAlert(true);
              setTimeout(() => {
                setErrorAlert(false);
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
        }
      } else {
        setConfirmAlert(true);
        setTimeout(() => {
          setConfirmAlert(false);
        }, 5000);
      }
    } else {
      setRequisitoAlert(true);
      setTimeout(() => {
        setRequisitoAlert(false);
      }, 5000);
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

      <Row className="position-fixed alert-row" style={{ marginTop: 100 }}>
        {showPassAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setShowPassAlert(false)}
          >
            Senha atual incorreta
          </Alert>
        )}{" "}
        {showAlertSuccess && (
          <Alert
            variant="success"
            className="align-items-center d-flex fade"
            onClose={() => setShowAlertSuccess(false)}
          >
            Senha alterada com sucesso
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
        {showConfirmAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setErrorAlert(false)}
          >
            Erro na confirmação de senha
          </Alert>
        )}
        {showRequisitoAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setErrorAlert(false)}
          >
            A nova senha não atende os requisitos
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
                    <Link to="/user/settings">
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
                  <h2>Segurança e Privacidade</h2>
                  <p>
                    Bem-vindo à seção de segurança e privacidade. Aqui você pode
                    ajustar configurações importantes para garantir a proteção
                    dos seus dados pessoais.
                  </p>
                  <h3>Alterar senha</h3>
                  <Col lg={8} sm={8} md={12}>
                    <Form
                      onSubmit={handleSubmitAuth}
                      className="formulario-card"
                    >
                      <Stack gap={2}>
                        <Form.Group>
                          <Form.Text>Senha Atual</Form.Text>
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            type="password"
                            placeholder="Digite aqui sua senha atual"
                            value={senha}
                            data-test="form-pass"
                            onChange={(e) => setSenha(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Text>Nova Senha</Form.Text>
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            type="password"
                            placeholder="Digite aqui sua nova senha"
                            value={senhaNova}
                            data-test="form-pass"
                            onChange={(e) => setSenhaNova(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Control
                            type="password"
                            placeholder="Confirme a nova senha"
                            value={senhaNovaConfirmar}
                            data-test="form-pass"
                            onChange={(e) =>
                              setSenhaNovaConfirmar(e.target.value)
                            }
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Text muted>
                            A senha deve conter entre 8-100 caracteres, com ao
                            menos uma letra maiúscula, minúscula e um símbolo.
                            Não pode conter espaços ou emojis.
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-end">
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
                  </Col>
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
