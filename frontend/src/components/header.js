import React, { useState } from "react";
import { Navbar, Nav, Container, Image, Offcanvas, ToggleButton, Button, Figure, Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
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

  return (

    <>
      <Navbar sticky="top" className="flex-nowrap" collapseOnSelect>
        <Container id="nav-cont">
          {isResponsive ? (
            <Row> <Col></Col>
              <Col>
              <Figure>
                <Figure.Image src={logo} width={64} height={64} id="sun">

                </Figure.Image>
              </Figure>
              </Col>
              <Col id="col-toggle"><Navbar.Toggle
                aria-controls="offcanvas-navbar"
                as={ToggleButton}
                variant="outline-light"
                onClick={handleShow}
                style={{
                  textDecoration: "none",
                  outline: "0",
                  boxShadow: "none",
                }}
                id="toggle-nav"
              ></Navbar.Toggle></Col>

            </Row>

          ) : (
            <><Navbar.Brand className="d-flex align-items-center">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/" className="text-decoration-none">
                    <Figure>
                      <Figure.Image

                        src={logo} />
                    </Figure>
                  </Link>

                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/" className="text-decoration-none">
                    <h2>Nutrifood </h2>
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Brand><Navbar.Brand className="d-flex align-items-center">
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link to="/reviews" className="text-decoration-none">
                      Avaliações
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to="/menu"
                      className="text-decoration-none"
                    >
                      Cardápio
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/suggestions" className="text-decoration-none">
                      Sugestões
                    </Link>
                  </Nav.Link>
                </Nav>

              </Navbar.Brand><Navbar.Brand className="d-flex align-items-center">
                <Nav className="me-auto">
                  <Nav.Link>

                    <Link to="/contact" className="text-decoration-none">
                      Contato
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/about" className="text-decoration-none">
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
              </Navbar.Brand></>
          )}

          <Offcanvas
            show={show && isResponsive}
            onHide={handleClose}
            scroll={false}
            backdrop={false}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Link to="/">

                </Link>
                <Row>
                  <Col>
                  
              <Figure>
                <Figure.Image src={logo} width={64} height={64} id="sun">

                </Figure.Image>
              </Figure>
                  </Col>
                  <Col>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/" className="text-decoration-none">
                    <h2>nutrifood </h2>
                  </Link>
                </Nav.Link>
              </Nav>
                  </Col>
                </Row>
              </Offcanvas.Title>
            </Offcanvas.Header>


          </Offcanvas>
        </Container>
      </Navbar>
    </>


    // <>
    //   <Navbar collapseOnSelect fixed="top">
    //       <div>

    //         {isResponsive ? (
    //           <Navbar.Toggle
    //             aria-controls="offcanvas-navbar"
    //             as={ToggleButton}
    //             variant="outline-light"
    //             onClick={handleShow}
    //             style={{
    //               textDecoration: "none",
    //               outline: "0",
    //               boxShadow: "none",
    //             }}
    //             id="toggle-nav"
    //           ></Navbar.Toggle>
    //         ) : (
    //           <Nav className="d-flex bg-body-white">
    //             <div>
    //               
    //             </div>
    //             <div>
    //               <Link
    //                 to="/contact"
    //                 className="text-decoration-none"

    //               >
    //                 Contato
    //               </Link>
    //               <Link
    //                 to="/about"
    //                 className="text-decoration-none"

    //               >
    //                 Sobre
    //               </Link>
    //               <Link
    //                 to="/login"
    //                 className="text-decoration-none"
    //                 style={{ border: "none" }}
    //               >
    //                 <Button to="/login">
    //                   <ion-icon name="person"></ion-icon>Entrar
    //                 </Button>
    //               </Link>
    //             </div>
    //           </Nav>
    //         )}

    //         <Offcanvas
    //           show={show && isResponsive}
    //           onHide={handleClose}
    //           scroll={false}
    //           backdrop={false}
    //           placement="end"
    //         >
    //           <Offcanvas.Header closeButton>
    //             <Offcanvas.Title>
    //               <Link to="/">
    //                 <Nav>
    //                   <Image src={logo} alt="Logo" fluid/>
    //                 </Nav>
    //               </Link>
    //             </Offcanvas.Title>
    //           </Offcanvas.Header>
    //           <Offcanvas.Body>
    //             <Nav>
    //               <Link
    //                 to="/reviews"
    //                 className="text-decoration-none"

    //               >
    //                 Avaliações
    //               </Link>
    //               <Link
    //                 to="/menu"
    //                 className="text-decoration-none"

    //               >
    //                 Cardápio
    //               </Link>
    //               <Link
    //                 to="/suggestions"
    //                 className="text-decoration-none"

    //               >
    //                 Sugestões
    //               </Link>
    //               <Link
    //                 to="/contact"
    //                 className="text-decoration-none"

    //               >
    //                 Contato
    //               </Link>
    //               <Link
    //                 to="/about"
    //                 className="text-decoration-none"

    //               >
    //                 Sobre
    //               </Link>
    //               <Link to="/login" className="text-decoration-none">
    //                 <Button to="/login">
    //                   <ion-icon name="person"></ion-icon>Entrar
    //                 </Button>
    //               </Link>
    //             </Nav>
    //           </Offcanvas.Body>
    //         </Offcanvas>

    //         <div>
    //           <Link to="/">
    //             <Figure>
    //               <Figure.Image
    //                 width={256}
    //                 height={256}
    //                 alt="171x180"
    //                 src={logo}
    //               />
    //             </Figure>
    //           </Link>
    //         </div>
    //       </div>
    //   </Navbar>
    // </>
  );
};

export default HeaderConst;
