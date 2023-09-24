import "../assets/styles/login.scss";

import { Form, Button, Modal, Container, Spinner, Row, Figure } from "react-bootstrap";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const arrow = require("../assets/images/left-arrow.png");
const logo = require("../assets/images/logo.png");
const SignUpConst = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [vinculoAoIfes, setVinculoAoIfes] = useState("");
    let [vegetariano, setVegetariano] = useState("");
    let [refeicoes, setRefeicoes] = useState([]);

    const [emailError, setEmailError] = useState("");
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
        // const tes = await verifyServer();
        // if(!tes){
        //     console.log("CERTOOOO");
        //     return;
        // }

        setColetaPreenchida(true);
        setFormModal(true);
    };

    const Verify = () => {
        const [searchParams] = useSearchParams();
        const tokenVerify = searchParams.get("token");

        return tokenVerify;
    };

    const token = Verify();

    const handleColetaSubmit = async () => {

        if (vegetariano === "true") {
            vegetariano = true;
        }
        if (vegetariano === "false") {
            vegetariano = false;
        }

        let objetoRefeicoes = {
            cafeDaManha: false,
            almoco: false,
            lancheDaTarde: false,
            jantar: false
        }

        for (const element of refeicoes) {

            if (element == 1) {
                objetoRefeicoes.cafeDaManha = true;

            } else if (element == 2) {
                objetoRefeicoes.almoco = true;

            } else if (element == 3) {
                objetoRefeicoes.lancheDaTarde = true;

            } else if (element == 4) {
                objetoRefeicoes.jantar = true;
            }
        }

        const dadosCompletos = {
            nome,
            email,
            senha,
            vinculoAoIfes,
            objetoRefeicoes,
            vegetariano
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
    // const verifyServer = async () => {
    //     try {
    //         const response = await fetch("http://localhost:9000/testDB", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         if (response.ok) {
    //            console.log("Backend funcionando");
    //         } else {
    //             setErrorModal(true);
    //             console.log("Backend com problema")
    //         }
    //     } catch (error) {
    //         console.error("Erro ao enviar dados:", error);
    //         setErrorModal(true);
    //     }
    // };







    const handleVinculoChange = (e) => {
        setVinculoAoIfes(e.target.value);
    };

    const handleVegetarianoChange = (e) => {
        setVegetariano(e.target.value);
    };

    const handleRefeicoes = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setRefeicoes([...refeicoes, value]);
        } else {
            setRefeicoes(refeicoes.filter((refeicao) => refeicao !== value));
        }
    };

    return (
        <>

            <Modal show={spinnerModal} onHide={() => setSpinnerModal(false)} className="modal" backdrop="static" data-test="links">
                <Modal.Body>
                    <Spinner

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

                        {["radio"].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Aluno do ensino médio"
                                    name="vinculoAoIfes"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    value={"AM"}
                                    checked={vinculoAoIfes === "AM"}
                                    onChange={handleVinculoChange}
                                />
                                <Form.Check
                                    inline
                                    label="Aluno da graduação"
                                    name="vinculoAoIfes"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    value={"AG"}
                                    checked={vinculoAoIfes === "AG"}
                                    onChange={handleVinculoChange}
                                />
                                <Form.Check
                                    inline
                                    label="Servidor, docente ou tercerizado"
                                    name="vinculoAoIfes"
                                    type={type}
                                    id={`inline-${type}-3`}
                                    value={"SDT"}
                                    checked={vinculoAoIfes === "SDT"}
                                    onChange={handleVinculoChange}
                                />
                                <Form.Check
                                    inline
                                    label="Outro"
                                    name="vinculoAoIfes"
                                    type={type}
                                    id={`inline-${type}-4`}
                                    value={"Outro"}
                                    checked={vinculoAoIfes === "Outro"}
                                    onChange={handleVinculoChange}
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
                                    name="refeicoes"
                                    type={type}
                                    id={`inline-${type}-4`}
                                    value={1}
                                    onChange={handleRefeicoes}
                                />
                                <Form.Check
                                    inline
                                    label="Almoço"
                                    name="refeicoes"
                                    type={type}
                                    id={`inline-${type}-5`}
                                    value={2}
                                    onChange={handleRefeicoes}
                                />
                                <Form.Check
                                    inline
                                    label="Lanche da tarde"
                                    name="refeicoes"
                                    type={type}
                                    id={`inline-${type}-6`}
                                    value={3}
                                    onChange={handleRefeicoes}
                                />
                                <Form.Check
                                    inline
                                    label="Jantar"
                                    name="refeicoes"
                                    type={type}
                                    id={`inline-${type}-7`}
                                    value={4}
                                    onChange={handleRefeicoes}
                                />
                            </div>
                        ))}
                    </Form>

                    <Form>
                        <h5>
                            Você é vegetariano?<span id="asterisco">*</span>
                        </h5>

                        {["radio"].map((type) => (
                            <div key={`inline-${type}`} className="mb-4">
                                <Form.Check
                                    xs={12}
                                    inline
                                    label="Sim"
                                    name="vegetariano"
                                    type={type}
                                    id={`inline-${type}-9`}
                                    value={true}
                                    checked={vegetariano === "true"}
                                    onChange={handleVegetarianoChange}
                                />
                                <br></br>
                                <Form.Check
                                    inline
                                    label="Não"
                                    name="vegetariano"
                                    type={type}
                                    id={`inline-${type}-10`}
                                    value={false}
                                    checked={vegetariano === "false"}
                                    onChange={handleVegetarianoChange}
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
                    <Modal.Title>Sucesso</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cadastro concluído</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <Modal show={errorModal} onHide={() => setErrorModal(false)} className="modal" data-test="links">
                <Modal.Header >
                    <Modal.Title>Erro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Erro ao cadastrar usuário
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

            <div id="div-z-cont" data-test="links">
                <Container className="login-cont">
                    <section>
                        <Row>

                            <Form id="form-login" onSubmit={handleSubmit}>
                                <div id="div-form-l">
                                    <Figure className="logo-tog">
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
                                                autoComplete="username"
                                                autoCapitalize="Nome"
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
                                                data-test="form-passc"
                                                value={confirmarSenha}
                                                onChange={(e) => setConfirmarSenha(e.target.value)}
                                            />
                                        </Form.Group>

                                    </div>

                                    <div id="div-btn">
                                        <Link
                                            to={"/login?token=" + token}
                                        >Fazer login</Link>
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
        </>
    );
};

export default SignUpConst;
