import React, { Component } from "react"

class HoverCounterTwo extends Component {
  render() {
    return (
        <h2 onMouseOver={this.incrementcount}>Hovered X times</h2>
    )
}
}

export default HoverCounterTwo
