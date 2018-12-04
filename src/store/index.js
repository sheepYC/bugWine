import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunkMid from 'redux-thunk';
import promiseMid from 'redux-promise';
import Mid from './Mid'

const reducers = combineReducers(Mid)

const store = createStore(reducers ,applyMiddleware(thunkMid,promiseMid))

export default store