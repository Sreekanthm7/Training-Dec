import React, { Component } from "react"

class FocusInput extends Component {
  constructor(props) {
    super(props)

    this.componentRef = React.createRef()
  }
  render() {
    return (
      <div>
        <Input ref = {this.componentRef}/>
        <button>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
