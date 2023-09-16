import "../assets/styles/login.scss";

import { Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const SignUpConst = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [vinculoAoIfes, setVinculoAoIfes] = useState("");
    let [vegetariano, setVegetariano] = useState("");
    let [refeicoes, setRefeicoes] = useState([]);

    const [emailError, setEmailError] = useState("");
    const [formModal, setFormModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [passcheckModal, setPasscheckModal] = useState(false);

    const [coletaPreenchida, setColetaPreenchida] = useState(false);
    const [dadosColeta, setDadosColeta] = useState("");

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
            setEmailError("Este email já está cadastrado.");
            setErrorModal(true);
            return;
        }

        setColetaPreenchida(true);
        setFormModal(true);
    };

    const handleColetaSubmit = async () => {
        setSuccessModal(true);

        if(vegetariano == "true"){
            vegetariano = Boolean("true");
        } else if (vegetariano == "false") {
            vegetariano = Boolean("false");
        };

        let objetoRefeicoes = {
            cafeDaManha: false,
            almoco: false,
            lancheDaTarde: false,
            jantar: false
        }

        for (let i = 0; i < refeicoes.length; i++) {
            
            if(refeicoes[i] == 1){
                objetoRefeicoes.cafeDaManha = true;
                
            } else if(refeicoes[i] == 2){
                objetoRefeicoes.almoco = true;
                
            }else if(refeicoes[i] == 3){
                objetoRefeicoes.lancheDaTarde = true;
                
            }else if(refeicoes[i] == 4){
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
                setSuccessModal(true);
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

            <Modal show={formModal} onHide={() => setFormModal(false)} className="modal" backdrop="static">
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

            <Modal show={successModal} onHide={() => setSuccessModal(false)} className="modal">

                <Modal.Header>
                    <Modal.Title>Sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Cadastro concluído</Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={() => setSuccessModal(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={errorModal} onHide={() => setErrorModal(false)} className="modal">
                <Modal.Header >
                    <Modal.Title>Erro!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {emailError ? (
                        emailError
                    ) : (
                        "Erro ao cadastrar usuário"
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setErrorModal(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={passcheckModal} onHide={() => setPasscheckModal(false)} className="modal">
                <Modal.Header >
                    <Modal.Title>Erro!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Erro na confirmação de senha, por favor tente novamente</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setPasscheckModal(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="cont">
                <div id="in-cont">

                    <Form id="form-login" onSubmit={handleSubmit}>
                        <h2>Cadastro de usuário</h2>
                        <section className="mb-4">
                            <div className="in-section">
                                <Form.Group className="mb-3">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Label>Confirmar senha</Form.Label>
                                </Form.Group>
                            </div>
                            <div id="linha-vertical"></div>
                            <div className="in-section">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Nome"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    /> <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    /><Form.Control
                                        type="password"
                                        placeholder="Senha"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    /> <Form.Control
                                        type="password"
                                        placeholder="Confirmar senha"
                                        value={confirmarSenha}
                                        onChange={(e) => setConfirmarSenha(e.target.value)}
                                    />
                                </Form.Group>

                            </div>
                        </section>
                        <div id="div-btn">
                            <div id="div-btn">
                                <Link to="/login">Fazer login</Link>
                            </div>
                            <Button type="submit" id="button-login-signup">
                                Cadastrar
                            </Button>
                        </div>



                    </Form>
                </div>
                {/* <Carousel id="carousel-form">
                    <Carousel.Item onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Cadastro de usuário</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            /> <div id="div-btn">
                                <Link to="/login">Já possui conta? Faça login</Link>
                            </div>
                        </Form.Group>


                    </Carousel.Item>
                    <Carousel.Item>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </Form.Group
                        >

                    </Carousel.Item>
                    <Carousel.Item>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                           
                            <Form.Control
                                type="password"
                                placeholder="Confirmar senha"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                            /> <div id="div-btn">
                                <Button type="submit" id="button-login-signup">
                                    Cadastrar
                                </Button>
                            </div>

                        </Form.Group>
                    </Carousel.Item>
                </Carousel> */}
            </div >
        </>
    );
};

export default SignUpConst;
