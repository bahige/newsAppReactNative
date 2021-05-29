import {combineReducers} from 'redux';
import { headlinesReducer, sourcesReducer } from './reducers';

export const rootReducer =  combineReducers({
    headlines : headlinesReducer,
    sources: sourcesReducer
})