import "../Sass/_componentLogin.scss";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import React from 'react';

const Login = () => {
    return (
        <>
        <Container className="login-signup-page">
        <Col xs={12} md={6} className="login-section">
          <h2>Log In</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" type="submit">Log In</Button>
          </Form>
        </Col>
        <Col xs={12} md={6} className="signup-section">
          <h2>Sign Up</h2>
          <Form>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="primary" type="submit">Sign Up</Button>
          </Form>
        </Col>
    </Container>
    </>
    )

}

export default Login;