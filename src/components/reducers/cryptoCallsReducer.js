import { GATHER_CRYPTO, GATHER_SYMBOLS } from "../actions/cryptoCallsActions"


const initialState = {
    cryptoData : [],
    symbolsData : [],
}

export const cryptoCallReducer = (state = initialState, action) => {
    switch(action.type) {
        case(GATHER_CRYPTO) :
            return({...state, cryptoData : action.payload})
        case(GATHER_SYMBOLS) : 
            return({...state, symbolsData : action.payload })
        default :
            return(state);
    }
}