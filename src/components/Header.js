import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div>
          <Title title={this.props.title} />
        </div>
        <div id="header-title-subtitle">
          <h4>{this.props.subtitle}</h4>
        </div>
      </>
    );
  }
}
