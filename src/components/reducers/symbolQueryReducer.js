import { CHANGE_SYMBOL, FETCHING_SECURITY_SUCCESS, HOVER_OVER, IS_FETCHING_ERROR, IS_FETCHING_SECURITY, REMOVE, SAVE_SECURITY, SEARCH_RESULTS, SET_TITLE, THIRD_SEARCH, VIEW_SAVED_SECURITY } from "../actions/symbolQueryAction"
import { API_KEY } from "../../@key/key";
import { useSymbolState } from "../customHooks/useSymbolState";



const initialState = {
    symbolInQue : [],
    isFetching : false,
    errorMessage : "",
    currentSecurityInformation : [],
    savedSecurities : [],
    viewSavedSecurities : false,
    title : "",
    filteredResults : "",
    overFlowInformation : [],
    hardFalse : false,
    secondaryQue : [],
    favorited : false,

    viewPercentChange : false,
}

export const symbolQuery = (state = initialState, action) => {
    switch(action.type) {
        case(CHANGE_SYMBOL) :
        let parsed = JSON.parse(action.payload);
            return({...state, symbolInQue : parsed.displaySymbol, overFlowInformation : parsed});
        case(IS_FETCHING_SECURITY) :
            return({...state, isFetching : action.payload});
        case(IS_FETCHING_ERROR) :
            return({...state, errorMessage : action.payload, isFetching : false});
        case(FETCHING_SECURITY_SUCCESS) :
            return({...state,
                currentSecurityInformation :
                 [action.payload], hardFalse : false, filteredResults : "", secondaryQue : "", symbolInQue : "", favorited : false}) //!symbolInQue
        case(VIEW_SAVED_SECURITY) : 
            return({...state, viewSavedSecurities : !state.viewSavedSecurities});
        case(SET_TITLE) :
            return({...state, title : action.payload});

       case(SAVE_SECURITY) :
                if (!state.savedSecurities.find(n => n.symbol === action.payload.symbol)) {
                return({...state, savedSecurities : [...state.savedSecurities,action.payload], favorited : true})
                }
        case(REMOVE) : 
                return({...state, savedSecurities : state.savedSecurities.filter(n => n.id !== action.payload), favorited : false})
        case(HOVER_OVER) :
                return({...state, viewPercentChange : !state.viewPercentChange})
                default : 
            return(state);
    }
}