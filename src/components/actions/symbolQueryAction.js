import axios from "axios";
import { API_KEY } from "../../@key/key";
export const CHANGE_SYMBOL = "CHANGE_SYMBOL";
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";
export const IS_FETCHING_SECURITY = "IS_FETCHING_SECURITY";
export const IS_FETCHING_ERROR = "IS_FETCHING_ERROR";
export const FETCHING_SECURITY_SUCCESS = "FETCHING_SECURITY_SUCCESS"; 
export const VIEW_SAVED_SECURITY = "VIEW_SAVED_SECURITY";
export const SET_TITLE = 'SET_TITLE'; 
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const THIRD_SEARCH = "THIRD_SEARCH"; 
export const SAVE_SECURITY = "SAVE_SECURITY";
export const REMOVE = "REMOVE";
export const HOVER_OVER = "HOVER_OVER";
// /stock/candle?symbol=AAPL&resolution=1&from=1693493346&to=1693752546
// /stock/metric?symbol=AAPL&metric=all

//! /stock/price-target?symbol=DIS target 

export const submitSearch = (symbolInQue,title) => dispatch => {
    dispatch(isFetchingSecurity(true))
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbolInQue}&token=${API_KEY}`)
    .then(res=> {
        // dispatch(setTitle(symbolInQue))
        dispatch(isFetchingSecurity(false))
        dispatch(fetchingSecuritySuccess(res.data))
        dispatch(setTitle(title))
    })
    .catch(err=> dispatch(isFetchingError(err.message)))
}

export const changeSymbol = (value) => {
    return{type : CHANGE_SYMBOL, payload : value}
}
const isFetchingSecurity = (aBoolean) => {
    return{type : IS_FETCHING_SECURITY, payload : aBoolean}
}
const isFetchingError = (errorMessage) => {
    return{type : IS_FETCHING_SECURITY, payload : errorMessage};
}
const fetchingSecuritySuccess = (information) => {
    return{type : FETCHING_SECURITY_SUCCESS, payload : information}
}
export const viewSavedSecurities = () => {
    return{type : VIEW_SAVED_SECURITY}
}
export const setTitle = (title) => {
    return{type : SET_TITLE, payload : title}
}
export const searchResults = (value) => {
    return {type : SEARCH_RESULTS, payload : value}; 
}
export const thirdSearch = (value) => {
    return {type : THIRD_SEARCH, payload : value}; 
}
export const addSecurity = (stock) => {
    return{type : SAVE_SECURITY, payload : stock}
}
export const remove = (stockToBeRemoved) => {
    return{type : REMOVE, payload : stockToBeRemoved}
}

export const hoverOver = () => {
    return{type : HOVER_OVER}
}