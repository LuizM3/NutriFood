import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../sass/about.scss";

const AboutConst = () => {
  const [apiResponse, setApiResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/testDB")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
      .catch((error) => console.error("API Call Error:", error));
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="container-about">
      <Container fluid id="cont-about">
        <Row>
          <Col>
            <p>{apiResponse}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutConst;
