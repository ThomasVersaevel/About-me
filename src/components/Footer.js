import React from 'react';
import Title from "./Header/Title";
import "../App.css";

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}