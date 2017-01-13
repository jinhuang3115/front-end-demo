/**
 * Created by jin.huang on 17/1/10.
 */
import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import indexReducer from './reducer'
import thunk from 'redux-thunk'
import Header from 'Header'

class component extends Component {
    render() {
        let {headerData, dispatch} = this.props;
        return (
            <Header headerData={headerData}/>
        )
    }
}

let store = createStore(indexReducer, applyMiddleware(thunk));


function select(state) {
    return {
        headerData: state.getTitle
    }
}
let Index = connect(select)(component);

render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.querySelector('#main')
);
