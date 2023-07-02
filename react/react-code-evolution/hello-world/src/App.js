import logo from "./logo.svg"
import "./App.css"
import Greet from "./components/Greet"
import Welcome from "./components/Welcome"
import Hello from "./components/Hello"
import Message from "./components/Message"
import Counter from "./components/Counter"
import MyButton from "./components/MyButton"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to my app</h1>
        <MyButton />

        {/* <Counter /> */}

        <Message />

        {/* /* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" /> */
        /* <Welcome /> */
        /* <Hello /> */}
      </div>
    )
  }
}
export default App
