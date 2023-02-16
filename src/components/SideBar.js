import React from "react";
import Article from "./Article";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default class SideBar extends React.Component {
  render() {
    return (
      <>
        <Container className="sidebar-container">
          <Row>
            <Col md={2}></Col>
            <Col md={8} className="sidebar-bubble">
              <p>Professional Skils</p>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={8} className="sidebar-bubble">
              <p>Hobbies</p>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </>
    );
  }
}
