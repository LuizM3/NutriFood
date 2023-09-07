import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "../assets/styles/about.scss";
import { Link } from "react-router-dom";
const AboutConst = () => {
  // const [apiResponse, setApiResponse] = useState("");

  // const callAPI = () => {
  //   fetch("http://localhost:9000/testDB")
  //     .then((res) => res.text())
  //     .then((res) => setApiResponse(res))
  //     .catch((error) => console.error("API Call Error:", error));
  // };

  // useEffect(() => {
  //   callAPI();
  // }, []);

  return (
    <>
      <div className="cont">
        <Row className="row">
          <Col>
            <Form id="form-login">
            <div><h2>Quem somos</h2></div> 
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutConst;
