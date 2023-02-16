import React from "react";
import Article from "./Article";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default class WorkExperience extends React.Component {
  render() {
    return (
      <>
        <Container> 
          <Row className="main-content-buble">
            <Col md={2}>
              <div>
                <img
                  src={require("../assets/appsemble.png")}
                  className="image-small"
                  alt=""
                />
              </div>
            </Col>
            <Col md={8}>
              <p>
                <Article
                  key={0}
                  timespan={"2023 - Present"}
                  title={"Appsemble Internship"}
                  position={"Software Engineer"}
                />
              </p>
            </Col>
          </Row>
          <Row className="main-content-buble">
            <Col md={2}>
              <div>
                <img
                  src={require("../assets/pathe.png")}
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
                  title={"Pathe Eindhoven"}
                  position={"Service Employee"}
                />
              </p>
            </Col>
          </Row>
          <Row className="main-content-buble">
            <Col md={2}>
              <div>
                <img
                  src={require("../assets/pdLogo.png")}
                  className="image-small"
                  alt=""
                />
              </div>
            </Col>
            <Col md={8}>
              <p>
                <Article
                  key={0}
                  timespan={"2020 - 2021"}
                  title={"Prodrive-Technologies"}
                  position={"Software Engineer"}
                />
              </p>
            </Col>
          </Row>
          <Row className="main-content-buble">
            <Col md={2}>
              <div>
                <img
                  src={require("../assets/psfm.png")}
                  className="image-small"
                  alt=""
                />
              </div>
            </Col>
            <Col md={8}>
              <p>
                <Article
                  key={0}
                  timespan={"2018 - 2020"}
                  title={"PSFM Samsung"}
                  position={"Sales Promotor"}
                />
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
