import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {books} from './Reducers/Books';

export const store=createStore(
    combineReducers({
        books
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
);