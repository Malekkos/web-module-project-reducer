import React from 'react';
import { useReducer } from "react"
import reducer from "../reducers/index"
import { initialState }from "../reducers/index"
import { addOne, applyNumber } from "../actions/index"
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  // console.log(state)
  // console.log(initialState)
  // console.log(reducer)

  const handleClick = (event) => {
    console.log(event)
    dispatch(applyNumber(event))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(event) => {handleClick(event.target.value)}}/>
              <CalcButton value={2} onClick={(event) => {handleClick(event.target.value)}}/>
              <CalcButton value={3} onClick={(event) => {handleClick(event.target.value)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(event) => {handleClick(event.target.value)}}/>
              <CalcButton value={5} onClick={(event) => {handleClick(event.target.value)}}/>
              <CalcButton value={6} onClick={(event) => {handleClick(event.target.value)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(event) => {handleClick(event.target.value)}}/>
              <CalcButton value={8} onClick={(event) => {handleClick(event.target.value)}}/>
              <CalcButton value={9} onClick={(event) => {handleClick(event.target.value)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
