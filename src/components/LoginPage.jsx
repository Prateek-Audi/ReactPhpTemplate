import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/master");
  };

  return (
    <div>
      <Container fluid>
        <Row className="vh-100 login-page">
          <Col md={7} className="login-image p-0 d-none d-md-block">
            <img
              src="/loginbg.jpg"
              alt="Login"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </Col>

          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="login-form-container">
              <div className="text-center mb-4">
                <img
                  src="/blacklogo.svg"
                  alt="Logo"
                  className="login-logo mb-3"
                />
              </div>

              <h3 className="text-center mb-2">Login to your Account</h3>
              <p className="text-center mb-4">
                Lorem Ipsum is simply dummy text printing
              </p>

              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label className="mb-1">User Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label className="mb-1">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button
                  variant="secondary"
                  type="submit"
                  className="loginButton w-100"
                >
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
