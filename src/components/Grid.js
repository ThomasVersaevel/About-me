import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
 

export default class Grid extends React.Component {
  render() {
    return (
      <>
        <Container className="intro-content-buble">
          <Row>
            <Col md={4}>
              COL1
            </Col>
            <Col md={6}>COL2</Col>
          </Row>
          <Row>
            <Col md={4}>COL3
              </Col>
            <Col md={6}>
              COL4
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
