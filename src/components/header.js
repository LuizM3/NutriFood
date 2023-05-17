import React from "react";
// import Image from "react-bootstrap/Image";
// import Figure from "react-bootstrap/Figure"
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import "../Sass/header.scss";

const Header = () => {
    return (
        <><Navbar bg="dark" variant="dark" id="navBar" fixed="top" >
            <Navbar.Brand href="#home">
                <div id="logo"></div>
            </Navbar.Brand>
            <Nav id="nav">
                <Nav id="nav-left">
                    <Nav.Link href="#cardapio">Cardápio</Nav.Link>
                    <Nav.Link href="#avaliacao">Avaliação</Nav.Link>
                    <Nav.Link href="#sugestao">Sugestão</Nav.Link>
                </Nav>
                <Nav id="nav-right">
                    <Nav.Link href="#sobre">Sobre</Nav.Link>
                    <Nav.Link href="#contato">Contato</Nav.Link>
                    <Nav.Link> <Button href="#login" size="sm" id="btLogin"><ion-icon name="person-outline"></ion-icon><span>entrar</span></Button></Nav.Link>
                </Nav>
            </Nav>
        </Navbar>
        </>
    );
}
export default Header;