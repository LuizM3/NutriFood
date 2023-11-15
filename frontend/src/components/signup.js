import "../assets/styles/login.scss";
import {
  Form,
  Button,
  Modal,
  Container,
  Spinner,
  Row,
  Figure,
  Alert,
  Col,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { checkEmailUniqueness } from "../service/EmailService";
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Padrão de senha</Popover.Header>
    <Popover.Body>
      <p>
        A senha deve conter entre 8-100 caracteres, com ao menos uma letra
        maiúscula, minúscula e um símbolo. Não pode conter espaços ou emojis.
      </p>
    </Popover.Body>
  </Popover>
);

const logo = require("../assets/images/logo.png");
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

// Aqui começa o código do signup

const SignUpConst = () => {
  // Criando constante navigate

  const navigate = useNavigate();

  // Setando constantes e funcões

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [vinculoAoIfes, setVinculoAoIfes] = useState("");
  const [termo, setTermo] = useState(false);

  // const [emailError, setEmailError] = useState("");

  // Modais

  const [spinnerModal, setSpinnerModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [termoModal, setTermoModal] = useState(false);

  // Alerts

  const [showTermoAlert, setTermoAlert] = useState(false);
  const [showPassAlert, setShowPassAlert] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showP, setCampoP] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const [showCampoAlert, setCampoAlert] = useState(false);
  const [showWrongPAlert, setWrongPAlert] = useState(false);
  const [showEmailAlert, setEmailAlert] = useState(false);

  // Coletas de usuário

  const [coletaPreenchida, setColetaPreenchida] = useState(false);
  const [dadosColeta, setDadosColeta] = useState("");
  let [vegetariano, setVegetariano] = useState("");
  let [refeicoes, setRefeicoes] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // *** validacao de campo vazio ***
    if (senha === "" || email === "" || nome === "") {
      setCampoAlert(true);
      setTimeout(() => {
        setCampoAlert(false);
      }, 5000);
      return;
    }
    // *** validacao de senha ***
    if (schema.validate(senha) === false) {
      setCampoP(true);
      setWrongPAlert(true);
      setTimeout(() => {
        setCampoP(false);
        setTimeout(() => {
          setWrongPAlert(false);
        }, 5000);
      }, 5000);
      return;
    }
    // *** validacao de confirmar senha ***
    if (senha !== confirmarSenha) {
      setShowPassAlert(true);
      setTimeout(() => {
        setShowPassAlert(false);
      }, 5000);
      return;
    }
    // *** validacao de termo preenchido ***
    if (termo === false) {
      setTermoAlert(true);
      setTimeout(() => {
        setTermoAlert(false);
      }, 5000);
      return;
    }

    const isEmailUnique = await checkEmailUniqueness(email);
    if (isEmailUnique === false) {
      setEmailAlert(true);
      setTimeout(() => {
        setEmailAlert(false);
      }, 5000);
    } else {
      setColetaPreenchida(true);
      setFormModal(true);
    }
  };
  // ****** ao clicar no botao exibe o modal de coleta de dados ******
  const handleColetaSubmit = async () => {
    if (vegetariano === "true") {
      vegetariano = true;
    }
    if (vegetariano === "false") {
      vegetariano = false;
    }
    let objetoRefeicoes = {
      cafeDaManha: false,
      almoco: false,
      lancheDaTarde: false,
      jantar: false,
    };
    for (const element of refeicoes) {
      if (element == 1) {
        objetoRefeicoes.cafeDaManha = true;
      } else if (element == 2) {
        objetoRefeicoes.almoco = true;
      } else if (element == 3) {
        objetoRefeicoes.lancheDaTarde = true;
      } else if (element == 4) {
        objetoRefeicoes.jantar = true;
      }
    }
    const dadosCompletos = {
      nome,
      email,
      senha,
      vinculoAoIfes,
      objetoRefeicoes,
      vegetariano,
    };

    try {
      const response = await fetch(`http://localhost:9000/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(dadosCompletos),
      });

      if (response.ok) {
        setShowAlertSuccess(true);
        setTimeout(() => {
          setShowAlertSuccess(false);
        }, 5000);
        setTimeout(() => {
          setSpinnerModal(true);
        }, 1000);
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } else {
        setErrorAlert(true);
        setTimeout(() => {
          setErrorAlert(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 5000);
    }
  };

  const handleVinculoChange = (e) => {
    setVinculoAoIfes(e.target.value);
  };

  const handleVegetarianoChange = (e) => {
    setVegetariano(e.target.value);
  };

  const handleRefeicoes = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setRefeicoes([...refeicoes, value]);
    } else {
      setRefeicoes(refeicoes.filter((refeicao) => refeicao !== value));
    }
  };

  return (
    <>
      {/* Alerts */}

      <Row className="position-fixed alert-row" style={{ marginTop: 100 }}>
        {showPassAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setShowPassAlert(false)}
          >
            As senhas devem ser iguais
          </Alert>
        )}{" "}
        {showAlertSuccess && (
          <Alert
            variant="success"
            className="align-items-center d-flex fade"
            onClose={() => setShowAlertSuccess(false)}
          >
            Cadastro concluído
          </Alert>
        )}
        {showCampoAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setCampoAlert(false)}
          >
            Todos os campos devem ser preenchidos
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
        {showEmailAlert && (
          <Alert
            variant="danger"
            className="align-items-center d-flex fade"
            onClose={() => setEmailAlert(false)}
          >
            Este email já foi cadastrado
          </Alert>
        )}
        {showWrongPAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setWrongPAlert(false)}
          >
            A senha digitada não está de acordo com as normas
          </Alert>
        )}
        {showTermoAlert && (
          <Alert
            variant="warning"
            className="align-items-center d-flex fade"
            onClose={() => setTermoAlert(false)}
          >
            Leia e concorde com os Termos de Uso
          </Alert>
        )}
      </Row>

      {/* Modal spinner */}

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

      {/* Modal termo de uso */}

      <Modal
        show={termoModal}
        onHide={() => setTermoModal(false)}
        className="modal"
        backdrop="static"
        data-test="links"
      >
        <Modal.Body>
          <h2>TERMOS DE USO</h2>

          <h3>1. Aceitação dos Termos de Uso</h3>
          <p>
            Bem-vindo ao Nutrifood! Ao acessar ou usar nosso site, você concorda
            em cumprir e ficar vinculado a estes Termos de Uso. Se você não
            concordar com algum destes termos, por favor, não utilize o nosso
            site.
          </p>

          <h3>2. Uso Autorizado</h3>
          <p>
            Você concorda em utilizar nosso site apenas para fins legais e de
            acordo com estes Termos de Uso. Você não deve usar nosso site de
            forma que possa causar danos, prejudicar ou interferir com o
            funcionamento normal do site.
          </p>

          <h3>3. Informações de Conta</h3>
          <p>
            Ao utilizar nosso site, você é responsável por manter a
            confidencialidade de suas informações de conta, incluindo nome de
            usuário e senha. Você concorda em nos notificar imediatamente sobre
            qualquer uso não autorizado de sua conta.
          </p>

          <h3>4. Direitos de Propriedade Intelectual</h3>
          <p>
            Nosso site e seu conteúdo, incluindo texto, gráficos, logotipos,
            imagens e software, são protegidos por leis de direitos autorais e
            outras leis de propriedade intelectual. Você não deve reproduzir,
            distribuir, modificar ou criar obras derivadas com base em nosso
            conteúdo, a menos que tenha permissão expressa.
          </p>

          <h3>5. Links para Outros Sites</h3>
          <p>
            Nosso site pode conter links para sites de terceiros que não
            controlamos. Não somos responsáveis pelo conteúdo ou pelas práticas
            de privacidade desses sites.
          </p>

          <h3>6. Isenção de Garantias</h3>
          <p>
            Nosso site é fornecido "como está" e "conforme disponível". Não
            fazemos garantias de qualquer tipo quanto à sua precisão,
            confiabilidade ou disponibilidade.
          </p>

          <h3>7. Limitação de Responsabilidade</h3>
          <p>
            Em nenhuma circunstância seremos responsáveis por danos diretos,
            indiretos, incidentais, especiais, consequentes ou punitivos
            decorrentes do uso ou incapacidade de uso do nosso site.
          </p>

          <h3>8. Modificações nos Termos de Uso</h3>
          <p>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
            momento, e é sua responsabilidade verificar periodicamente se houve
            alterações. O uso continuado do site após tais alterações
            constituirá sua aceitação dos Termos de Uso revisados.
          </p>

          <h3>9. Encerramento de Conta</h3>
          <p>
            Reservamo-nos o direito de encerrar ou suspender sua conta a
            qualquer momento, sem aviso prévio, por qualquer motivo.
          </p>

          <h3>10. Lei Aplicável</h3>
          <p>
            Estes Termos de Uso serão regidos e interpretados de acordo com as
            leis do [seu país/estado], sem levar em consideração suas
            disposições de conflito de leis.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setTermoModal(false);
            }}
          >
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de coleta de usuário */}

      <Modal
        show={formModal}
        onHide={() => setFormModal(false)}
        className="modal coleta-modal"
        backdrop="static"
        data-test="links"
      >
        <Modal.Header>
          <Modal.Title>Coleta de usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow-scroll">
          <Container className="h-100">
             <Row
             >
            <Col md={12}>
              <Form>
                <Row>
                  <Col md={12}>
                    {["radio"].map((type) => (
                      <Row className="row-coleta mb-4" key={`inline-${type}`}>
                        <Col md={12} xs={12} className="text-start mb-3">
                          <h5>
                            Qual seu vínculo com o IFES - Campus Santa Teresa?{" "}
                          </h5>
                        </Col>
                        <Col xs={2}>
                          <Form.Check
                            inline
                            name="vinculoAoIfes"
                            type={type}
                            id={`inline-${type}-1`}
                            value={"AM"}
                            checked={vinculoAoIfes === "AM"}
                            onChange={handleVinculoChange}
                          />
                        </Col>
                        <Col xs={10}className="d-flex justify-content-start">
                          <Form.Label>Aluno do ensino médio</Form.Label>
                        </Col>

                        <Col xs={2}>
                          {" "}
                          <Form.Check
                            inline
                            name="vinculoAoIfes"
                            type={type}
                            id={`inline-${type}-2`}
                            value={"AG"}
                            checked={vinculoAoIfes === "AG"}
                            onChange={handleVinculoChange}
                          />
                        </Col>
                        <Col xs={10}className="d-flex justify-content-start">
                          <Form.Label>Aluno da graduação</Form.Label>
                        </Col>

                        <Col xs={2}>
                          <Form.Check
                            inline
                            name="vinculoAoIfes"
                            type={type}
                            id={`inline-${type}-3`}
                            value={"SDT"}
                            checked={vinculoAoIfes === "SDT"}
                            onChange={handleVinculoChange}
                          />
                        </Col>
                        <Col xs={10}className="d-flex justify-content-start">
                          <Form.Label>
                            Servidor, docente ou tercerizado
                          </Form.Label>
                        </Col>

                        <Col xs={2}>
                          <Form.Check
                            inline
                            name="vinculoAoIfes"
                            type={type}
                            id={`inline-${type}-4`}
                            value={"Outro"}
                            checked={vinculoAoIfes === "Outro"}
                            onChange={handleVinculoChange}
                          />
                        </Col>
                        <Col xs={10}className="d-flex justify-content-start">
                          <Form.Label>Outro</Form.Label>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={12}>
              <Form>
                <Row>
                  <Col md={12}>
                    {["checkbox"].map((type) => (
                      <Row className="mb-4 row-coleta" key={`inline-${type}`}>
                        <Col md={12} xs={12} className="text-start mb-3">
                          <h5>
                            Qual refeição você realiza no restaurante
                            institucional?
                          </h5>
                        </Col>
                     
                        <Col xs={2}>
                          <Form.Check
                            inline
                            name="refeicoes"
                            type={type}
                            id={`inline-${type}-4`}
                            value={1}
                            onChange={handleRefeicoes}
                          />
                        </Col>
                        <Col xs={10} className="d-flex justify-content-start">
                          <Form.Label>Café da manhã</Form.Label>
                        </Col>
                        <Col xs={2}>
                          <Form.Check
                            inline
                            name="refeicoes"
                            type={type}
                            id={`inline-${type}-5`}
                            value={2}
                            onChange={handleRefeicoes}
                          />
                        </Col>
                        <Col xs={10}className="d-flex justify-content-start">
                          <Form.Label>Almoço</Form.Label>
                        </Col>
                        <Col xs={2}>
                          <Form.Check
                            inline
                            name="refeicoes"
                            type={type}
                            id={`inline-${type}-6`}
                            value={3}
                            onChange={handleRefeicoes}
                          />
                        </Col>
                        <Col xs={10}className="d-flex justify-content-start">
                          <Form.Label>Lanche da tarde</Form.Label>
                        </Col>
                        <Col xs={2}>
                          <Form.Check
                            inline
                            name="refeicoes"
                            type={type}
                            id={`inline-${type}-7`}
                            value={4}
                            onChange={handleRefeicoes}
                          />
                        </Col>
                        <Col xs={10}className="d-flex justify-content-start">
                          <Form.Label>Jantar</Form.Label>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={12}>
              <Form>
                <Row>
                 
                  <Col md={12}>
                    {["radio"].map((type) => (
                      <Row className="mb-4 row-coleta" key={`inline-${type}`}> 
                      <Col md={12} xs={12} className="text-start mb-3">
                    <h5>Você é vegetariano?</h5>
                  </Col>
                        <Col md={1} xs={1}>
                          <Form.Check
                            xs={12}
                            inline
                            name="vegetariano"
                            type={type}
                            id={`inline-${type}-9`}
                            value={true}
                            checked={vegetariano === "true"}
                            onChange={handleVegetarianoChange}
                          />
                        </Col>
                        <Col md={5} xs={5}>
                          <Form.Label>Sim</Form.Label>
                        </Col>
                        <Col md={1} xs={1}>
                          <Form.Check
                            inline
                            name="vegetariano"
                            type={type}
                            id={`inline-${type}-10`}
                            value={false}
                            checked={vegetariano === "false"}
                            onChange={handleVegetarianoChange}
                          />
                        </Col>
                        <Col md={5} xs={5}>
                          <Form.Label>Não</Form.Label>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          </Container>
         
        </Modal.Body>
        <Modal.Footer className="w-100">
          <Row className="w-100 row-bt" xs={2}>
            <Col md={6} className="o-enviar p-1 order-1">
              <Button
                variant="primary"
                className="w-100"
                onClick={() => {
                  handleColetaSubmit();
                  setFormModal(false);
                }}
              >
                Enviar
              </Button>
            </Col>{" "}
            <Col md={6} className="o-cancelar p-1 order-0">
              <Link to={"/sign-up"} reloadDocument>
                <Button className="w-100 bg-light border-danger text-danger cancelar">
                  Cancelar
                </Button>
              </Link>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>

      {/* Aqui começa o container de cadastro */}

      <div id="div-z-cont" data-test="links">
        <Container className="login-cont">
          <section>
            <Row>
              {/* Formulario de cadastro */}

              <Form id="form-login" onSubmit={handleSubmit}>
                <div id="div-form-l">
                  <Figure className="logo-tog">
                    <Figure.Image src={logo} />
                  </Figure>
                  <h1>Cadastro de usuário</h1>

                  <div className="in-section">
                    <Form.Group className="mb-3">
                      <Form.Label>Insira seus dados pessoais abaixo</Form.Label>
                    </Form.Group>
                  </div>

                  <div className="in-section">
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        aria-label="Nome"
                        placeholder="Nome"
                        autoComplete="username"
                        autoCapitalize="Nome"
                        value={nome}
                        data-test="form-nome"
                        onChange={(e) => setNome(e.target.value)}
                      />
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        data-test="form-email"
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <Form.Control
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        data-test="form-pass"
                        onChange={(e) => setSenha(e.target.value)}
                      />

                      <Form.Control
                        type="password"
                        placeholder="Confirmar senha"
                        data-test="form-passc"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                      />
                      {showP && (
                        <OverlayTrigger
                          trigger="click"
                          placement="right"
                          overlay={popover}
                        >
                          <Link variant="success">
                            Conferir padrão de senha
                          </Link>
                        </OverlayTrigger>
                      )}
                    </Form.Group>
                  </div>
                  <div className="d-flex justify-content-left align-items-center flex-row mb-1">
                    <Form.Group
                      id="termosDeUso"
                      className="d-flex flex-row align-items-center justify-content-center"
                    >
                      <Form.Check
                        type="checkbox"
                        className="t-uso"
                        value={termo}
                        onChange={(e) => setTermo(e.target.value)}
                      />
                      <Form.Label htmlFor="termosDeUso" className="m-0">
                        Concordo com os{" "}
                        <Link
                          onClick={() => {
                            setTermoModal(true);
                          }}
                        >
                          Termos de Uso
                        </Link>
                      </Form.Label>
                    </Form.Group>
                  </div>

                  <div id="div-btn">
                    <Link to={"/login"}>Fazer login</Link>
                    <Button
                      type="submit"
                      id="button-login-signup"
                      data-test="cadastrar"
                    >
                      Cadastrar
                    </Button>
                  </div>
                </div>
              </Form>

              {/* *************************** */}
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
};

export default SignUpConst;
