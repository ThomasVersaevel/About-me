import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react";

export default class Introduction extends React.Component {
  render() {
    return (
      <>
        <Container className="main-content-buble">
          <Row>
            <Col md={2}>
              <h2 className="text-header"> About me </h2>
            </Col>
            <Col md={6}></Col>
            <Col md={2}>
              <div>
              <img
                  src={require("../assets/pfSquare.jpeg")}
                  className="image-rounded"
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <p>
                  Lorem ipsum vitae <br />
                  bla bla bla sprinkler system gast ik typ faking veel hier je
                  weet zelf hoe dat gaat dit is niet normaal kij lange uitlge
                  zelfs met lange ij dat meen je niet ongelofelialjfdkahef ahesl
                  flehf aesh foasehfeoa fhaoids hfeohaf dh fohea fhoda hfeo
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="main-content-buble">
        <Row>
            <Col md={2}>
              <h2 className="text-header"> About me </h2>
            </Col>
            <Col md={6}></Col>
            <Col md={2}>
              <div>
              <img
                  src={require("../assets/pfSquare.jpeg")}
                  className="image-rounded"
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <div>
                <p>
                  Lorem ipsum vitae <br />
                  bla bla bla sprinkler system gast ik typ faking veel hier je
                  weet zelf hoe dat gaat dit is niet normaal kij lange uitlge
                  zelfs met lange ij dat meen je niet ongelofelialjfdkahef ahesl
                  flehf aesh foasehfeoa fhaoids hfeohaf dh fohea fhoda hfeo
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
