import logo from "./logo.svg"
import "./App.css"
import Message from "./components/Message"
import { Component, Fragment } from "react"
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"
import UserGreeting from "./components/UserGreeting"
import NameList from "./components/NameList"
import Person from "./components/Person"
import Stylesheet from "./components/StyleSheet"
import Inline from "./components/Inline"
import "../src/components/appStyle.css"
import styles from "../src/components/appStyles.module.css"
import Form from "./components/Form"
import LifeCycleA from "./components/LifeCycleA"
import FragmentDemo from "./components/FragmentDemo"
import Table from "./components/Table"
import PureComp from "./components/PureComp"
import "./App.css"
import ParentComp from "./components/ParentComp"
import RefsDemo from "./components/RefsDemo"
import FRParentInput from "./components/FRParentInput"
import ClickCounter from "./components/ClickCounter"
import HoverCounter from "./components/HoverCounter"
import ComponentC from "./components/ComponentC"
import { UserProvider } from "./components/userContext"

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value = "Vishwas">
          <ComponentC />
        </UserProvider>

        {/* <clickCounterTwo /> */}
        {/* <HoverCounter /> */}

        {/* <PortalDemo />
         */}
        {/* <FRParentInput /> */}

        {/* <RefsDemo /> */}

        {/* <ParentComp /> */}

        {/* <PureComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifeCycleA /> */}
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Form /> */}

        {/* `<Inline /> */}

        {/* <Stylesheet primary={true} /> */}

        {/* <NameList /> */}

        {/* <UserGreeting /> */}

        {/* <ParentComponent /> */}
        {/* <EventBind /> */}

        {/* <ClassClick /> */}

        {/* <FunctionClick /> */}

        {/* <Counter /> */}
        {/* <Message /> */}
      </div>
    )
  }
}

export default App
