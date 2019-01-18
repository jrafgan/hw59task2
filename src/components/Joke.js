import React, {Fragment} from 'react';

const Joke = (props) => {
    return (
        <Fragment>
            <div className="joke">{props.joke}</div>
        </Fragment>
    );
};

export default Joke;