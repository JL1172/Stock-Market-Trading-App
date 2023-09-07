import axios from "axios";
import { API_KEY } from "../../@key/key";

export const GATHER_CRYPTO = "GATHER_CRYPTO";
export const GATHER_SYMBOLS = "GATHER_SYMBOLS";

export const gatherCrypto = () => dispatch => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true")
        .then(res => {
            dispatch(gatherSucces(res.data))
        })
        .catch(err => console.error(err))
}

const gatherSucces = (data) => {
    return { type: GATHER_CRYPTO, payload: data }
}


export const getAllSymbols = () => dispatch => {
    axios.get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${API_KEY}`)
        .then(res => {
            dispatch(gatherSymbols(res.data.slice(0,5000))); 
        })
        .catch(err => console.error(err.message))
}

const gatherSymbols = (symbols) => {
    return { type: GATHER_SYMBOLS, payload: symbols }
}