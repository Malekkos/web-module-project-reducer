import React from 'react';
import { useReducer } from "react"
import reducer from "../reducers/index"
import { initialState }from "../reducers/index"
import { addOne, applyNumber, changeOperation, clearDisplay, addToMemory, clearMemory, applyToMemory } from "../actions/index"
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
  const operationHandler = (operation) => {
    dispatch(changeOperation(operation))
  }
  const clearHandler = () => {
    dispatch(clearDisplay())
  }
  const addToMemoryHandler = () => {
    dispatch(addToMemory(state.total));
  }
  const applyToMemoryHandler = () => {
    dispatch(applyToMemory());
  }
  const clearMemoryHandler = () => {
    dispatch(clearMemory())
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
              <CalcButton value={"M+"} onClick={() => {addToMemoryHandler()}}/>
              <CalcButton value={"MR"} onClick={() => {applyToMemoryHandler()}}/>
              <CalcButton value={"MC"} onClick={() => {clearMemoryHandler()}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {handleClick(1)}}/>
              <CalcButton value={2} onClick={() => {handleClick(2)}}/>
              <CalcButton value={3} onClick={() => {handleClick(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {handleClick(4)}}/>
              <CalcButton value={5} onClick={() => {handleClick(5)}}/>
              <CalcButton value={6} onClick={() => {handleClick(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {handleClick(7)}}/>
              <CalcButton value={8} onClick={() => {handleClick(8)}}/>
              <CalcButton value={9} onClick={() => {handleClick(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(event) => {operationHandler(event.target.value)}}/>
              <CalcButton value={"*"} onClick={(event) => {operationHandler(event.target.value)}}/>
              <CalcButton value={"-"} onClick={(event) => {operationHandler(event.target.value)}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {clearHandler()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
