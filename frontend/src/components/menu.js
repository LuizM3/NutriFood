import { Container, Table } from "react-bootstrap";

const MenuConst = () => {

  return (
    <>
<Container className="menu-cont h-100">
        <Table responsive>
      <thead>
        {/* <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr> */}
        <tr>
          <th>#</th>
          <th>
            Segunda-feira
          </th>
          <th>
            Terça-feira
          </th>
          <th>
            Quarta-feira
          </th>
          <th>
            Quinta-feira
          </th>
          <th>
            Sexta-feira
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Café da manhã
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Almoço</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Café da tarde</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Jantar</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {/* <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr> */}
      </tbody>
    </Table>
</Container>
    </>
  );
};

export default MenuConst;  