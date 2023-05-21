import React from "react";
import { Navbar, Nav, Button, Container, Image } from 'react-bootstrap';
import logo from '../imagens/logo.png';
import "../Sass/_header.scss";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg">

                <Container>
                    <Navbar.Brand href="#home">
                        <Navbar>
                            <Container>

                                <Navbar.Brand>
                                    <Image src={logo} alt="Logo" fluid id="logo" />
                                </Navbar.Brand>
                            </Container>

                        </Navbar>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#cardapio">Cardápio</Nav.Link>
                            <Nav.Link href="#avaliacao">Avaliação</Nav.Link>
                            <Nav.Link href="#sugestao">Sugestão</Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link href="#sobre">Sobre</Nav.Link>
                            <Nav.Link href="#contato">Contato</Nav.Link>
                            <Button href="#login" size="sm" id="btLogin"><ion-icon name="person-outline"></ion-icon>Entrar</Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}
export default Header;