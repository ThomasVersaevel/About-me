import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Thomas Versaevel",
      subtitle: "CV",
      footer: "Thanks for reading my CV!",
    };
  }

  render() {
    return (
      <div>
        <div className={"App-header"}>
          <Header title={this.state.title} subtitle={this.state.subtitle} />
        </div>
        <Container>
          <Row>
            <div id="navbarBackground">
              <Navbar sticky="top">
                <Navbar.Collapse id="basic-navbar-nav">
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
                      Work Experience
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </Row>
          <Row>
          <div>
            <Container>
              <div className="mainContent">
                <Outlet />
              </div>
            </Container>
          </div>
          </Row>
        </Container>
        <div className="App-footer">
          <Footer title={this.state.footer} />
        </div>
      </div>
    );
  }
}
