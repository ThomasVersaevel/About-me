import React from "react";

// Header title and subtitle. only use for header
export default class Title extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
