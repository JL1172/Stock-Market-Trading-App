import { connect } from "react-redux"
import React from "react"
import { changeShareFormValue, confirmationMessage, flipPage, submitPurchase } from "./actions/buyingFormAction"
import { StyledForm } from "./styled/styledComponents"
import { CardFooter } from "reactstrap"

const BuyingForm = (props) => {
    const advancedPurchase = (e) => {
        e.preventDefault();
        const obj = {
            total: props.total,
            amountOfShares: props.amountOfShares,
            currentPriceWhenBought: props.currentInformation[0].c,
            symbol: props.overFlowInformation.displaySymbol,
            title: props.overFlowInformation.description,
            overFlowInformation: props.overFlowInformation,
            id: Date.now(),
        }
        props.submitPurchase(obj);
    }
    const confirmPurchase = e => {
        e.preventDefault();
        props.confirmationMessage(props.title)
    }
    const flipItOver = (e) => {
        e.preventDefault();
        props.flipPage();
    }

    return (
        <div id="buying">
            {props.bool ? <>
                <div>{props.message}</div>
                <form onSubmit={(e) => advancedPurchase(e)}>
                    <input id = "confirm" type="submit" value="confirm" />
                </form>
            </> : <>
                <h1>Purchase Form</h1>
                <h3>{props.title}</h3>
                <section>
                    <span id="current">Current Price/share : <b>${props.currentInformation[0].c}</b></span>
                    <span id="total">Total : <b>${props.total}</b></span>
                </section>
                <section style={{ marginTop: "1rem" }}>
                    <span>Todays High : <b>${props.currentInformation[0].h}</b></span>
                    <span>Todays Low : <b>${props.currentInformation[0].l}</b></span>
                </section>

                <div>
                    <form onSubmit={(e) => confirmPurchase(e)}>
                        <main>
                            <label htmlFor="numberToPurchase">Number of Shares to purchase: </label>
                            <input value={props.amountOfShares} name="amountOfShares" id="amountOfShares"
                                onChange={(e) => props.changeShareFormValue(e.target.value, props.currentInformation[0].c)} type="number" />
                        </main>
                        <div id = "submission">
                        <input type="submit" id="submit" />
                    <button onClick={(e) => flipItOver(e)}>Back</button>
                    </div>
                    </form>
                    <CardFooter id="footer" style={{ color: "lightgray" }}>Powered by smart-purchase technology</CardFooter>
                </div></>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentInformation: state.symbolQueryReducer.currentSecurityInformation,
        title: state.symbolQueryReducer.title,
        overFlowInformation: state.symbolQueryReducer.overFlowInformation,

        total: state.buyingForm.total,
        amountOfShares: state.buyingForm.amountOfShares,

        bool: state.buyingForm.confirmationMessage.confirmationMessageDeployed,
        message: state.buyingForm.confirmationMessage.message,
    }
}

export default connect(mapStateToProps, { flipPage, changeShareFormValue, submitPurchase, confirmationMessage })(BuyingForm);