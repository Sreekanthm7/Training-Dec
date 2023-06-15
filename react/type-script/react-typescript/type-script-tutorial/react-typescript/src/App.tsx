import "./App.css"
import { Button } from "./components/Button"
import { Greet } from "./components/Greet"
import { Heading } from "./components/Heading"
import { Oscar } from "./components/Oscar"
import { Status } from "./components/Status"

function App() {
  return (
    <div className="App">
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event) => {
        console.log("Button clicked", event);
        
      }} />
    </div>
  )
}

export default App
