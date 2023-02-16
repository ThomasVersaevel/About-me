import React, { useState, useEffect } from "react";
import Article from "./Article";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse"

export default function Educatio() {
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
            <Row className="main-content-bubble">
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
            <Row className="main-content-bubble">
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
        </div>
      </Collapse>
    </>
  );
}
