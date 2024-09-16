import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../styles/UserForm.css";

const UserForm = () => (
  <>
    <div className="userContainer p-3">Add User</div>
    <Form className="p-3 userForm">
      <Row className="formRow">
        <Col md={3} sm={6} xs={12}>
          <Form.Group controlId="formName">
            <Form.Label className="mb-1">Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Form.Group controlId="formEmail">
            <Form.Label className="mb-1">Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Form.Group controlId="formMobile">
            <Form.Label className="mb-1">Mobile No.</Form.Label>
            <Form.Control type="text" placeholder="Mobile No." />
          </Form.Group>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Form.Group controlId="formRole">
            <Form.Label className="mb-1">Role</Form.Label>
            <Form.Control as="select">
              <option>Select Role</option>
              <option>Admin</option>
              <option>Teacher</option>
              <option>Student</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4} sm={6} xs={12}>
          <Form.Group controlId="formUsername">
            <Form.Label className="mb-1">Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Form.Group controlId="formPassword">
            <Form.Label className="mb-1">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Col>
        <Col md={4} sm={6} xs={12}>
          <Form.Group controlId="formStatus">
            <Form.Label className="mb-1">Status</Form.Label>
            <Form.Control as="select">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit" className="mt-3 rounded-pill">
        Submit
      </Button>
    </Form>
  </>
);

export default UserForm;
