import React, {Component} from 'react';
import './Numbers.css';

class Numbers extends Component {
    render() {
        return (
            <div className="Numbers-numbers">
            	<p>{this.props.items.map((num) => {return <p>{num} <br/> </p>})}</p>
            </div>
        );
    };
};


export default Numbers;