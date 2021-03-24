import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollToTop from 'react-router-scroll-top'
import {BrowserRouter as Router} from 'react-router-dom'

import store from './redux/store'
import {Provider} from "react-redux"
ReactDOM.render(
    <Provider store={store}>
        <Router >
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router >
    </Provider>,
    document.getElementById('root')
);

