import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react";

export default class Introduction extends React.Component {
  render() {
    return (
      <>
        {/* Introduction buble rows should look like md=(3 - 9) */}
        <Container className="intro-content-buble">
          <Row>
            <Col md={3}>
              <h3 className="text-header"> About me </h3>
            </Col>
            <Col md={9}></Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <div>
                <p>
                  My name is Thomas and I am a software engineer. I studied at
                  the Eindhoven University of Technology. There I obtained my
                  Masters degree in Computer Science and Engineering. <br />I
                  love programming, gaming and running
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="intro-content-buble">
          <Row>
            <Col md={4}>
              <h3 className="text-header"> This website </h3>
            </Col>
            <Col md={6}></Col>
            <Col md={4}></Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <div>
                <p>
                  This website was made using HTML5, Css, React.js and
                  Bootstrap. <br />
                  The goal of this project was to create a resume template that
                  is easilly updated and shows of my web-development skills.
                  This way it serves multiple purposes.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
