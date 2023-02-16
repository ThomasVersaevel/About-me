import React from "react";
import "./App.css";
import "./Animation.css";
import "./bootstrap/css/bootstrap-grid.css";
import "./bootstrap/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { Outlet, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Thomas Versaevel",
      subtitle: "Computer Science Engineer",
      footer: "Thank you for reading my CV",
    };
  }

  render() {
    return (
      <>
        <div>
          <Container className="container-margin">
            <Row className={"App-header"}>
              <Col md={1} xs={1}></Col>
              <Col lg={10} md={10} xs={10}>
                <div id="header-title">
                  <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                  />
                </div>
              </Col>
              <div id="profile-picture">
                <img
                  src={require("./assets/pfSquare.jpeg")}
                  className="image-rounded"
                  alt=""
                />
              </div>
            </Row>
            <Row className="App-navbar">
              <Col lg={1} md={1} xs={1}></Col>
              <Col lg={10} md={10} xs={10}>
                  <Nav className="App-nav">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-item-active" : "nav-item"
                      }
                      to="introduction"
                    >
                      Introduction
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
                      Experience
                    </NavLink>
                  </Nav>
              </Col>

            </Row>
            <Row>
              <Col lg={1} md={1} xs={1}>
                <div className="vertical-bar-left"></div>
              </Col>
              <Col lg={8} md={8} xs={10} className="main-content-area">
                <TransitionGroup>
                  <CSSTransition timeout={300} className="fade">
                    <Outlet />
                  </CSSTransition>
                </TransitionGroup>
              </Col>
              <Col lg={3} md={3} xs={3}>
                <div className="vertical-bar-right">
                  <SideBar></SideBar>
                </div>
              </Col>
            </Row>
            <Row className="App-footer">
              <Col md={1}></Col>
              <Col lg={10} md={8}>
                <div>
                  <Footer title={this.state.footer} />
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
