import {useState, useEffect} from "react";
import React from "react";
import axios from "axios";

export const useSymbolState = (API_KEY) => {
    const [symbols,setSymbols] = useState([]);
    useEffect(()=> {
        axios.get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${API_KEY}`)
        .then(res=> {
            const arrayOfSymbols = res.data.slice(0,2000);
          setSymbols(arrayOfSymbols);
        })
        .catch(err=> console.error(err.message))
      },[])
  
      return [symbols]
}