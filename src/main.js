import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Main extends Component {
    render () {
        return (
            <div>
                Hello World
            </div>
        )
    }
}

const wrapper = document.getElementById('app');
ReactDom.render(<Main />, wrapper)
