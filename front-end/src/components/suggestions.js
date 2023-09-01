import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../assets/styles/about.scss";

const AboutConst = () => {
  const [apiResponse, setApiResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/suggestions")
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
      .catch((error) => console.error("API Call Error:", error));
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <div className="cont">
        <Row className="row">
          <Col>
            <Form id="form-login">
            <div><h2>Quem somos?</h2></div>
            <p></p>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutConst;
