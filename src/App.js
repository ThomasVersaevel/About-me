import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, NavLink } from 'react-router-dom';
import { Button } from "../react-bootstrap/Button";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to my interactive CV",
      footer: "Thanks for reading my CV!",
    };
  }

  render() {
    return (

      <div>
        <div className={"App-header"}>
          <Header title={this.state.title}
            subTitle={this.state.subTitle}/>
        </div>
        <div>
          <nav className="App-nav">
            <NavLink className={"nav-item"} to='introduction'><button>Introduction</button></NavLink>
            <NavLink className={"nav-item"} to='education'><button>Education</button></NavLink>
            <NavLink className={"nav-item"} to='workexperience'><button>Work Experience</button></NavLink>
          </nav>
          <Outlet />
        </div>
        <div>
          <Footer title={this.state.footer} />
        </div>
      </div>
    )
  }
}