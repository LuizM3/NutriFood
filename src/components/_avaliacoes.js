// import "../Sass/_avaliacoes.scss";
// import React, { useState } from 'react';
// import { Container, Row, Col, Form } from 'react-bootstrap';
// import Pagination from 'react-bootstrap/Pagination';
// import ProgressBar from 'react-bootstrap/ProgressBar';

// let progresso = 0;
// const Avaliacoes = () => {
//   const [opcaoSelecionada, setOpcaoSelecionada] = useState(false);

//   const handleOpcaoChange = (event) => {
//     setOpcaoSelecionada(event.target.checked);
//     progresso += 12.5;
//   };

//   const handleNextClick = () => {
//     if (opcaoSelecionada) {

//       // Avance para a próxima etapa
//     } else {
//       // Exiba uma mensagem de erro ou tome a ação apropriada
//     }
//   };

//   return (
//     <>
//       <Container className="cont2">

//         <Row className="row">
//           <Col id="pg-prev">
//             <Pagination>
//               <Pagination.Prev href="/">Voltar</Pagination.Prev>
//             </Pagination>
//             <ProgressBar now={progresso} />
//           </Col>

//         </Row>

//         <Row className="row">
//           <Col className="col-av">

//             <Form className="formulario-av">


//               <h3>O que você escolheu hoje de principal?</h3>
//               {['radio'].map((type) => (
//                 <div key={`inline-${type}`} className="mb-3">
//                   <Form.Check
//                     inline
//                     label="Carne"
//                     name="group1"
//                     type={type}
//                     id={`inline-${type}-1`}
//                     onChange={handleOpcaoChange}
//                   />
//                   <Form.Check
//                     inline
//                     label="Opção vegeteriana"
//                     name="group1"
//                     type={type}
//                     id={`inline-${type}-2`}
//                     onChange={handleOpcaoChange}
//                   />
//                   <Form.Check
//                     inline
//                     label="Nada"
//                     name="group1"
//                     type={type}
//                     id={`inline-${type}-3`}
//                     onChange={handleOpcaoChange}
//                   />
//                 </div>
//               ))}
//             </Form>
//           </Col>
//         </Row>
//         <Row className="row">
//           <Col id="pg-next">
//             <Pagination>
//               <Pagination.Next
//                 href="/avaliacoes/principal"
//                 onClick={handleNextClick}
//                 disabled={!opcaoSelecionada} // Desativa o botão quando nenhuma opção estiver selecionada
//               >
//                 Próximo
//               </Pagination.Next>
//             </Pagination>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Avaliacoes;
