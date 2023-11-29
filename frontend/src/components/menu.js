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
import Calendar from "react-calendar";
import cardapio from "../service/requisicao/cardapioReq";
import arrayToTable from "array-to-table";

let menuState = [];

const MenuConst = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [datas, setDatas] = useState([]);
  const [tabela, setTabela] = useState(false);
  const [tabela2, setTabela2] = useState(false);
  const [tabela1, setTabela1] = useState(false);
  const [menu, setMenu] = useState([]);
  let mesString = "";
  const [value, onChange] = useState(new Date());
  const hoje = new Date().getMonth();

  switch (hoje) {
    case 0:
      mesString = "Janeiro";
      break;
    case 1:
      mesString = "Fevereiro";
      break;
    case 2:
      mesString = "Março";
      break;
    case 3:
      mesString = "Abril";
      break;
    case 4:
      mesString = "Maio";
      break;
    case 5:
      mesString = "Junho";
      break;
    case 6:
      mesString = "Julho";
      break;
    case 7:
      mesString = "Agosto";
      break;
    case 8:
      mesString = "Setembro";
      break;
    case 9:
      mesString = "Outubro";
      break;
    case 10:
      mesString = "Novembro";
      break;
    case 11:
      mesString = "Dezembro";
      break;
  }

  // const [menuCafeDaManha, setMenuCafeDaManha] = useState("");
  // const [menuAlmoco, setMenuAlmoco] = useState("");
  // const [menuLancheDaTarde, setMenuLancheDaTarde] = useState("");
  // const [menuJantar, setMenuJantar] = useState("");
  const menuCafeDaManha = [];
  const menuAlmoco = [];
  const menuLancheDaTarde = [];
  const menuJantar = [];

  const handleShowCardapio = (e) => {
    cardapio().then((lista) => {
      menuCafeDaManha.push(lista.response[0]);
      menuAlmoco.push(lista.response[1]);
      menuLancheDaTarde.push(lista.response[2]);
      menuJantar.push(lista.response[3]);

      const listaCafeDaManha = [];
      const listaAlmoco = [];
      const listaLancheDaTarde = [];
      const listaJantar = [];

      for (const elements of menuCafeDaManha) {
        for (const element of elements) {
          listaCafeDaManha.push(element);
        }
      }
      for (const elements of menuAlmoco) {
        for (const element of elements) {
          listaAlmoco.push(element);
        }
      }
      for (const elements of menuLancheDaTarde) {
        for (const element of elements) {
          listaLancheDaTarde.push(element);
        }
      }
      for (const elements of menuJantar) {
        for (const element of elements) {
          listaJantar.push(element);
        }
      }

      menuState.push(listaCafeDaManha[e - 1]);
      menuState.push(listaAlmoco[e - 1]);
      menuState.push(listaLancheDaTarde[e - 1]);
      menuState.push(listaJantar[e - 1]);

      console.log(menuState)

      setTabela(true);
    });
  };

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
    <Container className="menu-cont h-100">
      <Row className="w-100 d-flex justify-content-center text-center">
        <Col md={6} sm={12}>
          <Col
            md={12}
            lg={12}
            sm={12}
            xs={12}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <div>{mesString}</div>
            <Calendar
              onChange={onChange}
              value={value}
              defaultActiveStartDate={new Date()}
              tileDisabled={({ activeStartDate, date, view }) =>
                date.getUTCDay() === 0
              }
              maxDate={new Date(value.getFullYear(), value.getMonth(), "31")}
              minDate={new Date(value.getFullYear(), value.getMonth(), "1")}
              showNeighboringMonth={false}
              minDetail={"month"}
              showNavigation={false}
              onClickDay={(day, event) => handleShowCardapio(day.getUTCDate())}
            />
          </Col>
        </Col>
        {tabela ? (
          <Col md={6}>
            <Row>
              <Col md={12} sm={12}>
                {tabela1}
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>principal</th>
                      <th>opção</th>
                      <th>arroz</th>
                      <th>feijão</th>
                      <th>guarnição</th>
                      <th>salada1</th>
                      <th>salada2</th>
                      <th>sobremesa</th>
                      <th>suco</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>{}</tr>
                  </tbody>
                </Table>
              </Col>
              <Col md={12} sm={12}>
                {tabela2}
              </Col>
            </Row>
          </Col>
        ) : (
          <Col md={6}></Col>
        )}
      </Row>
    </Container>
  );
};

export default MenuConst;
