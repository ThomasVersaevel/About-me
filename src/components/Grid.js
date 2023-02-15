import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import "../bootstrap/css/bootstrap.css"

const bstrp = '../bootstrap/css/bootstrap.css'; 

export default class Grid extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col md={{offset: 2}}>
            <div >
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
