import React from "react";
import Container from "react-bootstrap/Container";
import "../bootstrap/css/bootstrap-grid.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class Introduction extends React.Component {
  render() {
    return (
      <>
        <div className="col-md-9">
          <Container>
            <Row>
              <Col>
                <h3> About me </h3>
                <div>
                  <p>
                    Lorem ipsum vitae <br />
                    bla bla bal
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
