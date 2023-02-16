import React, { useState, useEffect } from "react";
import Article from "./Article";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";

export default function WorkExperience() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // called on load, and due to empty dependencies[] wont load again
    setOpen(true, []);
  });

  return (
    <>
      <Collapse in={open}>
        <div>
          <Container>
            <Row className="main-content-bubble">
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
            <Row className="main-content-bubble">
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
            <Row className="main-content-bubble">
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
            <Row className="main-content-bubble">
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
        </div>
      </Collapse>
    </>
  );
}
