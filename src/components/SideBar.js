import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";

export default function SideBar() {
  return (
    <>
      <Collapse in={true} appear={true}>
        <div>
          <div className="sidebar-container">
            <div className="sidebar-bubble">
              <p>
                <b>Professional Skils</b>
                <br />
                <ul className="sidebar-list">
                  <li>Presenting</li>
                  <li>Teamwork</li>
                  <li>Leadership</li>
                  <li>Reflection</li>
                </ul>
              </p>
            </div>
            <div className="sidebar-bubble">
              <p>
                <b>Interests</b>
                <ul className="sidebar-list">
                  <li>Software</li>
                  <li>Computer Hardware</li>
                  <li>Fitness</li>
                </ul>
              </p>
            </div>
            <div className="sidebar-bubble">
              <p>
                <b>Hobbies</b> <br />
                <ul className="sidebar-list">
                  <li>Gaming</li>
                  <li>Game development</li>
                  <li>Running</li>
                </ul>
              </p>
            </div>
            <div className="sidebar-bubble">
              <p>
                <b>Personal Info</b> <br />
                <div className="sidebar-content">
                  <img
                    className="image-link"
                    alt="icon.png"
                    src={require("../assets/home.png")}
                  />
                  Eindhoven
                  <br />
                  <img
                    className="image-link"
                    alt="icon.png"
                    src={require("../assets/mail.png")}
                  />
                  Thomas0699@gmail.com
                  <br />
                </div>
              </p>
            </div>
          </div>

          {/* <Container className="sidebar-container">
            <Row>
              <Col md={2}></Col>
              <Col md={8} className="sidebar-bubble">
                <p><b>Professional Skils</b></p>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={8} className="sidebar-bubble">
                <p><b>Hobbies</b></p>
              </Col>
              <Col md={2}></Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={8} className="sidebar-bubble">
                <p><b>Personal Info</b></p>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Container> */}
        </div>
      </Collapse>
    </>
  );
}
