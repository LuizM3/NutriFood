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
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const SettingsConst = () => {
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
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Alterar email</Form.Label>
            <Form.Control type="email" placeholder="nome@exemplo.com" />
          </Form.Group>
          <Form.Text id="passwordHelpBlock" muted>
            Seu email deve conter as normas padrões de endereço de email.
          </Form.Text>
          <Row>
            <Col className="justify-content-end d-flex m-3 mt-0 mb-3">
              <Form.Group>
                <Button variant="primary">Enviar</Button>
              </Form.Group>
            </Col>
          </Row>
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
          </Form>
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
  );
};

export default SettingsConst;
