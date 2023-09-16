import "../assets/styles/login.scss";

import { Form, Button, Modal, Container, Spinner, Row, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const arrow = require("../assets/images/left-arrow.png");
const logo = require("../assets/images/logo.png");
const SignUpConst = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [spinnerModal, setSpinnerModal] = useState(false);
    const [formModal, setFormModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [emailErrorModal, setEmailErrorModal] = useState(false);
    const [passcheckModal, setPasscheckModal] = useState(false);

    const [coletaPreenchida, setColetaPreenchida] = useState(false);
    const [dadosColeta, setDadosColeta] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (e) => {



        e.preventDefault();

        if (senha !== confirmarSenha) {
            setPasscheckModal(true);
            return;
        }
        if (senha === "" || email === "" || nome === "") {
            setErrorModal(true);
            return;
        }


        const isEmailUnique = await checkEmailUniqueness(email);

        if (!isEmailUnique) {
            setEmailErrorModal(true);
            return;
        }

        setColetaPreenchida(true);
        setFormModal(true);
    };

    const handleColetaSubmit = async () => {



        const dadosCompletos = {
            nome,
            email,
            senha
        };

        try {
            const response = await fetch(`http://localhost:9000/signup`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(dadosCompletos),
            });

            if (response.ok) {
                setTimeout(() => {
                    setSpinnerModal(true);
                }, 1000);

                setTimeout(() => {
                    setSuccessModal(true);
                }, 2000);
                setTimeout(() => {
                    navigate("/login");
                }, 4000);


            } else {
                setErrorModal(true);
            }
        } catch (error) {

            console.error("Erro ao enviar dados:", error);
            setErrorModal(true);

        }
    };

    const checkEmailUniqueness = async (email) => {
        try {
            const response = await fetch(`http://localhost:9000/check-email?email=${email}`);

            if (response.ok) {
                const data = await response.json();
                return data.isUnique;
            }
        } catch (error) {
            console.error("Erro ao verificar email:", error);
        }
        return false;
    };

    return (
        <>

            <Modal show={spinnerModal} onHide={() => setSpinnerModal(false)} className="modal" data-test="links">
                <Modal.Body>
                    <Spinner
                        variant="light"
                        animation="border"
                        role="status"
                        show={spinnerModal}
                        onHide={() => setSpinnerModal(false)}
                    >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Modal.Body>
            </Modal>
            <Modal show={formModal} onHide={() => setFormModal(false)} className="modal" backdrop="static" data-test="links">
                <Modal.Header>
                    <Modal.Title>
                        Coleta de usuário
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <h5>
                            Qual seu vínculo com o IFES - Campus Santa Teresa?{" "}
                            <span id="asterisco">*</span>
                        </h5>
                        <p>Marque apenas uma opção.</p>

                        {["radio"].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Aluno do ensino médio"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Aluno da graduação"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="Servidor, docente ou tercerizado"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                            </div>
                        ))}
                    </Form>
                    <Form>
                        <h5>
                            Qual refeição você realiza no restaurante institucional?
                            <span id="asterisco">*</span>
                        </h5>
                        <p>Marque todas que se aplicam.</p>
                        {["checkbox"].map((type) => (
                            <div key={`inline-${type}`} className="mb-4">
                                <Form.Check
                                    inline
                                    label="Café da manhã"
                                    name="group2"
                                    type={type}
                                    id={`inline-${type}-4`}
                                />
                                <Form.Check
                                    inline
                                    label="Almoço"
                                    name="group2"
                                    type={type}
                                    id={`inline-${type}-5`}
                                />
                                <Form.Check
                                    inline
                                    label="Lanche da tarde"
                                    name="group2"
                                    type={type}
                                    id={`inline-${type}-6`}
                                />
                                <Form.Check
                                    inline
                                    label="Jantar"
                                    name="group2"
                                    type={type}
                                    id={`inline-${type}-7`}
                                />
                            </div>
                        ))}
                    </Form>

                    <Form>
                        <h5>
                            Você é vegetariano?<span id="asterisco">*</span>
                        </h5>
                        <p>Marque apenas uma opção.</p>
                        {["radio"].map((type) => (
                            <div key={`inline-${type}`} className="mb-4">
                                <Form.Check
                                    inline
                                    label="Sim"
                                    name="group3"
                                    type={type}
                                    id={`inline-${type}-9`}
                                />
                                <Form.Check
                                    inline
                                    label="Não"
                                    name="group3"
                                    type={type}
                                    id={`inline-${type}-10`}
                                />
                            </div>
                        ))}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => { handleColetaSubmit(); setFormModal(false); }}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>





            <Modal show={successModal} onHide={() => setSuccessModal(false)} className="modal" data-test="links">

                <Modal.Header>
                    <Modal.Title>Sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cadastro concluído</Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
            <Modal show={errorModal} onHide={() => setErrorModal(false)} className="modal" data-test="links">
                <Modal.Header >
                    <Modal.Title>Erro!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Erro ao enviar requisição
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setErrorModal(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={emailErrorModal} onHide={() => setEmailErrorModal(false)} className="modal" data-test="links">
                <Modal.Header >
                    <Modal.Title>Erro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Este email já está cadastrado
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setEmailErrorModal(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={passcheckModal} onHide={() => setPasscheckModal(false)} className="modal" data-test="links">
                <Modal.Header >
                    <Modal.Title>Erro</Modal.Title>
                </Modal.Header>
                <Modal.Body>Erro na confirmação de senha, por favor tente novamente</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setPasscheckModal(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            <div id="div-z-cont">
                <Container className="login-cont">
                    <section>
                        <Row>

                            <Form id="form-login" onSubmit={handleSubmit}>
                                <div id="div-arrow">
                                    <Link to="/" id="arrow">
                                        <Figure>
                                            <Figure.Image src={arrow}></Figure.Image>
                                        </Figure>
                                    </Link>
                                </div>

                                <div id="div-form-l">
                                    <Figure>
                                        <Figure.Image src={logo} />
                                    </Figure>
                                    <h1>Cadastro de usuário</h1>

                                    <div className="in-section">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Insira seus dados pessoais abaixo</Form.Label>
                                        </Form.Group>
                                    </div>
                                    
                                    <div className="in-section">
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                aria-label="Nome"
                                                placeholder="Nome"
                                                autocomplete="username"
                                                autocapitalize="Nome"
                                                value={nome}
                                                data-test="form-nome"
                                                onChange={(e) => setNome(e.target.value)}
                                            />
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                data-test="form-email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            /><Form.Control
                                                type="password"
                                                placeholder="Senha"
                                                value={senha}
                                                data-test="form-pass"
                                                onChange={(e) => setSenha(e.target.value)}
                                            /> <Form.Control
                                                type="password"
                                                placeholder="Confirmar senha"
                                                data-test="form-passcheck"
                                                value={confirmarSenha}
                                                onChange={(e) => setConfirmarSenha(e.target.value)}
                                            />
                                        </Form.Group>

                                    </div>

                                    <div id="div-btn">
                                        <Link to="/login">Fazer login</Link>
                                        <Button type="submit" id="button-login-signup" data-test="cadastrar">
                                            Cadastrar
                                        </Button>
                                    </div>

                                </div>



                            </Form>
                        </Row>
                    </section>
                </Container>
            </div>


            {/* <div className="cont">
                <div id="in-cont">

                </div>

            </div > */}
        </>
    );
};

export default SignUpConst;
