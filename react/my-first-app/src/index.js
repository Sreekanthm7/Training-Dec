import React from "react"
import ReactDOM from "react-dom"
import ListItem from "./list/Listitem"

ReactDOM.render(
  <div className="app">
    <div className="app-header">
      <span className="header-title">Code Malayalam</span>
      <span>Home</span>
      <span>Usage</span>
      <span>settings</span>
      <span>Logout</span>
    </div>
    <div className="app-body">
      <div className="app-list">
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </div>
    </div>
    <div className="app-footer">
      Copyright codemalayalam.in. All Right Reserved
    </div>
  </div>,

  document.getElementById("root")
)
