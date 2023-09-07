import { combineReducers } from "redux";
import { symbolQuery } from "./symbolQueryReducer";
import { cryptoCallReducer } from "./cryptoCallsReducer";
import { buyingFormReducer } from "./buyingFormReducer";


export const rootReducer = combineReducers({
    symbolQueryReducer : symbolQuery,
    crypto : cryptoCallReducer,
    buyingForm : buyingFormReducer,
})