import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { gatherCrypto, getAllSymbols,  } from "../actions/cryptoCallsActions";

const GatherAllCrypto = (props) => {
    useEffect(()=>{
        props.gatherCrypto();
        props.getAllSymbols();
    },[])
    return (
        <div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       cryptoData : state.crypto.cryptoData,
    }
}

export default connect(mapStateToProps,{gatherCrypto, getAllSymbols})(GatherAllCrypto);