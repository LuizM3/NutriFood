import { useState, useEffect } from "react";
import {
  Container,
  Table,
  Accordion,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const MenuConst = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const datas = [];

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000/getMenu", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        const menuCafeDaManha = data.response[0];
        const menuAlmoco = data.response[1];
        const menuLancheDaTarde = data.response[2];
        const menuJantar = data.response[3];

        console.log(menuJantar);

        for (const elements of menuAlmoco) {
          // console.log(elements);
        }

        const cardapioAlmoco = () => {
          
        };
      } else {
        console.log("Erro na requisição");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  fetchData();

  useEffect(() => {
    if (id == 1) {
      navigate("/dashboard");
    }
  }, [id]);

  const ButtonDia = ({ dia }) => {
    return (
      <ButtonGroup className="me-2">
        <Button>{dia}</Button>
      </ButtonGroup>
    );
  };

  return (
    <>
      <Container className="menu-cont h-100">
        <Row className="w-100 d-flex justify-content-center text-center">
          <Col md={10}>
            {/* <ButtonToolbar aria-label="Toolbar with button groups">
              {dados.map((item, index) => (
                <ButtonDia key={index} dado={item} />
              ))}
            </ButtonToolbar> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenuConst;
