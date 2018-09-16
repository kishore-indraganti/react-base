import React, { Component } from 'react'

export const Context = React.createContext();

export class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: 'Initial Text',
        };
    }

    handleInputChange(e) {
        this.setState({ inputText: e.target.value });
    }

    render () {
        return (
            <Context.Provider value={{
                state: this.state,
                actions: {
                    handleInputChange: this.handleInputChange.bind(this),
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
