import logo from "./logo.svg"
import "./App.css"
import MobileView from "./components/MobileComponents/MobileView"
import DesktopView from "./components/DesktopComponents/DesktopView"

function App() {
  return (
    <div className="App">
      <div className="mobile-view">
        <MobileView />
      </div>
      <div className="">
        <DesktopView />
      </div>
    </div>
  )
}

export default App
