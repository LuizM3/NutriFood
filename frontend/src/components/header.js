import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas, ToggleButton, Button, Figure, Row, Col, ListGroup, Dropdown, Modal, Spinner } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/header.scss";

const logo = require("../assets/images/logo.png");

const HeaderConst = () => {
  const [isRotated, setIsRotated] = useState(false);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };

  const [userName, setUserName] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [open, setOpen] = useState(false);
  const [spinnerModal, setSpinnerModal] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [show, setShow] = useState(false);

  const handleClose = (event) => {
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const isResponsive = useMediaQuery({ query: "(max-width: 768px)" });
  const nome = localStorage.getItem("nome");

  useEffect(() => {
    if (nome) {
      setUserName(nome);
    }
  }, [nome]);

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("nome");
    localStorage.removeItem("token");

    setTimeout(() => {
      setSpinnerModal(true);
    }, 1000);

    setTimeout(() => { navigate(0) }, 2000);
  }

  return (

    <>

      <Modal show={spinnerModal} onHide={() => setSpinnerModal(false)} className="modal spinner-modal" backdrop="static" data-test="links">
        <Modal.Body>
          <Spinner animation="border" role="status" show={spinnerModal} onHide={() => setSpinnerModal(false)}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Modal.Body>
      </Modal>

      <Navbar fixed="top" className="flex-nowrap" collapseOnSelect>
        <div id="nav-cont" data-test="links">
          {isResponsive ? (
            <Row> <Col></Col>
              <Col>
                <Figure>
                  <Figure.Image src={logo} width={64} height={64}>

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
              >
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="2 12, 16 12"
                    className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
                  >
                    <animate
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                    ></animate>
                    <animate
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                    ></animate>
                  </polyline>
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="2 5, 16 5"
                    className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
                  >
                    <animate
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                    ></animate>
                    <animate
                      attributeName="points"
                      keyTimes="0;0.5;1"
                      dur="0.24s"
                      begin="indefinite"
                      fill="freeze"
                      calcMode="spline"
                      keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                      values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                    ></animate>
                  </polyline>
                </svg>
              </Navbar.Toggle></Col>


            </Row>

          ) : (
            <><Navbar.Brand className="d-flex align-items-center">
              <Nav className="me-auto">
                <div className="div-link">
                  <Link to="/" className="text-decoration-none" href="#">
                    <Figure>
                      <Figure.Image

                        src={logo} />
                    </Figure>
                  </Link>

                </div>
              </Nav>
              <Nav className="me-auto">
                <div className="div-link">
                  <Link to="/" className="text-decoration-none" data-test="">
                    <h2>Nutrifood</h2>
                  </Link>
                </div>
              </Nav>
            </Navbar.Brand><Navbar.Brand className="d-flex align-items-center">
                <Nav className="me-auto">
                  <div className="div-link">
                    <Link to="/reviews" className="text-decoration-none">
                      Avaliações
                    </Link>
                  </div>
                  <div className="div-link">
                    <Link
                      to="/menu"
                      className="text-decoration-none"
                    >Cardápio</Link>
                  </div>

                  <div className="div-link">
                    <Link to="/suggestions" className="text-decoration-none">Sugestões</Link>
                  </div>
                </Nav>

              </Navbar.Brand><Navbar.Brand className="d-flex align-items-center">
                <Nav className="me-auto">


                  <div className="div-link">
                    <Link to="/about" className="text-decoration-none">Sobre</Link>
                  </div>


                </Nav>
                <Nav className="me-auto">
                  <div className="div-link">
                    {userName ? (
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                          <ion-icon name="person"></ion-icon>
                          {userName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item className="custom-dropdown-item" href="#">
                            <Link to="/user/settings">
                            
                            <Row>
                              <Col>
                                Ajustes
                              </Col>
                              <Col>
                                <ion-icon name="options-outline"></ion-icon>
                              </Col>
                            </Row>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item className="custom-dropdown-item cascading-animation logout-drop" href="#" onClick={logout}>
                            <Row>
                              <Col>

                                Logout
                              </Col>
                              <Col>

                                <ion-icon name="log-out-outline"></ion-icon>
                              </Col>
                            </Row>
                          </Dropdown.Item>

                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      <Link to="/login" className="text-decoration-none">
                        <Button onClick={handleShow}>
                          <ion-icon name="person"></ion-icon>
                          Entrar
                        </Button>
                      </Link>
                    )}
                  </div>
                </Nav>
              </Navbar.Brand></>
          )}

          <Offcanvas
            show={show && isResponsive}
            onHide={handleClose}
            scroll={false}
            backdrop={false}
            placement="top"
          >
            <Offcanvas.Header closeButton>

              <Offcanvas.Title>

              </Offcanvas.Title>  <Offcanvas.Title>
                <Link to="/">


                </Link>
                <Row>
                  <Col>

                    <Figure>
                      <Figure.Image src={logo} width={64} height={64} id="sun">

                      </Figure.Image>
                    </Figure>
                  </Col>

                </Row>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div id="off-body">
                <Container>
                  <section>
                    <Row id="r-div">
                      <ListGroup className="d-flex justify-content-center">
                        <ListGroup.Item>
                          <Row>
                            <Link to="/reviews" className="text-decoration-none">
                              <h1>
                                Avaliações
                              </h1>
                            </Link>
                          </Row>

                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Row>
                            <Link
                              to="/menu"
                              className="text-decoration-none"
                            >
                              <h1>

                                Cardápio
                              </h1>
                            </Link>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item><Row>
                          <Link
                            to="/suggestions"
                            className="text-decoration-none">
                            <h1>

                              Sugestões
                            </h1>
                          </Link>
                        </Row></ListGroup.Item>

                        <ListGroup.Item><Row>
                          <Link
                            to="/about"
                            className="text-decoration-none">

                            <h1>

                              Sobre
                            </h1>
                          </Link>
                        </Row></ListGroup.Item>


                      </ListGroup>

                      <Row id="r-b">
                        <Link
                          to="/login"
                          className="text-decoration-none justify-content-center align-items-center d-flex">

                        </Link>  <div className="div-link">
                          {userName ? (
                            <Dropdown drop="up" className="d-flex justify-content-center">
                              <Button>
                                <ion-icon name="person"></ion-icon>

                                <p>
                                  {userName}
                                </p>


                              </Button>


                              {/* <Dropdown.Toggle id="dropdown-autoclose-true" className="custom-toggle">
                                <Button
                                  className={`settings-bt ${isRotated ? 'rotate' : ''}`} onClick={handleButtonClick}
                                >
                                  <ion-icon name="settings-outline"></ion-icon>
                             
                                </Button>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#">Configurações</Dropdown.Item>
                                <Dropdown.Item href="#">Logout</Dropdown.Item>
                              </Dropdown.Menu> */}
                              <Dropdown.Toggle id="dropdown-autoclose-true" className="custom-toggle">
                                <Button className={`settings-bt ${isRotated ? 'rotate' : ''}`} onClick={handleButtonClick}>
                                  <ion-icon name="settings-outline"></ion-icon>
                                </Button>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item className="custom-dropdown-item" href="#">Configurações</Dropdown.Item>
                                <Dropdown.Item className="custom-dropdown-item cascading-animation logout-drop" href="#" onClick={logout}>Logout</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          ) : (
                            <Link to="/login" className="text-decoration-none d-flex justify-content-center">
                              <Button onClick={handleShow} className="w-50 btn-e">
                                <ion-icon name="person"></ion-icon>
                                Entrar
                              </Button>
                            </Link>
                          )}
                        </div>
                      </Row>
                    </Row>
                  </section>
                </Container>
              </div>
            </Offcanvas.Body>

          </Offcanvas>
        </div>
      </Navbar>
    </>

  );
};

export default HeaderConst;