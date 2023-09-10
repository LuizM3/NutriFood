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
              <div>
                <h2>Github</h2>
                <p>
                  <b>Bryan: </b>
                  <Link to="https://github.com/bryantoken" target="_blank">
                    https://github.com/bryantoken
                  </Link>
                </p>

                <p>
                  <b>Luiz: </b>
                  <Link to="https://github.com/LuizM3" target="_blank">
                    https://github.com/LuizM3
                  </Link>
                </p>
              </div>

              <div>
                <h2>Gmail</h2>
                <p>
                  <b>Heitor: </b> heitorpoleze@gmail.com
                </p>
                <p>
                  <b>Filipe: </b> filipekiefer@gmail.com
                </p>
                <p>
                  <b>Ruan: </b> ruanp608@gmail.com
                </p>
              </div>
              <div>
                <h2>Telefones</h2>
                <p>
                  <b>Luiz:</b> (27)996679524{" "}
                </p>

                <p>
                  <b>Bryan:</b> (27)999189301
                </p>

                <p>
                  <b>Alex:</b> (27)999616559
                </p>
              </div>
            </Form>
         
      </div>
    </>
  );
};

export default AboutConst;
