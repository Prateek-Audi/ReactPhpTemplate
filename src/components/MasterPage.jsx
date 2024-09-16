import React, { useState } from "react";
import Sidebar from "./Sidebar";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import "../styles/MasterPage.css";

const MasterPage = () => {
  return (
    <div className="masterPage">
      <Container fluid className="masterContainer">
        <Row className="masterRow">
          <Col md={2} xs={3} sm={3} className="sidebar p-0">
            <div className="h-100">
              <Sidebar />
            </div>
          </Col>
          <Col xs={9} sm={9} md={10} className="masterContent">
            <div className="pageHeading d-flex flex-row justify-content-between align-items-center">
              <h3 className="addUser">Add User</h3>
              <Dropdown>
                <div className="d-flex flex-row">
                  <div className="vr mx-2"></div>
                  <div
                    className="d-flex align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="/user.svg"
                      alt="User"
                      className="rounded-circle"
                      width="30"
                      height="30"
                    />{" "}
                    <div
                      className="ms-2 d-flex fw-semibold flex-column text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      <span>Prateek A.</span>
                    </div>
                  </div>
                </div>
              </Dropdown>
            </div>
            <Row>
              <UserForm />
            </Row>
            <Row className="userListRow">
              <UserList />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MasterPage;
