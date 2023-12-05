import { useState, useEffect } from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Button,
  ButtonGroup,
  Stack,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import cardapio from "../service/requisicao/cardapioReq";

let menuState = [];
let dia;

const MenuConst = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [tabela, setTabela] = useState(false);
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

  const menuCafeDaManha = [];
  const menuAlmoco = [];
  const menuLancheDaTarde = [];
  const menuJantar = [];

  const handleShowCardapio = (e) => {
    dia = e;
    createMenu(dia);
  };

  const createMenu = (e) => {
    setTabela(false);
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

      menuState = [];

      menuState.push(listaCafeDaManha[e - 1]);
      menuState.push(listaAlmoco[e - 1]);
      menuState.push(listaLancheDaTarde[e - 1]);
      menuState.push(listaJantar[e - 1]);

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
    <Container className="menu-cont m-0 min-vw-100">
      <Row className="w-100 d-flex justify-content-center text-center">
        <Col
          md={5}
          lg={4}
          sm={12}
          className="d-flex justify-content-center align-items-center min-vh-100"
        >
          <Col
            md={12}
            lg={12}
            sm={12}
            xs={12}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <div className="calendar-hd">
              <h4>{mesString}</h4>
            </div>
            <Calendar
              className="calendar w-100"
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
          <Col md={7} lg={8} className="border-1 table-cp">
            <Row className="h-100">
              <Col md={12} sm={12}>
                <Stack className="h-100 d-flex justify-content-end">
                  <h4>Café da manhã e Lanche da tarde</h4>
                  <Table responsive striped bordered className="table-cp">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Comida</th>
                        <th>Bebida</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Café Da Manhã</td>
                        <td>{menuState[0].comida}</td>
                        <td>{menuState[0].bebida}</td>
                      </tr>
                      <tr>
                        <td>Lanche Da Tarde</td>
                        <td>{menuState[2].comida}</td>
                        <td>{menuState[2].bebida}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Stack>
              </Col>
              <Col md={12} sm={12}>
                <Stack className="h-100 d-flex justify-content-start">
                  <h4>Almoço e Jantar</h4>
                  <Table responsive striped bordered className="table-cp">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Principal</th>
                        <th>Opção</th>
                        <th>Arroz</th>
                        <th>Feijão</th>
                        <th>Guarnição</th>
                        <th>Salada I</th>
                        <th>Salada II</th>
                        <th>Sobremesa</th>
                        <th>Suco</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Almoço</td>
                        <td>{menuState[1].principal}</td>
                        <td>{menuState[1].opcao}</td>
                        <td>{menuState[1].arroz}</td>
                        <td>{menuState[1].feijao}</td>
                        <td>{menuState[1].guarnicao}</td>
                        <td>{menuState[1].salada1}</td>
                        <td>{menuState[1].salada2}</td>
                        <td>{menuState[1].sobremesa}</td>
                        <td>{menuState[1].suco}</td>
                      </tr>
                      <tr>
                        <td>Jantar</td>
                        <td>{menuState[3].principal}</td>
                        <td>{menuState[3].opcao}</td>
                        <td>{menuState[3].arroz}</td>
                        <td>{menuState[3].feijao}</td>
                        <td>{menuState[3].guarnicao}</td>
                        <td>{menuState[3].salada1}</td>
                        <td>{menuState[3].salada2}</td>
                        <td>{menuState[3].sobremesa}</td>
                        <td>{menuState[3].suco}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Stack>
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
