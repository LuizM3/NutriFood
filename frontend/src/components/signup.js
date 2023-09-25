import "../assets/styles/login.scss";

import { Form, Button, Modal, Container, Spinner, Row, Figure, Alert } from "react-bootstrap";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const arrow = require("../assets/images/left-arrow.png");
const logo = require("../assets/images/logo.png");

const passwordValidator = require('password-validator');
const schema = new passwordValidator();
// Add properties to it
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
const SignUpConst = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [vinculoAoIfes, setVinculoAoIfes] = useState("");
    const [termo, setTermo] = useState(false);
    let [vegetariano, setVegetariano] = useState("");
    let [refeicoes, setRefeicoes] = useState([]);

    const [emailError, setEmailError] = useState("");
    const [spinnerModal, setSpinnerModal] = useState(false);
    const [formModal, setFormModal] = useState(false);
    const [termoModal, setTermoModal] = useState(false);
    const [showPassAlert, setShowPassAlert] = useState(false); // Estado para controlar a exibição do alert
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showErrorAlert, setErrorAlert] = useState(false);
    const [showCampoAlert, setCampoAlert] = useState(false);
    const [showWrongPAlert, setWrongPAlert] = useState(false);
    const [showEmailAlert, setEmailAlert] = useState(false);

    const [coletaPreenchida, setColetaPreenchida] = useState(false);
    const [dadosColeta, setDadosColeta] = useState("");

    const navigate = useNavigate();
    // const handleAceitarTermos = () => {
    //     setTermo(!termo); // Inverte o valor do estado
    // };
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (senha !== confirmarSenha) {
            setShowPassAlert(true);
            setTimeout(() => {
                setShowPassAlert(false);
            }, 5000);
            return;
        }
        if (schema.validate(senha) === false) {

            setWrongPAlert(true);
            setTimeout(() => {
                setWrongPAlert(false);
            }, 5000);
            return;
        }
        if (senha === "" || email === "" || nome === "") {
            setCampoAlert(true);
            setTimeout(() => {
                setCampoAlert(false);
            }, 5000);
            return;
        }

        // if (termo(false)) {
        //     setCampoAlert(true);
        //     setTimeout(() => {
        //         setCampoAlert(false);
        //     }, 5000);
        //     return;
        // }
        const isEmailUnique = await checkEmailUniqueness(email);

        if (!isEmailUnique) {
            setEmailAlert(true);
            setTimeout(() => {
                setEmailAlert(false);
            }, 5000);
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
                setShowAlertSuccess(true);
                setTimeout(() => {
                    setShowAlertSuccess(false);
                }, 5000);
                setTimeout(() => {
                    setSpinnerModal(true);
                }, 1000);

                setTimeout(() => {
                    navigate("/login");
                }, 4000);



            } else {
                setErrorAlert(true);
                setTimeout(() => {
                    setErrorAlert(false);
                }, 5000);
            }
        } catch (error) {

            console.error("Erro ao enviar dados:", error);
            setErrorAlert(true);
            setTimeout(() => {
                setErrorAlert(false);
            }, 5000);

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
            <Row className="position-fixed alert-row" style={{ marginTop: 100 }}>
                {showPassAlert && (
                    <Alert variant="warning" className="align-items-center d-flex fade" onClose={() => setShowPassAlert(false)}>
                        As senhas não são iguais!
                    </Alert>
                )}  {showAlertSuccess && (
                    <Alert variant="success" className="align-items-center d-flex fade" onClose={() => setShowAlertSuccess(false)}>
                        Cadastro bem-sucedido!
                    </Alert>
                )}
                {showCampoAlert && (
                    <Alert variant="warning" className="align-items-center d-flex fade" onClose={() => setCampoAlert(false)}>
                        Preencha todos os campos!
                    </Alert>
                )}
                {showErrorAlert && (
                    <Alert variant="danger" className="align-items-center d-flex fade" onClose={() => setErrorAlert(false)}>
                        Erro ao enviar requisição!
                    </Alert>
                )}
                {showEmailAlert && (
                    <Alert variant="danger" className="align-items-center d-flex fade" onClose={() => setEmailAlert(false)}>
                        Email já cadastrado!
                    </Alert>
                )}
                {showWrongPAlert && (
                    <Alert variant="warning" className="align-items-center d-flex fade" onClose={() => setWrongPAlert(false)}>
                        A senha digitada precisa atender os requisitos
                    </Alert>
                )}
            </Row>
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

            <Modal show={termoModal} onHide={() => setTermoModal(false)} className="modal" backdrop="static" data-test="links">
                <Modal.Body>

                    <h2>TERMOS DE USO</h2>

                    <h3>1. Aceitação dos Termos de Uso</h3>
                    <p>
                        Bem-vindo ao [Nome do Seu Site]! Ao acessar ou usar nosso site, você
                        concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não
                        concordar com algum destes termos, por favor, não utilize o nosso site.
                    </p>

                    <h3>2. Uso Autorizado</h3>
                    <p>
                        Você concorda em utilizar nosso site apenas para fins legais e de acordo
                        com estes Termos de Uso. Você não deve usar nosso site de forma que
                        possa causar danos, prejudicar ou interferir com o funcionamento normal
                        do site.
                    </p>

                    <h3>3. Informações de Conta</h3>
                    <p>
                        Ao utilizar nosso site, você é responsável por manter a confidencialidade
                        de suas informações de conta, incluindo nome de usuário e senha. Você
                        concorda em nos notificar imediatamente sobre qualquer uso não
                        autorizado de sua conta.
                    </p>

                    <h3>4. Direitos de Propriedade Intelectual</h3>
                    <p>
                        Nosso site e seu conteúdo, incluindo texto, gráficos, logotipos, imagens
                        e software, são protegidos por leis de direitos autorais e outras leis de
                        propriedade intelectual. Você não deve reproduzir, distribuir, modificar
                        ou criar obras derivadas com base em nosso conteúdo, a menos que tenha
                        permissão expressa.
                    </p>

                    <h3>5. Links para Outros Sites</h3>
                    <p>
                        Nosso site pode conter links para sites de terceiros que não controlamos.
                        Não somos responsáveis pelo conteúdo ou pelas práticas de privacidade
                        desses sites.
                    </p>

                    <h3>6. Isenção de Garantias</h3>
                    <p>
                        Nosso site é fornecido "como está" e "conforme disponível". Não fazemos
                        garantias de qualquer tipo quanto à sua precisão, confiabilidade ou
                        disponibilidade.
                    </p>

                    <h3>7. Limitação de Responsabilidade</h3>
                    <p>
                        Em nenhuma circunstância seremos responsáveis por danos diretos,
                        indiretos, incidentais, especiais, consequentes ou punitivos decorrentes
                        do uso ou incapacidade de uso do nosso site.
                    </p>

                    <h3>8. Modificações nos Termos de Uso</h3>
                    <p>
                        Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
                        momento, e é sua responsabilidade verificar periodicamente se houve
                        alterações. O uso continuado do site após tais alterações constituirá sua
                        aceitação dos Termos de Uso revisados.
                    </p>

                    <h3>9. Encerramento de Conta</h3>
                    <p>
                        Reservamo-nos o direito de encerrar ou suspender sua conta a qualquer
                        momento, sem aviso prévio, por qualquer motivo.
                    </p>

                    <h3>10. Lei Aplicável</h3>
                    <p>
                        Estes Termos de Uso serão regidos e interpretados de acordo com as leis
                        do [seu país/estado], sem levar em consideração suas disposições de
                        conflito de leis.</p>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={() => { setTermoModal(false) }}>
                        Fechar
                    </Button>
                </Modal.Footer>
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
                                    <div className="d-flex justify-content-left align-items-center flex-row mb-1">
                                        <Form.Group controlId="formBasicCheckbox" id="termosDeUso" className="d-flex flex-row align-items-center justify-content-center">
                                            <Form.Check type="checkbox" className="t-uso"
                                            // value={termo}
                                            // checked={termo} // Defina a propriedade checked com o valor de termo diretamente
                                            // onChange={handleAceitarTermos} // Atualize o estado termo quando o checkbox muda 
                                            />
                                            <Form.Label for="termosDeUso" className="m-0">
                                                Concordo com os <Link onClick={() => { setTermoModal(true); }}>Termos de Uso</Link>
                                            </Form.Label>

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
