import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Home from './Routes/Home'
const reducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state = state + 1;
        default:
            return state;
    }
};
const store = createStore(reducer);
render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);