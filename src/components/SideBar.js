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
                  <li>Music</li>
                  <li>Fitness</li>
                  <li>Cooking</li>
                </ul>
              </p>
            </div>
            <div className="sidebar-bubble">
              <p>
                <b>Hobbies</b> <br />
                <ul className="sidebar-list">
                  <li>Gaming</li>
                  <li>Game development</li>
                  <li>Piano</li>
                  <li>Gym</li>
                  <li>Running</li>
                </ul>
              </p>
            </div>
            <div className="sidebar-bubble">
              <p>
                <b>Personal Info</b> <br />
                <div className="sidebar-content">
                  <ul classname="sidebar-list">
                    <li>
                      <img
                        className="image-link"
                        alt="icon.png"
                        src={require("../assets/home.png")}
                      />
                      Eindhoven
                    </li>
                    <li>
                      {" "}
                      <img
                        className="image-link"
                        alt="icon.png"
                        src={require("../assets/partyhat.png")}
                      />
                      6th of june 1999
                    </li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}
