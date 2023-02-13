import React from 'react';
import Title from "./Header/Title";

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <Title title={this.props.title} />
                <h4 id="header-subtitle">{this.props.subtitle}</h4>
            </div>
        );
    }
}