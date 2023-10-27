import { Modal, Row, Figure, Form, Button, Spinner, Container, Alert, Col, Tab, Tabs, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import React, { useState } from "react";

const SettingsConst = () => {

    return (
        <>
            <Container className="h-100 bg-light">
                <Row className="w-100 h-100 p-5 d-flex justify-content-center">
                    <Col lg={4} className="">
                        <ListGroup>
                            <ListGroupItem>
                                Geral
                            </ListGroupItem>

                            <ListGroupItem>
                                Usuário
                            </ListGroupItem>

                            <ListGroupItem>
                                Outros
                            </ListGroupItem>
                            <ListGroupItem>
                                Outros
                            </ListGroupItem>
                            <ListGroupItem>
                                Outros
                            </ListGroupItem>
                            <ListGroupItem>
                                Outros
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg={8} className="border">2 of 2</Col>
                </Row>
            </Container>
        </>
    );
};

export default SettingsConst;
