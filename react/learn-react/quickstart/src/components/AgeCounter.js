import React, { useState } from "react"

function AgeCounter() {
  const [age, setAge] = useState(0)

  function increment() {
    setAge((a) => a + 1)
  }
  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment()
          increment()
          increment()
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment()
        }}
      >
        +1
      </button>
    </>
  )
}

export default AgeCounter
