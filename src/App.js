import React from "react";
import "./App.css";
import "./Animation.css";
// import "./bootstrap/css/bootstrap.css"
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
      <div>
        <Container>
          <Row className={"App-header"}>
            <Col>
              <div id="header-title">
                <Header
                  title={this.state.title}
                  subtitle={this.state.subtitle}
                />
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Navbar sticky="top">
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="App-nav">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-item-active" : "nav-item"
                      }
                      to="introduction"
                    >
                      <div className="shadow-3">
                      Introduction
                      </div>
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
          </Row>
          <Row>
            <Col></Col>
            <Col className="Main-content">
              <TransitionGroup>
                <CSSTransition timeout={300} className="fade">
                  <Outlet />
                </CSSTransition>
              </TransitionGroup>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <div className="App-footer">
          <Footer title={this.state.footer} />
        </div>
      </div>
    );
  }
}
