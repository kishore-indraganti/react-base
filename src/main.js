import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { AppProvider } from './context';

import Form from './form';

class Main extends Component {
    render () {
        return (
            <AppProvider>
                <Form />
            </AppProvider>
        )
    }
}

const wrapper = document.getElementById('app');
ReactDom.render(<Main />, wrapper)
