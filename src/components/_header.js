import React, { useState } from "react";
import { Navbar, Nav, Container, Image, Offcanvas, ToggleButton, Button } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';
import logo from "../imagens/logo.png";
import "../Sass/_header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isResponsive = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" id="nav-bar-cnf">
        <Container id="co">
          <div>
        {isResponsive ? (
          <Navbar.Toggle 
          aria-controls="offcanvas-navbar" 
          as={ToggleButton} 
          variant="outline-light" 
          onClick={handleShow} 
 style={{
            textDecoration: "none",
            outline: "0",
            boxShadow: "none",
          }}id="toggle-nav"
               >

          </Navbar.Toggle>
        ) : (
          
          <Nav className="me-auto right">
            
            <div id="div-left-nav">
            <Link to="/avaliacoes" className="text-decoration-none" id="nv-link">
              Avaliações
            </Link>
            <Link to="/cardapio" className="text-decoration-none" id="nv-link">
              Cardápio
            </Link>
            <Link to="/sugestoes" className="text-decoration-none" id="nv-link"style={{borderRight: "1px solid var(--gray)"}}>
              Sugestões
            </Link> 
            </div>
            <div id="div-right-nav">
            <Link to="/contato" className="text-decoration-none" id="nv-link">
                Contato
              </Link>
              <Link to="/sobre" className="text-decoration-none" id="nv-link">
                Sobre
              </Link>
              <Link to="/login" className="text-decoration-none" style={{border: "none"}}>
                <Button to="/login" size="sm" id="btLogin" className="py-2">
                  <ion-icon name="person" id="ic-login"></ion-icon>Entrar
                </Button>
              </Link>
          </div></Nav>
          
        )}

        <Offcanvas 
        show={show && isResponsive} 
        onHide={handleClose} 
        scroll={false} 
        backdrop={false} 
        placement="end" >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><Link to="/" id="link">
          <Nav id="link">
            <Image src={logo} alt="Logo" fluid id="logo" />
            {/* <span id="logo-name">Nutrify</span> */}
          </Nav>
        </Link>
</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <Nav className="me-auto">
              <Link to="/avaliacoes" className="text-decoration-none" id="nv-link">
                Avaliações
              </Link>
              <Link to="/cardapio" className="text-decoration-none" id="nv-link">
                Cardápio
              </Link>
              <Link to="/sugestoes" className="text-decoration-none" id="nv-link">
                Sugestões
              </Link><Link to="/contato" className="text-decoration-none" id="nv-link">
                Contato
              </Link>
              <Link to="/sobre" className="text-decoration-none" id="nv-link">
                Sobre
              </Link>
              <Link to="/login" className="text-decoration-none">
                <Button to="/login" size="sm" id="btLogin" className="py-2">
                  <ion-icon name="person" id="ic-login"></ion-icon>Entrar
                </Button>
              </Link>
            </Nav>
              
          </Offcanvas.Body>
        </Offcanvas>

        <Nav className="left">
        
           
           <Link to="/" id="link">  <Image src={logo} alt="Logo" fluid id="logo" ></Image>  </Link>
       
        </Nav>
        </div>
        </Container>
      </Navbar>
    </>
  );
  
};

export default Header;

