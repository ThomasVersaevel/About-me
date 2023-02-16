import React from 'react';
import "../App.css";

export default class Footer extends React.Component {
    render() {
        return (
            <div>
                <h2 id="footer-text">{this.props.title}</h2>
            </div>
        )
    }
}