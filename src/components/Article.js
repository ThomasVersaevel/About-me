import React from 'react';

export default class Article extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h4><b>{this.props.timespan} {this.props.title}</b></h4> 
                    <h5>{this.props.position}</h5>
                </div>
                <div>
                    <p>
                        {this.props.content}
                    </p>
                </div>
            </>
        );
    }
}