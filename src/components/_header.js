import React from "react";
import { Navbar, Nav, Button, Container, Image, NavDropdown } from 'react-bootstrap';
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
                            <Nav.Link href="#avaliacao">Avaliação</Nav.Link>
                            <Nav.Link href="#sugestao">Sugestão</Nav.Link>
                            <NavDropdown title="Cardápio" id="nav-dropdown" className="dropdown">
                                <Nav.Link className="dropdown-itens" href="#cardapio-segunda"><p>Segunda-feira</p></Nav.Link>
                                <Nav.Link className="dropdown-itens" href="#cardapio-terca"><p>Terça-feira</p></Nav.Link>
                                <Nav.Link className="dropdown-itens" href="#cardapio-quarta"><p>Quarta-feira</p></Nav.Link>
                                <Nav.Link className="dropdown-itens" href="#cardapio-quinta"><p>Quinta-feira</p></Nav.Link>
                                <Nav.Link className="dropdown-itens" href="#cardapio-sexta"><p>Sexta-feira</p></Nav.Link>
                                <NavDropdown.Divider />
                                <Nav.Link className="dropdown-itens" href="#cardapio"><p>Ver mais</p></Nav.Link>
                            </NavDropdown>


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