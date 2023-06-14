import "./App.css"
import { Greet } from "./components/Greet"

function App() {
  return (
    <div className="App">
      <Greet name="Shamil" messageCount = {105} isLoggedIn =  {false} />
    </div>
  )
}

export default App
