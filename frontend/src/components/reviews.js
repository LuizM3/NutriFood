import React, { useState } from "react";
import {

  Container,
  Form,
  ProgressBar,
  Navbar,
  Button,
  Row,
  Col

} from "react-bootstrap";

const ReviewsConst = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    group1: null,
    group2: null
    // Adicione outras chaves de grupos conforme necessário
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

  const progress = calculateProgress();

  return (
    <>
      <Container className="h-100">
        <Row className="overflow-scroll w-100 mt-5 scroll-row overflow-x-hidden">
          {/* <div id="progress-div" >
          <Navbar className="flex-nowrap" id="progress-nav">
            <Container>
              <ProgressBar now={progress} id="progress-bar" />
            </Container>
          </Navbar>
        </div> */}
          <Container className="">
            <Navbar id="progress-nav">
              <Container className="mt-2">
                <ProgressBar now={progress} id="progress-bar" />
              </Container>
            </Navbar>
            <div className="cont2 mt-2">


              <Form> <h2>Coleta da avaliação</h2>
              </Form>
              <Form>
                <h5>
                  Dentre os pontos abordados abaixo, qual a sua avaliação em
                  relação ao Restaurante Institucional?
                </h5>
              </Form>
              <Form>

                <h5>Apresentação das preparações</h5>
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group1"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange(e, "group1")}
                      checked={selectedOptions.group1 === `inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                <h5>Variedade do cardápio</h5>
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group2"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group2"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group2"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group2"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group2"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange2(e, "group2")}
                      checked={selectedOptions.group2 === `inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>{" "}
              <Form>
                <h5>Sabor das refeições</h5>
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group3"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group3"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group3"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group3"
                      type={type}
                      id={`inline-${type}-4`}
                      o onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group3"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange3(e, "group3")}
                      checked={selectedOptions.group3 === `inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                <h5>Sabor do suco</h5>
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group4"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group4"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group4"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group4"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group4"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange4(e, "group4")}
                      checked={selectedOptions.group4 === `inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                <h5>Sabor da sobremesa</h5>
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group5"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group5"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group5"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group5"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group5"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange5(e, "group5")}
                      checked={selectedOptions.group5 === `inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                <h5>Temperatura dos alimentos</h5>
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group6"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group6"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group6"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group6"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group6"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange6(e, "group6")}
                      checked={selectedOptions.group6 === `inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                <h5>Atendimento dos funcionários</h5>
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group7"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group7"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group7"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group7"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group7"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange7(e, "group7")}
                      checked={selectedOptions.group7 === `inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                <h5>
                  Higiene do restaurante
                </h5>
                (buffet, mesas, cadeiras, pisos, pratos, bandejas e talheres)
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group8"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group8"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group8"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group8"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group8"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange8(e, "group8")}
                      checked={selectedOptions.group8 === `inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                <h5>Temperatura do ambiente</h5>
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group9"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group9"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group9"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group9"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group9"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange9(e, "group9")}
                      checked={selectedOptions.group9 === `inline-${type}-5`}
                    />
                  </div>
                ))}
              </Form>
              <Form>
                <h5>
                  Tempo de espera para preparar o prato
                </h5>
                (sem considerar fila)
                {/* <p>Marque apenas uma opção.</p> */}
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-4">
                    <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-1`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-2`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-3`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-4`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-4`}
                    />
                    <Form.Check
                      inline
                      name="group10"
                      type={type}
                      id={`inline-${type}-5`}
                      onChange={(e) => handleOpcaoChange10(e, "group10")}
                      checked={selectedOptions.group10 === `inline-${type}-5`}
                    />
                  </div>
                ))}<Button type="submit" id="button-login-signup">
                  Enviar
                </Button>
              </Form>

            </div></Container>

        </Row>
      </Container>
    </>
  );
};

export default ReviewsConst;
// {/* <Container>
//         <div className="cont2">
//           <div id="progress-div">
//             <Navbar sticky="top" className="flex-nowrap" id="progress-nav">
//               <Container>
//                 <ProgressBar now={progress} id="progress-bar" />
//               </Container>
//             </Navbar>
//           </div>



//           <Form> <h2>Coleta da avaliação</h2>
//           </Form>
//           <Form>
//             <h5>
//               Dentre os pontos abordados abaixo, qual a sua avaliação em
//               relação ao Restaurante Institucional?
//             </h5>
//           </Form>
//           <Form>

//             <h5>Apresentação das preparações</h5>
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group1"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange(e, "group1")}
//                   checked={selectedOptions.group1 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group1"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange(e, "group1")}
//                   checked={selectedOptions.group1 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group1"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange(e, "group1")}
//                   checked={selectedOptions.group1 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group1"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   onChange={(e) => handleOpcaoChange(e, "group1")}
//                   checked={selectedOptions.group1 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group1"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange(e, "group1")}
//                   checked={selectedOptions.group1 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}
//           </Form>
//           <Form>
//             <h5>Variedade do cardápio</h5>
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group2"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange2(e, "group2")}
//                   checked={selectedOptions.group2 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group2"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange2(e, "group2")}
//                   checked={selectedOptions.group2 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group2"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange2(e, "group2")}
//                   checked={selectedOptions.group2 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group2"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   onChange={(e) => handleOpcaoChange2(e, "group2")}
//                   checked={selectedOptions.group2 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group2"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange2(e, "group2")}
//                   checked={selectedOptions.group2 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}
//           </Form>{" "}
//           <Form>
//             <h5>Sabor das refeições</h5>
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group3"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange3(e, "group3")}
//                   checked={selectedOptions.group3 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group3"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange3(e, "group3")}
//                   checked={selectedOptions.group3 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group3"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange3(e, "group3")}
//                   checked={selectedOptions.group3 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group3"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   o onChange={(e) => handleOpcaoChange3(e, "group3")}
//                   checked={selectedOptions.group3 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group3"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange3(e, "group3")}
//                   checked={selectedOptions.group3 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}
//           </Form>
//           <Form>
//             <h5>Sabor do suco</h5>
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group4"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange4(e, "group4")}
//                   checked={selectedOptions.group4 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group4"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange4(e, "group4")}
//                   checked={selectedOptions.group4 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group4"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange4(e, "group4")}
//                   checked={selectedOptions.group4 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group4"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   onChange={(e) => handleOpcaoChange4(e, "group4")}
//                   checked={selectedOptions.group4 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group4"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange4(e, "group4")}
//                   checked={selectedOptions.group4 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}
//           </Form>
//           <Form>
//             <h5>Sabor da sobremesa</h5>
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group5"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange5(e, "group5")}
//                   checked={selectedOptions.group5 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group5"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange5(e, "group5")}
//                   checked={selectedOptions.group5 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group5"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange5(e, "group5")}
//                   checked={selectedOptions.group5 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group5"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   onChange={(e) => handleOpcaoChange5(e, "group5")}
//                   checked={selectedOptions.group5 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group5"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange5(e, "group5")}
//                   checked={selectedOptions.group5 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}
//           </Form>
//           <Form>
//             <h5>Temperatura dos alimentos</h5>
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group6"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange6(e, "group6")}
//                   checked={selectedOptions.group6 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group6"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange6(e, "group6")}
//                   checked={selectedOptions.group6 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group6"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange6(e, "group6")}
//                   checked={selectedOptions.group6 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group6"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   onChange={(e) => handleOpcaoChange6(e, "group6")}
//                   checked={selectedOptions.group6 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group6"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange6(e, "group6")}
//                   checked={selectedOptions.group6 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}
//           </Form>
//           <Form>
//             <h5>Atendimento dos funcionários</h5>
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group7"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange7(e, "group7")}
//                   checked={selectedOptions.group7 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group7"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange7(e, "group7")}
//                   checked={selectedOptions.group7 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group7"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange7(e, "group7")}
//                   checked={selectedOptions.group7 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group7"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   onChange={(e) => handleOpcaoChange7(e, "group7")}
//                   checked={selectedOptions.group7 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group7"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange7(e, "group7")}
//                   checked={selectedOptions.group7 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}
//           </Form>
//           <Form>
//             <h5>
//               Higiene do restaurante
//             </h5>
//             (buffet, mesas, cadeiras, pisos, pratos, bandejas e talheres)
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group8"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange8(e, "group8")}
//                   checked={selectedOptions.group8 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group8"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange8(e, "group8")}
//                   checked={selectedOptions.group8 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group8"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange8(e, "group8")}
//                   checked={selectedOptions.group8 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group8"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   onChange={(e) => handleOpcaoChange8(e, "group8")}
//                   checked={selectedOptions.group8 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group8"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange8(e, "group8")}
//                   checked={selectedOptions.group8 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}
//           </Form>
//           <Form>
//             <h5>Temperatura do ambiente</h5>
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group9"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange9(e, "group9")}
//                   checked={selectedOptions.group9 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group9"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange9(e, "group9")}
//                   checked={selectedOptions.group9 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group9"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange9(e, "group9")}
//                   checked={selectedOptions.group9 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group9"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   onChange={(e) => handleOpcaoChange9(e, "group9")}
//                   checked={selectedOptions.group9 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group9"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange9(e, "group9")}
//                   checked={selectedOptions.group9 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}
//           </Form>
//           <Form>
//             <h5>
//               Tempo de espera para preparar o prato
//             </h5>
//             (sem considerar fila)
//             {/* <p>Marque apenas uma opção.</p> */}
//             {["radio"].map((type) => (
//               <div key={`inline-${type}`} className="mb-4">
//                 <Form.Check
//                   inline
//                   name="group10"
//                   type={type}
//                   id={`inline-${type}-1`}
//                   onChange={(e) => handleOpcaoChange10(e, "group10")}
//                   checked={selectedOptions.group10 === `inline-${type}-1`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group10"
//                   type={type}
//                   id={`inline-${type}-2`}
//                   onChange={(e) => handleOpcaoChange10(e, "group10")}
//                   checked={selectedOptions.group10 === `inline-${type}-2`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group10"
//                   type={type}
//                   id={`inline-${type}-3`}
//                   onChange={(e) => handleOpcaoChange10(e, "group10")}
//                   checked={selectedOptions.group10 === `inline-${type}-3`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group10"
//                   type={type}
//                   id={`inline-${type}-4`}
//                   onChange={(e) => handleOpcaoChange10(e, "group10")}
//                   checked={selectedOptions.group10 === `inline-${type}-4`}
//                 />
//                 <Form.Check
//                   inline
//                   name="group10"
//                   type={type}
//                   id={`inline-${type}-5`}
//                   onChange={(e) => handleOpcaoChange10(e, "group10")}
//                   checked={selectedOptions.group10 === `inline-${type}-5`}
//                 />
//               </div>
//             ))}<Button type="submit" id="button-login-signup">
//               Enviar
//             </Button>
//           </Form>

//         </div></Container> */}