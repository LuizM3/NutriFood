import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Image, NavDropdown } from 'react-bootstrap';
import logo from '../imagens/logo.png';
import "../Sass/_header.scss";
import { Link } from "react-router-dom";


const Header = () => {
    const [rotate, setRotate] = useState(false);

    const handleToggle = () => {
        setRotate(prevRotate => !prevRotate);
    };


    return (
        <>

            <Navbar collapseOnSelect expand="lg" static="top" id="nav-bar-cnf">
                <Container>
                    <Navbar.Brand>
                        <Navbar>
                            <Container id="nbar">
                                <Navbar.Brand>
                                    <Link to="/" id="link"><Nav id="link"><Image src={logo} alt="Logo" fluid id="logo" /></Nav></Link>
                                </Navbar.Brand>
                            </Container>
                        </Navbar>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        id="toggle-nav"
                        onClick={handleToggle}
                        className={rotate ? 'rotate' : ''}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" className="nav-toggle">
                        <Nav className="me-auto">
                            <NavDropdown title="Cardápio" id="nav-dropdown" className="dropdown">
                                <Link to="/cardapio/segunda" className="text-decoration-none" id='drp-link'>Segunda-feira</Link>
                                <Link to="/cardapio/terca" className="text-decoration-none" id='drp-link'>Terça-feira</Link>
                                <Link to="/cardapio/quarta" className="text-decoration-none" id='drp-link'>Quarta-feira</Link>
                                <Link to="/cardapio/quinta" className="text-decoration-none" id='drp-link'>Quinta-feira</Link>
                                <Link to="/cardapio/sexta" className="text-decoration-none" id='drp-link'>Sexta-feira</Link>
                                <NavDropdown.Divider id="dropdown-divider" />
                                <Link to="/cardapio" className="text-decoration-none" id='drp-link'>Ver mais</Link>
                            </NavDropdown>
                            <Link to="/avaliacoes" className="text-decoration-none text-dark" id='nv-link'>Avaliações</Link>
                            <Link to="/sugestoes" className="text-decoration-none text-dark" id='nv-link'>Sugestões</Link>


                        </Nav>
                        <Nav className='me-auto2'>
                            <Link to="/sobre" className="text-decoration-none text-dark" id='nv-link'>Sobre</Link>
                            <Link to="/contato" className="text-decoration-none text-dark" id='nv-link'>Contato</Link>
                            <Link to="/login" className="text-decoration-none text-white"><Button to="/login" size="sm" id="btLogin" className="py-2"><ion-icon name="person" id="ic-login"></ion-icon>Entrar</Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
}
export default Header;