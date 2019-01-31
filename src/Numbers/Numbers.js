import React, {Component} from 'react';

class Numbers extends Component {
    render() {
        return (
            <div className="numbers">
                <p>{this.props.items}</p>
            </div>
        );
    };
};


export default Numbers;