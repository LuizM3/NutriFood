import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/dashboard.scss";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Stack,
  Button,
  Card,
  Figure,
  Form
} from "react-bootstrap";

const tools = require("csvtexttools");

const logo = require("../assets/images/logo.png");
const avatar = require("../assets/images/avatar.png");

const Sidebar = () => {

  const [textAlmoco, setTextAlmoco] = useState('');
  const [textCafeDaManha, setTextCafeDaManha] = useState('');
  const [textLancheDaTarde, setTextLancheDaTarde] = useState('');
  const [textJantar, setTextJantar] = useState('');

  const handleFileChangeCafeDaManha = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        const output = tools.csvtexttools(fileContent, 'sql','cafeDaManha');
        console.log(output);
      };
      reader.readAsText(selectedFile);
    }
  };
  
  const handleFileChangeAlmoco = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        const output = tools.csvtexttools(fileContent, 'sql','almoco');
        console.log(output);


      };
      reader.readAsText(selectedFile);
    }
  };

  const handleFileChangeLancheDaTarde = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        const output = tools.csvtexttools(fileContent, 'sql','lancheDaTarde');
        console.log(output);

      };
      reader.readAsText(selectedFile);
    }
  };

  const handleFileChangeJantar = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        const output = tools.csvtexttools(fileContent, 'sql','jantar');
        console.log(output);

      };
      reader.readAsText(selectedFile);
    }
  };

  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const handleShow = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    navigate("/");
  };

  useEffect(() => {
    if (id != 1) {
      navigate("/");
    }
  }, []);

  return (
    <div className="dashboard">
      <Container fluid className="h-100 w-100">
        <Row className="h-100 d-flex">
          <Col md={2} className="p-3 m-0 flex-column redm gap-1 d-flex h-100">
            <Stack gap={4}>
              <Figure>
                <Figure.Image src={logo} width={64} height={64}></Figure.Image>
              </Figure>
              <Card className="card-side">
                <Card.Body>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col md={4}>
                      <Figure className="m-0">
                        <Figure.Image
                          className="fig m-0"
                          src={avatar}
                          width={64}
                          height={64}
                        ></Figure.Image>
                      </Figure>
                    </Col>
                    <Col md={8}>Administrador</Col>
                  </Row>
                </Card.Body>
              </Card>
            </Stack>
            <Stack gap={2} className="stack-bt">
              <Link to="/dashboard" className="text-decoration-none w-100">
                <Button className="w-100">
                  <Row>
                    <Col md={2}>
                      <ion-icon name="stats-chart"></ion-icon>
                    </Col>
                    <Col md={2}>Estatísticas</Col>
                  </Row>
                </Button>
              </Link>
              <Link
                to="/dashboard/users"
                className="text-decoration-none w-100"
              >
                <Button className="w-100">
                  <Row>
                    <Col md={2}>
                      <ion-icon name="people"></ion-icon>
                    </Col>
                    <Col md={2}>Usuários</Col>
                  </Row>
                </Button>
              </Link>
              <Link
                to="/dashboard/suggestions"
                className="text-decoration-none w-100"
              >
                <Button className="w-100">
                  <Row>
                    <Col md={2}>
                      <ion-icon name="file-tray"></ion-icon>
                    </Col>
                    <Col md={2}>Sugestões</Col>
                  </Row>
                </Button>
              </Link>
              <Link
                to="/dashboard/cardapio"
                className="text-decoration-none w-100 active-sidebar"
              >
                <Button className="w-100">
                  <Row>
                    <Col md={2}>
                      <ion-icon name="restaurant"></ion-icon>
                    </Col>
                    <Col md={2}>Cardápio</Col>
                  </Row>
                </Button>
              </Link>
            </Stack>
            <Stack className="align-self-end stack-log w-100">
              <Button onClick={handleShow}>
                <Row className="justify-content-center align-items-center">
                  <Col md={2}>Sair</Col>
                  <Col md={2} className="d-flex align-items-center">
                    <ion-icon name="log-out-outline"></ion-icon>
                  </Col>
                </Row>
              </Button>
            </Stack>
          </Col>
          {/* Conteudo */}
          <Form className="w-0">
            <Form.Group controlId="formFile" className="w-0">
              <Form.Label>Selecione um arquivo de Cafe Da Manhã</Form.Label>
              <Form.Control type="file" onChange={handleFileChangeCafeDaManha} />
            </Form.Group>
          </Form>
          
          <Form className="w-0">
            <Form.Group controlId="formFile" className="w-0">
              <Form.Label>Selecione um arquivo de almoço</Form.Label>
              <Form.Control type="file" onChange={handleFileChangeAlmoco} />
            </Form.Group>
          </Form>

          <Form className="w-0">
            <Form.Group controlId="formFile" className="w-0">
              <Form.Label>Selecione um arquivo de Lanche Da Tarde</Form.Label>
              <Form.Control type="file" onChange={handleFileChangeLancheDaTarde} />
            </Form.Group>
          </Form>

          <Form className="w-0">
            <Form.Group controlId="formFile" className="w-0">
              <Form.Label>Selecione um arquivo de Jantar</Form.Label>
              <Form.Control type="file" onChange={handleFileChangeJantar} />
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </div>
  );
};
export default Sidebar;
