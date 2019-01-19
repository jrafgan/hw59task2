import React, {PureComponent} from 'react';

class Button extends PureComponent {
    constructor(props) {
        super(props);
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