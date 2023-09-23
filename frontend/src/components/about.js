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
        <Form id="form-login">
          <div><h2>Quem somos</h2></div>
          <p>

          </p>
        </Form>
      </div>
    </>
  );
};

export default AboutConst;
