import React from 'react';

const Numbers = props => {
    return (
        <div className="numbers">
        	<div><button>New numbers</button></div>
            <h1>{props.items}</h1>
        </div>
    );
};

export default Numbers;

//onClick={this.newNumbers}