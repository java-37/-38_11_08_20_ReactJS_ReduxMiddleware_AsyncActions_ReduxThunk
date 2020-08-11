import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import postsReducer from './postReducer';

export default combineReducers({
    counter:counterReducer,
    posts:postsReducer
})