import React, {Component} from 'react';

class Button extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }

    render() {

        return(
            <div>
                <button className="btn" onClick={this.props.onClick}>Get 5 more Jokes</button>
            </div>
        )
    }
}

export default Button;