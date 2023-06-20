import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import List from "./components/List"



function App() {
  const [people, setPeople] = useState<["people"]>([])

  return (
    <div className="App">
      <h2>People Invited to my Party</h2>
      <List />
    </div>
  )
}

export default App
