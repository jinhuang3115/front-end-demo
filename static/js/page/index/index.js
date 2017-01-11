/**
 * Created by jin.huang on 17/1/10.
 */
import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import indexReducer from './reducer'
import Header from 'Header'

class Index extends Component {
    render() {
        return (
            <Header/>
        )
    }
}

let store = createStore(indexReducer);

render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.querySelector('#main')
);