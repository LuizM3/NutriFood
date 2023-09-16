import React, { useState } from "react";
import { Navbar, Nav, Container, Image, Offcanvas, ToggleButton, Button, Figure, Form } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link, useSearchParams } from "react-router-dom";
import "../assets/styles/header.scss";

const logo = require("../assets/images/logo.png");

const HeaderConst = () => {

  const [isToggled, setIsToggled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [show, setShow] = useState(false);

  const handleClose = (event) => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const isResponsive = useMediaQuery({ query: "(max-width: 768px)" });

  const Verify = () => {
    const [searchParams] = useSearchParams();
    const tokenVerify = searchParams.get("token");

    return tokenVerify;
  };

  const token = Verify();

  if (token){
    const GetName = async () => {

      try {
        const resp = await fetch("http://localhost:9000/verifyToken?token=" + token);
        if (resp.ok) {
          const data = await resp.json();
          const validation = await data.validation; //validação do token
  
        }
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
      }
    };
  }

  return (

    <>
      <Navbar sticky="top" className="flex-nowrap">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/?token=" + token} className="text-decoration-none">
                  <Figure>
                    <Figure.Image
                      src={logo}/>
                  </Figure>
                </Link>

              </Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/?token=" + token} className="text-decoration-none">
                  <h2>Nutrifood </h2>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Brand>

          <Navbar.Brand className="d-flex align-items-center">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/reviews?token=" + token} className="text-decoration-none">
                  Avaliações
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to={"/menu?token=" + token} className="text-decoration-none">
                  Cardápio
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to={"/suggestions?token=" + token} className="text-decoration-none">
                  Sugestões
                </Link>
              </Nav.Link>
            </Nav>

          </Navbar.Brand>
          <Navbar.Brand className="d-flex align-items-center">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/contact?token=" + token} className="text-decoration-none">
                  Contato
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to={"/about?token=" + token} className="text-decoration-none">
                  Sobre
                </Link>
              </Nav.Link>
            </Nav>

            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/login" className="text-decoration-none">
                  <Button to="/login">
                    <ion-icon name="person"></ion-icon>Entrar
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>

  );
};

export default HeaderConst;