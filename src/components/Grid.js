import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class Education extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="shadow-3">
              <img
                src={require("../assets/profilePicture.jpeg")}
                className="image-large"
                alt=""
              />
            </div>
          </Col>
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
