import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Fade } from "react-bootstrap";

export default function Introduction() {
  const [open, setOpen] = useState(false);

  // this callback is sicko mode
  useEffect(() => {
    // called on load, and due to empty dependencies[] wont load again
    setOpen(true, []);
  });

  return (
    <>
      <Fade in={open}>
        <div>
          {/* Introduction bubble rows should look like md=(3 - 9) */}
          <Container className="intro-content-bubble">
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

          <Container className="intro-content-bubble">
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
                    The goal of this project was to create a resume template
                    that is easilly updated and shows of my web-development
                    skills. This way it serves multiple purposes.
                  </p>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col md={5} className="intro-content-bubble">
                <Row>
                  <Col md={4}>
                    <h3 className="text-header"> Github </h3>
                  </Col>
                  <Col md={6}></Col>
                  <Col md={4}></Col>
                </Row>
                <Row>
                  <Col md={1}></Col>
                  <Col md={10}>
                    <div>
                      <p>
                        Check out my{" "}
                        <a
                          className="link"
                          href="https://github.com/ThomasVersaevel?tab=repositories"
                        >
                          Github
                        </a>{" "}
                        to see the projects I have worked on in the past.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={5} className="intro-content-bubble">
                <Row>
                  <Col md={4}>
                    <h3 className="text-header"> Empty bubble </h3>
                  </Col>
                  <Col md={6}></Col>
                  <Col md={4}></Col>
                </Row>
                <Row>
                  <Col md={1}></Col>
                  <Col md={10}>
                    <div>
                      <p>
                        What else do i put here? <br />
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Fade>
    </>
  );
}
