import React from "react"
import "./App.css"
import ClassCounter from "./components/ClassCounter"
import HookCounter from "./components/HookCounter"
import HookCounterFour from "./components/HookCounterFour"
import HookCounterTwo from "./components/HookCounterTwo"
import HooksCounterThree from "./components/HooksCounterThree"
import ClassCounterOne from "./components/ClassCounterOne"
import HookCounterOne from "./components/HookCounterOne"
import ClassMouse from "./components/ClassMouse"
import HookMouse from "./components/HookMouse"
import IntervalClassCounter from "./components/IntervalClassCounter"
import IntervalHookCounter from "./components/IntervalHookCounter"
import DataFetching from "./components/DataFetching"
import ComponentC from "./components/ComponentC"

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Vonnue"}>
        <ChannelContext.Provider value={"Innovations"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

      {/* <DataFetching /> */}

      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}

      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HooksCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}

      {/* <ClassCounter /> */}
    </div>
  )
}

export default App


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     