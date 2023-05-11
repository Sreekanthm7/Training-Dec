import React, { Component } from "react"
import LifeCycleB from "./LifeCycleB"

class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Vonnue",
    }
    console.log("LifecycleA constructor")
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount")
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate")
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleA getSnapShotBefore Update');
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate');
  }

  render() {
    console.log("LifecycleA render")
    return (
      <div>
        <div>LifeCycle A</div>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
