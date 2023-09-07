import React from 'react';
import './App.css';
import { API_KEY } from './@key/key';
import { useSymbolState } from './components/customHooks/useSymbolState';
import { StyledDiv } from './components/styled/styledComponents';
import Header from "/src/components/Header.js";
import SavedStocks from "/src/components/SavedStocks.js";
import Graph from './components/Graph';
import { connect } from 'react-redux';
import { searchResults } from './components/actions/symbolQueryAction';
import GatherAllCrypto from "./components/customHooks/useCyptoState"

function App(props) {

  const filteredList = () => {
    const term = props.filteredResults.trim().toLowerCase();
    let parent = []
    let res = symbols.map(n=> {
      parent.push({description : n.description, displaySymbol : n.displaySymbol})
    })
    if (!term) return parent;
    else {
    return parent.filter((n,i)=> {
      return n.description.toLowerCase().includes(term)
    })
  }
  }

  return (
    <StyledDiv className="App">
      <Header  />
      <SavedStocks />
      <Graph  />
      <GatherAllCrypto />
    </StyledDiv>
  );
}

const mapStateToProps = state => {
  return {
    filteredResults : state.symbolQueryReducer.filteredResults,
    symbolsData : state.crypto.symbolsData,
  }
}

export default connect(mapStateToProps,{searchResults})(App);