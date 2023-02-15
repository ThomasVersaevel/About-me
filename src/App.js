import React from "react";
import "./App.css";
import "./Animation.css";
import "./bootstrap/css/bootstrap-grid.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Thomas Versaevel",
      subtitle: "CV",
      footer: "Thank you for reading my CV",
    };
  }

  render() {
    return (
      <>
        <div>
          <Container className="container-margin" fluid="true">
            <Row className={"App-header"}>
              <Col md={8}>
                <div id="header-title">
                  <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                  />
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row className="App-navbar">
              <Col md={8}>
                <Navbar sticky="top">
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="App-nav">
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav-item-active" : "nav-item"
                        }
                        to="introduction"
                      >
                        <div className="shadow-3">Introduction</div>
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav-item-active" : "nav-item"
                        }
                        to="education"
                      >
                        Education
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav-item-active" : "nav-item"
                        }
                        to="workexperience"
                      >
                        Work Experience
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "nav-item-active" : "nav-item"
                        }
                        to="grid"
                      >
                        Grid
                      </NavLink>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row>
              <Col md={1} sm={1}>
              </Col>
              <Col md={8} sm={20} className="Main-content">
                <TransitionGroup>
                  <CSSTransition timeout={300} className="fade">
                    <Outlet />
                  </CSSTransition>
                </TransitionGroup>
              </Col>
              <Col md={1} sm={1}>
              </Col>
            </Row>
            </Container>
            <Container fluid='true' className="App-footer-position"> 
            <Row className="App-footer">
              <Col md={8}>
                <div>
                  <Footer title={this.state.footer} />
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Container>
        </div>
        <div className="vertical-bar-left"></div>
        <div className="vertical-bar-rightX"></div>
      </>
    );
  }
}
