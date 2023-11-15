import {
  Button,
  Row,
  Container,
  Col,
  ListGroup,
  ListGroupItem,
  Figure,
  Form,
  Tabs,
  Tab,
  Modal,
  Alert,
  Spinner,
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
  const [showPassAlert, setShowPassAlert] = useState(false); // Estado para controlar a exibição do alert
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const id = localStorage.getItem("id");
  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    } else {
      setContent(buttonContents["a"]); // Atualiza o conteúdo para o botão "a"
    }
  }, [emailNovo, id]);

  const [content, setContent] = useState(
    <div>
      <h1>Menu de configurações</h1>
      <p>Selecione alguma opção de configuração ao lado esquerdo</p>
    </div>
  );
  const handleTabClick = (buttonKey) => {
    handleButtonClick(buttonKey);
  };
  const handleButtonClick = (buttonKey) => {
    setContent(buttonContents[buttonKey]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailUnique = await checkEmailUniqueness(emailNovo);
    console.log(emailNovo);
    console.log(isEmailUnique);
    if (isEmailUnique === false) {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
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
          localStorage.removeItem("id");
          localStorage.removeItem("email");
          localStorage.removeItem("nome");
          localStorage.removeItem("token");

          setShowAlertSuccess(true);
          setTimeout(() => {
            setShowAlertSuccess(false);
          }, 5000);
          setTimeout(() => {
            setSpinnerModal(true);
          }, 1000);
          setTimeout(() => {
            navigate("/");
          }, 2000);
          return;
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
      console.error("Erro ao enviar requisição:", error);
    }
  };
  const isResponsive = useMediaQuery({ query: "(max-width: 768px)" });
  const arrow = require("../assets/images/left-arrow.png");
  const buttonContents = {
    a: (
      <div className="div-pattern">
        <h2>Configurações da Conta</h2>
        <p>
          Bem-vindo às configurações da sua conta. Aqui você pode personalizar
          as preferências e informações relacionadas à sua conta.
        </p>
        <h3>Informações Pessoais</h3>
        <p>
          Atualize suas informações pessoais, como nome, classificações, etc.
        </p>
        <Form onSubmit={handleSubmit}>
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
            Seu email deve conter as normas padrões de endereço de email.
          </Form.Text>
          <Row>
            <Col className="justify-content-end d-flex m-3 mt-0 mb-3">
              <Form.Group>
                <Button type="submit" variant="primary">
                  Enviar
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <h3>Informações de coleta</h3>
        <p>
          Marque ou altere suas informações para coleta nutricional para o
          funcionamento do site.
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
    ),
    b: (
      <div className="div-pattern">
        <h2>Segurança e Privacidade</h2>
        <p>
          Bem-vindo à seção de segurança e privacidade. Aqui você pode ajustar
          configurações importantes para garantir a proteção dos seus dados
          pessoais.
        </p>
        <h3>Senha</h3>
        <Form className="mb-2">
          <Form.Group>
            <Form.Label htmlFor="inputPassword5">Alterar senha</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Sua senha deve ser entre 8-100 caracteres de tamanho, com pelo
              menos uma letra maiúscula e uma minúscula, sem conter espaços ou
              emojis.
            </Form.Text>
          </Form.Group>
          <Row>
            <Col className="justify-content-end d-flex m-3 mt-0 mb-3">
              <Form.Group>
                <Button variant="primary">Enviar</Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    ),
    c: (
      <div className="div-pattern">
        <h2>Configurações de Dados</h2>
        <p>
          Bem-vindo à seção de configurações de dados. Aqui você pode gerenciar
          como os dados são coletados, armazenados e utilizados em sua conta.
        </p>
        <h3>Preferências de Coleta de Dados</h3>

        <p>
          Escolha suas preferências em relação à coleta de dados, decidindo
          quais informações deseja compartilhar.
        </p>
        <Form>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Anonimato de avaliação"
          />
        </Form>
        <h3>Histórico de Avaliações</h3>
        <p>
          Confira abaixo seu histórico de avaliações, você poderá editar ou
          excluir avaliações já feitas.
        </p>
        <p>
          Selecione opções de exclusão de dados, permitindo que você remova
          informações específicas ou todo o histórico de dados, se desejar.
        </p>
        <h3>Histórico de Sugestões</h3>
        <p>
          Confira abaixo seu histórico se sugestões, você poderá editar ou
          excluir sugestões já feitas.
        </p>
        <p>
          Selecione opções de exclusão de dados, permitindo que você remova
          informações específicas ou todo o histórico de dados, se desejar.
        </p>
      </div>
    ),
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

      <Modal
        show={passModal}
        onHide={() => setPassModal(false)}
        className="modal"
        backdrop="static"
        data-test="links"
      >
        <Modal.Body>
          <Form onSubmit={handleSubmitAuth}>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                data-test="form-pass"
                onChange={(e) => setSenha(e.target.value)}
              />
              <Button type="submit" id="button-login-signup">
                Autenticar
              </Button>
            </Form.Group>
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
      <div className="bg-light div-config d-flex justify-content-center align-items-center">
        <Container className="cont-resp">
          <Row className="w-100 overflow-hidden pb-0 d-flex justify-content-center row-response">
            {isResponsive ? (
              <div className="tab-response p-0">
                <div className="d-flex align-items-center mt-3">
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
                </div>
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mb-3 d-flex flex-nowrap p-0 pt-1"
                  onSelect={(key) => handleTabClick(key)}
                >
                  <Tab eventKey="a" title="Conta de Usuário" />
                  <Tab eventKey="b" title="Segurança e Privacidade" />
                  <Tab eventKey="c" title="Coleta de Dados" />
                </Tabs>
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
                    <Button
                      className="bg-transparent border-0 text-black w-100"
                      onClick={() => handleButtonClick("a")}
                    >
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
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button
                      className="bg-transparent border-0 text-black w-100"
                      onClick={() => handleButtonClick("b")}
                    >
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
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button
                      className="bg-transparent border-0 text-black w-100"
                      onClick={() => handleButtonClick("c")}
                    >
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
                  </ListGroupItem>
                </ListGroup>
              </Col>
            )}

            <Col
              lg={8}
              xs={12}
              md={8}
              className="cont-config2 overflow-scroll border bg-white p-5"
            >
              <div className="">{content}</div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SettingsConst;
