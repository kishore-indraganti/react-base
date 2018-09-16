import React, { Component } from 'react';

import { Context } from './context';

class Form extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {({ state, actions }) => <input value={state.inputText} onChange={actions.handleInputChange} />}
                </Context.Consumer>
            </div>
        )
    }
}

export default Form
