import React, { useState, useEffect } from "react"
import "./Usage.css"

function Usage(params) {
  const arr = useState(0)
  const [value, setValue] = arr
  const [color, setColor] = useState("white")
  const [boom, setBoom] = useState(false)

  useEffect(() => {
    console.log("Inside Use Effect", value)
    return () => {
      console.log("value", value)
    }
  }, [value, color])

  return (
    <div className="usage">
      <div className="usage-item" style={{ background: color }}>
        <button
          onClick={() => {
            setValue(value + 1)
          }}
        >
          Increment
        </button>
        <label>{value}</label>
        <button
          onClick={() => {
            setValue(value - 1)
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            setColor("green")
          }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("blue")
          }}
        >
          Blue
        </button>
      </div>
      {boom && value ? (
        <div className="boom">
          <span>Boom</span>
        </div>
      ) : null}
    </div>
  )
}

export default Usage
