import React from "react";
import Article from "./Article";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default class Education extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row className="main-content-buble">
            <Col md={2}>
              <div>
                <img
                  src={require("../assets/tue.png")}
                  className="image-small"
                  alt=""
                />
              </div>
            </Col>
            <Col md={8}>
              <p>
                <Article
                  key={0}
                  timespan={"2021 - Present"}
                  title={"Master Computer Science and Engineering"}
                  position={"Eindhoven University of Technology"}
                />
              </p>
            </Col>
          </Row>
          <Row className="main-content-buble">
            <Col md={2}>
              <div>
                <img
                  src={require("../assets/tue.png")}
                  className="image-small"
                  alt=""
                />
              </div>
            </Col>
            <Col md={8}>
              <p>
                <Article
                  key={0}
                  timespan={"2017 - 2021"}
                  title={"Bachelor Computer Science and Engineering"}
                  position={"Eindhoven University of Technology"}
                />
              </p>
            </Col>
          </Row>
          <Row className="main-content-buble">
            <Col md={2}>
              <div>
                <img
                  src={require("../assets/newman.png")}
                  className="image-small"
                  alt=""
                />
              </div>
            </Col>
            <Col md={8}>
              <p>
                <Article
                  key={0}
                  timespan={"2011 - 2017"}
                  title={"VWO, Profiel: Natuur en techniek"}
                  position={"Newman College Breda"}
                />
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
