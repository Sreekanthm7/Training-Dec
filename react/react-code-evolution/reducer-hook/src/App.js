import "./App.css"
import React, { useState, useReducer } from "react"
import DataFetchingTwo from "./components/DataFetchingTwo"
import CounterOne from "./components/CounterOne"
import LearnProp from "./components/LearnProp"

function App() {
  // const [input, setInput] = useState("")
  const [count, setCount] = useState(0)
  // const toggleInput = (event) => {
  //   setInput(event.target.value)
  // }
  // function incrementFun() {
  //   setCount((previous) => previous + 1)
  // }

  // function decrementFun() {
  //   setCount((previous) => previous - 1)
  // }           
  const incrementFun=()=>{
    setCount((previous) => previous + 1)
  }

  const decrementFun = ()=>{
    setCount((previous) => previous - 1)
  }
  return (
    <>
      {/* <CounterOne /> */}
      {/* <LearnProp name="Sreekanth" age={21} /> */}
      {/* <input type="text" onChange={toggleInput} /> */}
      {/* <input
        type="text"
        onChange={(event) => {
          setInput(event.target.value)
        }}
      />
      <div>{input}</div> */}
      <button onClick={incrementFun}>+</button>
      <div>{count}</div>
      <button onClick={decrementFun}>-</button>
    </>
  )
}

export default App
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     