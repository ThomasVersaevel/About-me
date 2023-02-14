import React from "react";
import Article from "./Article";
import "../bootstrap/css/bootstrap-grid.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default class WorkExperience extends React.Component {
  render() {
    return (
      <>
        <div className="col-md-9">
          <Container>
            <Row>
              <div>
                <Col>
                  <p>
                    <Article
                      key={0}
                      timespan={"2023 - Present"}
                      title={"Appsemble Internship"}
                      position={"Software Engineer"}
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <Article
                      key={0}
                      timespan={"2021 - Present"}
                      title={"Pathe Eindhoven"}
                      position={"Service Employee"}
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <Article
                      key={0}
                      timespan={"2020 - 2021"}
                      title={"Prodrive-Technologies"}
                      position={"Software Engineer"}
                    />
                  </p>
                </Col>
                <Col>
                  <p>
                    <Article
                      key={0}
                      timespan={"2018 - 2020"}
                      title={"PSFM Samsung"}
                      position={"Sales Promotor"}
                    />
                  </p>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
