/**
 * Created by jin.huang on 17/1/10.
 */
import { combineReducers } from 'redux'
import {TITLE} from 'action'

function getTitle(state = '我是header', action){
    switch(action.type){
        case TITLE:
            return action.text;
        default:
            return state;
    }
}

const index = combineReducers({
    getTitle
});

export default index