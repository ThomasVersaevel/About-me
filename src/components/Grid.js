import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default class Education extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col md={80}>sm=8</Col>
          <Col md={4}>sm=4</Col>
          <Col md={8}>sm=8</Col>
          <Col md={4}>sm=4</Col>
        </Row>
        <Row>
          <Col md>sm=true</Col>
          <Col md>sm=true</Col>
          <Col md>sm=true</Col>
        </Row>
      </>
    );
  }
}
