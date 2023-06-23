import "./App.css"
import React, { useState, useEffect } from "react"

function App() {
  const [birdData, setBirdData] = useState([])
  const headers = { "x-ebirdapitoken": "9b0mjpelg7oh" }
  const fetchData = () => {
    fetch("https://api.ebird.org/v2/data/obs/IN/recent", {
      headers,
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setBirdData(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(birdData);

  return <div className="App"></div>
}

export default App
