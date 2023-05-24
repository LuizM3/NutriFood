import "../Sass/_componentSignUp.scss";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React from 'react';

const SignUp = () => {
    return (
        <>
            <Container className="cont">
                <Row>
                    <Col> <Form>
                        <h2>Cadastro</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Endereço de email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" />
                            <Form.Text className="text-muted">
                                Nós nunca iremos compartilhar seu email com terceiros
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                        </Form.Group>
                        <Button type="submit" id="button-signup">
                            Cadastrar
                        </Button>
                        <Form>     <a href="#Login">Já possui conta? Faça login</a></Form>
                    </Form></Col>
                </Row>
            </Container>
        </>
    );

}

export default SignUp;