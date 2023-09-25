import React from "react";
import { Container, Col, Row,Tab, Nav} from "react-bootstrap";
import "../assets/styles/about.scss";
import { Link } from "react-router-dom";
const AboutConst = () => {
  return (
    <>
      {/* <div className="cont">
      
      </div> */}
      {/* <Row className="row-top w-100">

      </Row>
      <Row className="w-100 m-0 r-about"> */}
        {/* <Container className="d-flex justify-content-center align-items-center">
          <Row className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Col className="h-100 overflow-scroll overflow-x-hidden" md={3} sm={12}>
              <Row className="h-25 bg-success"></Row>
              <Row className="h-25 bg-danger"></Row>
              <Row className="h-25 bg-success"></Row>
              <Row className="h-25 bg-info"></Row>
              <Row className="h-25 bg-success"></Row>
            </Col>

            <Col className="h-100 overflow-scroll overflow-x-hidden" md={6} sm={12}>
              <Container className="bg-dark h-100">
              </Container>
              <Container className="bg-danger h-50">
              </Container>
              <Container className="bg-info h-50">
              </Container>
              <Container className="bg-success h-25">
              </Container>
              <Container className="bg-dark h-25">
              </Container>
            </Col>
            <Col className="h-100 overflow-hidden" md={3} sm={12}>
              <Row className="bg-dark h-25">

              </Row>
              <Row className="h-25 bg-danger"></Row>
              <Row className="h-25 bg-success"></Row>
              <Row className="h-25 bg-info"></Row>
            </Col>

          </Row>

        </Container> */}
      {/* </Row> */}


       <Row className="d-flex justify-content-center align-items-center h-100 w-100 m-0 mt-4">
 <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="h-75">
        <Col md={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="primeiro">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="segundo">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="terceiro">Tab 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="quarto">Tab 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="quinto">Tab 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sexto">Tab 6</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="setimo">Tab 7</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="oitavo">Tab 8</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="nono">Tab 9</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="decimo">Tab 10</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9}>
          <Tab.Content className="h-100 bg-dark">
            <Tab.Pane eventKey="primeiro">
            <Container className="bg-success">
            
            </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="segundo">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </Row>
 
    </>
  );
};

export default AboutConst;
