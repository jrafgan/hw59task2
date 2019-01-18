import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button className="new-btn" onClick={props.onClick}>New Jokes</button>
            {console.log('update working')}
        </div>
    );
};

export default Button;