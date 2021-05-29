import { END_LOADING_HEADLINES, END_LOADING_SOURCES, ERROR_HEADLINES, ERROR_SOURCES, FETCH_HEADLINES, FETCH_SOURCES, START_LOADING_HEADLINES, START_LOADING_SOURCES } from "./actionTypes";


export const headlinesReducer = (state = {isLoading : true,  data:{},  error:""}, action) => {
    switch(action.type){
        case START_LOADING_HEADLINES:
            return {...state, isLoading: true};
        case END_LOADING_HEADLINES:
            return {...state, isLoading: false};
        case FETCH_HEADLINES:
            return {...state, data: action.payload};
        case ERROR_HEADLINES:
            return {...state, error: action.payload};
        default:
            return state;
    }
}

export const sourcesReducer = (state = {isLoading : true,  data:{},  error:""}, action) => {
    switch(action.type){
        case START_LOADING_SOURCES:
            return {...state, isLoading: true};
        case END_LOADING_SOURCES:
            return {...state, isLoading: false};
        case FETCH_SOURCES:
            return {...state, data: action.payload};
        case ERROR_SOURCES:
            return {...state, error: action.payload};
        default:
            return state;
    }
}