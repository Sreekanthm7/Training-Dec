import React, { Component } from 'react'

export class ClickCounterTwo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    incrementCounter = () =>{
        this.setState(prevState => {
            return { count: prevState.count + 1}
        })
    }

  render() {
    return (
        <button onClick={this.incrementCounter}>Clicked {count} times</button>
    )
  }
}

export default ClickCounterTwo