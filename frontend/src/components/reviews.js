import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  ProgressBar,
  Navbar,
  Button,
  Row,
  Alert,
  Col,
  Figure,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ReviewsConst = () => {
  const navigate = useNavigate();
  const arrow = require("../assets/images/left-arrow.png");
  const [showCont, setShowCont] = useState("");
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (token && id != 1) {
      setShowCont(true);
    } else if (id == 1) {
      navigate("/dashboard");
    }
  }, [true]);

  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showErrorAlert, setErrorAlert] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    group1: null,
    group2: null,
    group3: null,
    group4: null,
    group5: null,
    group6: null,
    group7: null,
    group8: null,
    group9: null,
    group10: null,
  });

  const handleOpcaoChange = (event, group1) => {
    const selectedValue = event.target.id;
    if (group1 && selectedOptions[group1] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group1]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange2 = (event, group2) => {
    const selectedValue = event.target.id;
    if (group2 && selectedOptions[group2] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group2]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange3 = (event, group3) => {
    const selectedValue = event.target.id;
    if (group3 && selectedOptions[group3] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group3]: selectedValue,
      }));
    }
  };
  const handleOpcaoChange4 = (event, group4) => {
    const selectedValue = event.target.id;
    if (group4 && selectedOptions[group4] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group4]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange5 = (event, group5) => {
    const selectedValue = event.target.id;
    if (group5 && selectedOptions[group5] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group5]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange6 = (event, group6) => {
    const selectedValue = event.target.id;
    if (group6 && selectedOptions[group6] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group6]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange7 = (event, group7) => {
    const selectedValue = event.target.id;
    if (group7 && selectedOptions[group7] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group7]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange8 = (event, group8) => {
    const selectedValue = event.target.id;
    if (group8 && selectedOptions[group8] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group8]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange9 = (event, group9) => {
    const selectedValue = event.target.id;
    if (group9 && selectedOptions[group9] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group9]: selectedValue,
      }));
    }
  };

  const handleOpcaoChange10 = (event, group10) => {
    const selectedValue = event.target.id;
    if (group10 && selectedOptions[group10] !== selectedValue) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [group10]: selectedValue,
      }));
    }
  };

  const calculateProgress = () => {
    const selectedCount = Object.values(selectedOptions).filter(
      (value) => value !== null
    ).length;
    return (selectedCount / 10) * 100;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      selectedOptions.group1 === null ||
      selectedOptions.group2 === null ||
      selectedOptions.group3 === null ||
      selectedOptions.group4 === null ||
      selectedOptions.group5 === null ||
      selectedOptions.group6 === null ||
      selectedOptions.group7 === null ||
      selectedOptions.group8 === null ||
      selectedOptions.group9 === null ||
      selectedOptions.group10 === null
    ) {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 5000);
      return;
    } else {
      setShowAlertSuccess(true);
      setTimeout(() => {
        setShowAlertSuccess(false);
      }, 5000);

      if (selectedOptions.group1) {
        switch (selectedOptions.group1) {
          case "star5_group1":
            selectedOptions.group1 = 5;
            break;
          case "star4_group1":
            selectedOptions.group1 = 4;
            break;
          case "star3_group1":
            selectedOptions.group1 = 3;
            break;
          case "star2_group1":
            selectedOptions.group1 = 2;
            break;
          case "star1_group1":
            selectedOptions.group1 = 1;
        }
      }

      if (selectedOptions.group2) {
        switch (selectedOptions.group2) {
          case "star5_group2":
            selectedOptions.group2 = 5;
            break;
          case "star4_group2":
            selectedOptions.group2 = 4;
            break;
          case "star3_group2":
            selectedOptions.group2 = 3;
            break;
          case "star2_group2":
            selectedOptions.group2 = 2;
            break;
          case "star1_group2":
            selectedOptions.group2 = 1;
        }
      }

      if (selectedOptions.group3) {
        switch (selectedOptions.group3) {
          case "star5_group3":
            selectedOptions.group3 = 5;
            break;
          case "star4_group3":
            selectedOptions.group3 = 4;
            break;
          case "star3_group3":
            selectedOptions.group3 = 3;
            break;
          case "star2_group3":
            selectedOptions.group3 = 2;
            break;
          case "star1_group3":
            selectedOptions.group3 = 1;
        }
      }

      if (selectedOptions.group4) {
        switch (selectedOptions.group4) {
          case "star5_group4":
            selectedOptions.group4 = 5;
            break;
          case "star4_group4":
            selectedOptions.group4 = 4;
            break;
          case "star3_group4":
            selectedOptions.group4 = 3;
            break;
          case "star2_group4":
            selectedOptions.group4 = 2;
            break;
          case "star1_group4":
            selectedOptions.group4 = 1;
        }
      }

      if (selectedOptions.group5) {
        switch (selectedOptions.group5) {
          case "star5_group5":
            selectedOptions.group5 = 5;
            break;
          case "star4_group5":
            selectedOptions.group5 = 4;
            break;
          case "star3_group5":
            selectedOptions.group5 = 3;
            break;
          case "star2_group5":
            selectedOptions.group5 = 2;
            break;
          case "star1_group5":
            selectedOptions.group5 = 1;
        }
      }

      if (selectedOptions.group6) {
        switch (selectedOptions.group6) {
          case "star5_group6":
            selectedOptions.group6 = 5;
            break;
          case "star4_group6":
            selectedOptions.group6 = 4;
            break;
          case "star3_group6":
            selectedOptions.group6 = 3;
            break;
          case "star2_group6":
            selectedOptions.group6 = 2;
            break;
          case "star1_group6":
            selectedOptions.group6 = 1;
        }
      }

      if (selectedOptions.group7) {
        switch (selectedOptions.group7) {
          case "star5_group7":
            selectedOptions.group7 = 5;
            break;
          case "star4_group7":
            selectedOptions.group7 = 4;
            break;
          case "star3_group7":
            selectedOptions.group7 = 3;
            break;
          case "star2_group7":
            selectedOptions.group7 = 2;
            break;
          case "star1_group7":
            selectedOptions.group7 = 1;
        }
      }

      if (selectedOptions.group8) {
        switch (selectedOptions.group8) {
          case "star5_group8":
            selectedOptions.group8 = 5;
            break;
          case "star4_group8":
            selectedOptions.group8 = 4;
            break;
          case "star3_group8":
            selectedOptions.group8 = 3;
            break;
          case "star2_group8":
            selectedOptions.group8 = 2;
            break;
          case "star1_group8":
            selectedOptions.group8 = 1;
        }
      }

      if (selectedOptions.group9) {
        switch (selectedOptions.group9) {
          case "star5_group9":
            selectedOptions.group9 = 5;
            break;
          case "star4_group9":
            selectedOptions.group9 = 4;
            break;
          case "star3_group9":
            selectedOptions.group9 = 3;
            break;
          case "star2_group9":
            selectedOptions.group9 = 2;
            break;
          case "star1_group9":
            selectedOptions.group9 = 1;
        }
      }

      if (selectedOptions.group10) {
        switch (selectedOptions.group10) {
          case "star5_group10":
            selectedOptions.group10 = 5;
            break;
          case "star4_group10":
            selectedOptions.group10 = 4;
            break;
          case "star3_group10":
            selectedOptions.group10 = 3;
            break;
          case "star2_group10":
            selectedOptions.group10 = 2;
            break;
          case "star1_group10":
            selectedOptions.group10 = 1;
        }
      }

      const group1 = selectedOptions.group1;
      const group2 = selectedOptions.group2;
      const group3 = selectedOptions.group3;
      const group4 = selectedOptions.group4;
      const group5 = selectedOptions.group5;
      const group6 = selectedOptions.group6;
      const group7 = selectedOptions.group7;
      const group8 = selectedOptions.group8;
      const group9 = selectedOptions.group9;
      const group10 = selectedOptions.group10;

      const idUsuario = Number(localStorage.getItem("id"));
      // Enviar dados ao banco de dadaos aqui pq depois anula os campos

      const response = await fetch("http://localhost:9000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          group1,
          group2,
          group3,
          group4,
          group5,
          group6,
          group7,
          group8,
          group9,
          group10,
          idUsuario,
        }),
      });

      // Limpeza de campos após sucesso e envio ao banco
      selectedOptions.group1 = null;
      selectedOptions.group2 = null;
      selectedOptions.group3 = null;
      selectedOptions.group4 = null;
      selectedOptions.group5 = null;
      selectedOptions.group6 = null;
      selectedOptions.group7 = null;
      selectedOptions.group8 = null;
      selectedOptions.group9 = null;
      selectedOptions.group10 = null;
      calculateProgress(0);
      return;
    }
  };

  const progress = calculateProgress();
  return (
    <>
      <Row className="position-fixed alert-row rev-cont">
        {showAlertSuccess && (
          <Alert
            variant="success"
            className="align-items-center d-flex fade"
            onClose={() => setShowAlertSuccess(false)}
          >
            Sugestão enviada com sucesso!
          </Alert>
        )}
        {showErrorAlert && (
          <Alert
            variant="danger"
            className="align-items-center d-flex fade"
            onClose={() => setErrorAlert(false)}
          >
            Erro ao enviar sugestão
          </Alert>
        )}
      </Row>
      <Container className="cont-s h-100">
        {showCont ? (
          <Row className="overflow-scroll w-100 mt-5 scroll-row overflow-x-hidden">
            <Container className="">
              <Navbar id="progress-nav">
                <Container className="mt-2">
                  <ProgressBar now={progress} id="progress-bar" />
                </Container>
              </Navbar>
              <div className="cont2 mt-2 justify-content-center align-items-center">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    {" "}
                    <h2>Coleta da avaliação</h2>
                  </Row>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col md={6}>
                      <h5>
                        Dentre os pontos abordados abaixo, qual a sua avaliação
                        em relação ao Restaurante Institucional?
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <h5>Apresentação das preparações</h5>
                  </Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group1`}
                          name="group1"
                          value="5"
                          onChange={(e) => handleOpcaoChange(e, "group1")}
                          checked={selectedOptions.group1 === `star5_group1`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group1" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group1`}
                          name="group1"
                          value="4"
                          onChange={(e) => handleOpcaoChange(e, "group1")}
                          checked={selectedOptions.group1 === `star4_group1`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group1" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group1`}
                          name="group1"
                          value="3"
                          onChange={(e) => handleOpcaoChange(e, "group1")}
                          checked={selectedOptions.group1 === `star3_group1`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group1" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group1`}
                          name="group1"
                          value="2"
                          onChange={(e) => handleOpcaoChange(e, "group1")}
                          checked={selectedOptions.group1 === `star2_group1`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group1" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group1`}
                          name="group1"
                          value="1"
                          onChange={(e) => handleOpcaoChange(e, "group1")}
                          checked={selectedOptions.group1 === `star1_group1`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group1" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <h5>Variedade do cardápio</h5>
                  </Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group2`}
                          name="group2"
                          value="5"
                          onChange={(e) => handleOpcaoChange2(e, "group2")}
                          checked={selectedOptions.group2 === `star5_group2`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group2" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group2`}
                          name="group2"
                          value="4"
                          onChange={(e) => handleOpcaoChange2(e, "group2")}
                          checked={selectedOptions.group2 === `star4_group2`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group2" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group2`}
                          name="group2"
                          value="3"
                          onChange={(e) => handleOpcaoChange2(e, "group2")}
                          checked={selectedOptions.group2 === `star3_group2`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group2" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group2`}
                          name="group2"
                          value="2"
                          onChange={(e) => handleOpcaoChange2(e, "group2")}
                          checked={selectedOptions.group2 === `star2_group2`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group2" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group2`}
                          name="group2"
                          value="1"
                          onChange={(e) => handleOpcaoChange2(e, "group2")}
                          checked={selectedOptions.group2 === `star1_group2`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group2" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <h5>Sabor das refeições</h5>
                  </Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group3`}
                          name="group3"
                          value="5"
                          onChange={(e) => handleOpcaoChange3(e, "group3")}
                          checked={selectedOptions.group3 === `star5_group3`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group3" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group3`}
                          name="group3"
                          value="4"
                          onChange={(e) => handleOpcaoChange3(e, "group3")}
                          checked={selectedOptions.group3 === `star4_group3`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group3" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group3`}
                          name="group3"
                          value="3"
                          onChange={(e) => handleOpcaoChange3(e, "group3")}
                          checked={selectedOptions.group3 === `star3_group3`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group3" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group3`}
                          name="group3"
                          value="2"
                          onChange={(e) => handleOpcaoChange3(e, "group3")}
                          checked={selectedOptions.group3 === `star2_group3`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group3" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group3`}
                          name="group3"
                          value="1"
                          onChange={(e) => handleOpcaoChange3(e, "group3")}
                          checked={selectedOptions.group3 === `star1_group3`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group3" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <h5>Sabor do suco</h5>
                  </Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group4`}
                          name="group4"
                          value="5"
                          onChange={(e) => handleOpcaoChange4(e, "group4")}
                          checked={selectedOptions.group4 === `star5_group4`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group4" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group4`}
                          name="group4"
                          value="4"
                          onChange={(e) => handleOpcaoChange4(e, "group4")}
                          checked={selectedOptions.group4 === `star4_group4`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group4" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group4`}
                          name="group4"
                          value="3"
                          onChange={(e) => handleOpcaoChange4(e, "group4")}
                          checked={selectedOptions.group4 === `star3_group4`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group4" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group4`}
                          name="group4"
                          value="2"
                          onChange={(e) => handleOpcaoChange4(e, "group4")}
                          checked={selectedOptions.group4 === `star2_group4`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group4" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group4`}
                          name="group4"
                          value="1"
                          onChange={(e) => handleOpcaoChange4(e, "group4")}
                          checked={selectedOptions.group4 === `star1_group4`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group4" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <h5>Sabor da sobremesa</h5>
                  </Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group5`}
                          name="group5"
                          value="5"
                          onChange={(e) => handleOpcaoChange5(e, "group5")}
                          checked={selectedOptions.group5 === `star5_group5`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group5" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group5`}
                          name="group5"
                          value="4"
                          onChange={(e) => handleOpcaoChange5(e, "group5")}
                          checked={selectedOptions.group5 === `star4_group5`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group5" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group5`}
                          name="group5"
                          value="3"
                          onChange={(e) => handleOpcaoChange5(e, "group5")}
                          checked={selectedOptions.group5 === `star3_group5`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group5" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group5`}
                          name="group5"
                          value="2"
                          onChange={(e) => handleOpcaoChange5(e, "group5")}
                          checked={selectedOptions.group5 === `star2_group5`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group5" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group5`}
                          name="group5"
                          value="1"
                          onChange={(e) => handleOpcaoChange5(e, "group5")}
                          checked={selectedOptions.group5 === `star1_group5`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group5" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <h5>Temperatura dos alimentos</h5>
                  </Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group6`}
                          name="group6"
                          value="5"
                          onChange={(e) => handleOpcaoChange6(e, "group6")}
                          checked={selectedOptions.group6 === `star5_group6`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group6" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group6`}
                          name="group6"
                          value="4"
                          onChange={(e) => handleOpcaoChange6(e, "group6")}
                          checked={selectedOptions.group6 === `star4_group6`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group6" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group6`}
                          name="group6"
                          value="3"
                          onChange={(e) => handleOpcaoChange6(e, "group6")}
                          checked={selectedOptions.group6 === `star3_group6`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group6" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group6`}
                          name="group6"
                          value="2"
                          onChange={(e) => handleOpcaoChange6(e, "group6")}
                          checked={selectedOptions.group6 === `star2_group6`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group6" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group6`}
                          name="group6"
                          value="1"
                          onChange={(e) => handleOpcaoChange6(e, "group6")}
                          checked={selectedOptions.group6 === `star1_group6`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group6" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <h5>Atendimento dos funcionários</h5>
                  </Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group7`}
                          name="group7"
                          value="5"
                          onChange={(e) => handleOpcaoChange7(e, "group7")}
                          checked={selectedOptions.group7 === `star5_group7`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group7" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group7`}
                          name="group7"
                          value="4"
                          onChange={(e) => handleOpcaoChange7(e, "group7")}
                          checked={selectedOptions.group7 === `star4_group7`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group7" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group7`}
                          name="group7"
                          value="3"
                          onChange={(e) => handleOpcaoChange7(e, "group7")}
                          checked={selectedOptions.group7 === `star3_group7`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group7" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group7`}
                          name="group7"
                          value="2"
                          onChange={(e) => handleOpcaoChange7(e, "group7")}
                          checked={selectedOptions.group7 === `star2_group7`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group7" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group7`}
                          name="group7"
                          value="1"
                          onChange={(e) => handleOpcaoChange7(e, "group7")}
                          checked={selectedOptions.group7 === `star1_group7`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group7" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <h5>Higiene do restaurante</h5>
                  </Row>
                  <Row>
                    (buffet, mesas, cadeiras, pisos, pratos, bandejas e
                    talheres)
                  </Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group8`}
                          name="group8"
                          value="5"
                          onChange={(e) => handleOpcaoChange8(e, "group8")}
                          checked={selectedOptions.group8 === `star5_group8`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group8" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group8`}
                          name="group8"
                          value="4"
                          onChange={(e) => handleOpcaoChange8(e, "group8")}
                          checked={selectedOptions.group8 === `star4_group8`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group8" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group8`}
                          name="group8"
                          value="3"
                          onChange={(e) => handleOpcaoChange8(e, "group8")}
                          checked={selectedOptions.group8 === `star3_group8`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group8" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group8`}
                          name="group8"
                          value="2"
                          onChange={(e) => handleOpcaoChange8(e, "group8")}
                          checked={selectedOptions.group8 === `star2_group8`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group8" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group8`}
                          name="group8"
                          value="1"
                          onChange={(e) => handleOpcaoChange8(e, "group8")}
                          checked={selectedOptions.group8 === `star1_group8`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group8" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <h5>Temperatura do ambiente</h5>
                  </Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group9`}
                          name="group9"
                          value="5"
                          onChange={(e) => handleOpcaoChange9(e, "group9")}
                          checked={selectedOptions.group9 === `star5_group9`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group9" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group9`}
                          name="group9"
                          value="4"
                          onChange={(e) => handleOpcaoChange9(e, "group9")}
                          checked={selectedOptions.group9 === `star4_group9`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group9" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group9`}
                          name="group9"
                          value="3"
                          onChange={(e) => handleOpcaoChange9(e, "group9")}
                          checked={selectedOptions.group9 === `star3_group9`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group9" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group9`}
                          name="group9"
                          value="2"
                          onChange={(e) => handleOpcaoChange9(e, "group9")}
                          checked={selectedOptions.group9 === `star2_group9`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group9" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group9`}
                          name="group9"
                          value="1"
                          onChange={(e) => handleOpcaoChange9(e, "group9")}
                          checked={selectedOptions.group9 === `star1_group9`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group9" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <h5>Tempo de espera para preparar o prato</h5>
                  </Row>
                  <Row>(sem considerar fila)</Row>
                  <Row>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="rate">
                        <input
                          type={type}
                          id={`star5_group10`}
                          name="group10"
                          value="5"
                          onChange={(e) => handleOpcaoChange10(e, "group10")}
                          checked={selectedOptions.group10 === `star5_group10`}
                          className="radio-input"
                        />
                        <label htmlFor="star5_group10" title="text"></label>

                        <input
                          type={type}
                          id={`star4_group10`}
                          name="group10"
                          value="4"
                          onChange={(e) => handleOpcaoChange10(e, "group10")}
                          checked={selectedOptions.group10 === `star4_group10`}
                          className="radio-input"
                        />
                        <label htmlFor="star4_group10" title="text"></label>

                        <input
                          type={type}
                          id={`star3_group10`}
                          name="group10"
                          value="3"
                          onChange={(e) => handleOpcaoChange10(e, "group10")}
                          checked={selectedOptions.group10 === `star3_group10`}
                          className="radio-input"
                        />
                        <label htmlFor="star3_group10" title="text"></label>

                        <input
                          type={type}
                          id={`star2_group10`}
                          name="group10"
                          value="2"
                          onChange={(e) => handleOpcaoChange10(e, "group10")}
                          checked={selectedOptions.group10 === `star2_group10`}
                          className="radio-input"
                        />
                        <label htmlFor="star2_group10" title="text"></label>

                        <input
                          type={type}
                          id={`star1_group10`}
                          name="group10"
                          value="1"
                          onChange={(e) => handleOpcaoChange10(e, "group10")}
                          checked={selectedOptions.group10 === `star1_group10`}
                          className="radio-input"
                        />
                        <label htmlFor="star1_group10" title="text"></label>
                      </div>
                    ))}
                  </Row>
                  <Row>
                    <Button type="submit" className="btn-reviews bt-sub">
                      Enviar
                    </Button>
                  </Row>
                </Form>
              </div>
            </Container>
          </Row>
        ) : (
          <Row className="w-100 justify-content-center d-flex align-items-center redirect">
            <Col lg={5} md={6} sm={8} className="redirect-c">
              <Container className="d-flex justify-content-center align-items-center h-100 w-100">
                <Row className="h-100 w-100">
                  <Col className="pt-2">
                    <Link to="/" className="text-decoration-none back">
                      <Figure>
                        <Figure.Image width={25} height={25} src={arrow} />{" "}
                        <Figure.Caption></Figure.Caption>
                      </Figure>
                      Voltar à página principal{" "}
                    </Link>
                  </Col>
                  <Col
                    md={12}
                    className="d-flex justify-content-center align-items-start text-center"
                  >
                    <h4 className="fw-light">
                      Para realizar esta ação é necessário fazer login primeiro
                    </h4>
                  </Col>

                  <Col
                    md={12}
                    className="d-flex align-items-end justify-content-center w-100"
                  >
                    <Row className="d-flex justify-content-center align-items-center w-100 mb-3">
                      <Col>
                        <p>Clique no botão para logar com seu usuário</p>
                      </Col>
                      <Col md={12} lg={4} sm={12} xs={12} className="p-0">
                        <Link to="/login" className="text-decoration-none">
                          <Button className="w-100 bt-sub">Logar</Button>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ReviewsConst;
