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
          <Container>
            <Row className="intro-content-bubble">
              <Row>
                <Col md={12}>
                  <div>
                    <h3 className="text-header"> This CV </h3>
                  </div>
                </Col>
                <Col md={9}></Col>
              </Row>
              <Row>
                <Col md={1}></Col>
                <Col md={10}>
                  <div>
                    <p>
                      This website serves as my CV, in the tabs above you can
                      find my complete education history and work experience.
                    </p>
                  </div>
                </Col>
              </Row>
            </Row>
            <Row className="intro-content-bubble">
              <Row>
                <Col md={12}>
                  <div>
                    <h3 className="text-header"> About me </h3>
                  </div>
                </Col>
                <Col md={9}></Col>
              </Row>
              <Row>
                <Col md={1}></Col>
                <Col md={10}>
                  <div>
                    <p>
                      My name is Thomas and a software engineer from Breda. I
                      studied at the Eindhoven University of Technology. There I
                      obtained my Masters degree in Computer Science and
                      Engineering in 2024. <br />I love programming, gaming,
                      playing the piano and running.
                    </p>
                  </div>
                </Col>
              </Row>
            </Row>

            <Row className="intro-content-bubble">
              <Row>
                <Col md={12}>
                  <div className="shadow-lg">
                    <h3 className="text-header"> This website </h3>
                  </div>
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
            </Row>

            <Row className="no-padding">
              <Col md={5} className="intro-content-bubble">
                <Row>
                  <Col md={6}>
                    <div>
                      <h3 className="text-header"> Github </h3>
                    </div>
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
                          target="_blank"
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
              <Col md={2} />
              <Col md={5} className="intro-content-bubble">
                <Row>
                  <Col md={6}>
                    <h3 className="text-header"> Open Source </h3>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}></Col>
                  <Col md={10}>
                    <div>
                      <p>
                        My open source contributions are visible on{" "}
                        <a
                          className="link"
                          target="_blank"
                          href="https://gitlab.com/ThomasVersaevel"
                        >
                          {" "}
                          Gitlab{" "}
                        </a>
                        <br />
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
