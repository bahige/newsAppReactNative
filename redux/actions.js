import {END_LOADING_HEADLINES, END_LOADING_SOURCES, ERROR_HEADLINES, ERROR_SOURCES, 
    FETCH_HEADLINES, FETCH_SOURCES, START_LOADING_HEADLINES, START_LOADING_SOURCES, } from './actionTypes';
import * as api from './api';



export const getHeadlines = (country, business) => async(dispatch) => {
    try {
        dispatch({type:START_LOADING_HEADLINES});
        const {data} = await api.fetchHeadlines(country, business);
        dispatch({type:FETCH_HEADLINES, payload: data});
        dispatch({type:END_LOADING_HEADLINES});

    } catch(error){
        dispatch({type:ERROR_HEADLINES, payload:error})
    }
}

export const getSources = () => async(dispatch) => {
    try{
        dispatch({type:START_LOADING_SOURCES});
        const data = await api.fetchSources();
        dispatch({type:FETCH_SOURCES, payload: data});
        dispatch({type:END_LOADING_SOURCES});
    }catch(error){
        dispatch({type:ERROR_SOURCES, payload: error});
    }
}