import { useState, useEffect, createElement } from "react";
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

  const [datas, setDatas] = useState([]);

  const [menuCafeDaManha, setMenuCafeDaManha] = useState("");
  const [menuAlmoco, setMenuAlmoco] = useState("");
  const [menuLancheDaTarde, setMenuLancheDaTarde] = useState("");
  const [menuJantar, setMenuJantar] = useState("");

  const fetchData = async () => {
    console.log("fez");

    try {
      const response = await fetch("http://localhost:9000/getMenu", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        setMenuCafeDaManha(data.response[0]);
        setMenuAlmoco(data.response[1]);
        setMenuLancheDaTarde(data.response[2]);
        setMenuJantar(data.response[3]);

        const dias = [];
        for (const elements of menuAlmoco) {
          dias.push(elements.id);
        }

        console.log(dias);
        setDatas(dias);
        console.log(datas);
      } else {
        console.log("Erro na requisição");
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  };

  setTimeout(() => {
    fetchData();
  }, 3000);

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
            <ButtonToolbar aria-label="Toolbar with button groups">
              {datas.map((item, index) => (
                <ButtonDia key={index + 1} dado={item} />
              ))}
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenuConst;
