import React from "react";
import { connect } from "react-redux";
import { Saved, chevronRight, chevronLeft } from "./styled/styledComponents";
import { addSecurity, hoverOver, remove, submitSearch, viewSavedSecurities } from "./actions/symbolQueryAction";
import { combineReducers } from "redux";
import { compareDifference } from "./actions/buyingFormAction";
import Reactstrap, { Form,FormGroup,Input } from "reactstrap";


const SavedStocks = (props) => {
const advancedCompare = (sym,title,cpwb,overFlow,shares,id) => {
    props.submitSearch(sym,title)
    props.compareDifference(sym,cpwb,overFlow,shares,id)
}

    return (
        <>
            <Saved viewSaved={props.viewSaved} id="saved">
                <div className="quick">
                    <h4 >My Watch List</h4>
                    <Form>
                    <FormGroup switch>
                        <Input  readOnly onClick={()=> props.hoverOver()} type = "switch" checked = {props.viewPercentChange} />
                    </FormGroup>
                    </Form>
                    <span className="material-symbols-outlined">
                        finance_chip
                    </span>
                </div>
                {props.savedSecurities.length > 0 && props.savedSecurities.map((n, i) => {
                    return <div key={i} className="savedAllOfThese" >
                        <div className="hoverOver" 
                        onClick={() => props.submitSearch(n.symbol, n.title)} key={i}>{n.saved && n.title}</div>
                        <span  id = "chartPeek"
                        className= 
                        {n.percentChange > 0 ? "pcGreen material-symbols-outlined" 
                        : n.percentChange < 0 ? "pcRed material-symbols-outlined" : "pcNeutral material-symbols-outlined"}
                        >
                            {n.percentChange > 0 ? "trending_up" : n.percentChange < 0 ? "trending_down" : "trending_flat" }</span>
                        <span className={props.viewPercentChange ? "" : "invisible"}>{n.percentChange}%</span>
                        <span key={1273} style={{ cursor: "pointer" }}
                            onClick={() => props.remove(n.id)}
                            className="material-symbols-outlined">
                            delete
                        </span>
                    </div>
                })}

                <div className="quick">
                    <h4>My portfolio</h4>
                    <span className="material-symbols-outlined">
                        account_balance
                    </span>
                </div>
               {props.stockInformation.length > 0 && props.stockInformation.map(n=> {
                    return <div className = "savedAllOfThese" key = {n.id}>
                        <div onClick={()=> advancedCompare(n.symbol,n.title,n.currentPriceWhenBought,n.overFlowInformation, n.amountOfShares, n.id)} className="hoverOver">{n.title}</div>
                        <span>total shares : {n.amountOfShares}</span>
                    </div>
               })}
            </Saved>
            <span onClick={() => props.viewSavedSecurities()}
                style={{ backgroundColor: "lightgray", zIndex: "6", marginTop: "8rem", cursor: 'pointer', transition: ".3s ease-in-out" }}
                className="material-symbols-outlined">
                {props.viewSaved ? "arrow_back" : "arrow_forward"}
            </span>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        savedSecurities: state.symbolQueryReducer.savedSecurities,
        viewSaved: state.symbolQueryReducer.viewSavedSecurities,
        currentInformation: state.symbolQueryReducer.currentSecurityInformation,
        symbolInQue: state.symbolQueryReducer.symbolInQue,
        isFetching: state.symbolQueryReducer.isFetching,
        title: state.symbolQueryReducer.title,
        overFlowInformation: state.symbolQueryReducer.overFlowInformation,
        hardFalse: state.symbolQueryReducer.hardFalse,
        viewPercentChange : state.symbolQueryReducer.viewPercentChange,

        stockInformation : state.buyingForm.stockInformation,
        isFetching : state.buyingForm.isFetching,

    }
}

export default connect(mapStateToProps, { viewSavedSecurities, remove, submitSearch, compareDifference, hoverOver })(SavedStocks)