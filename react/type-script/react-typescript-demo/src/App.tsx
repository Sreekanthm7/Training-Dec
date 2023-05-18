import "./App.css"
import { Greet } from "./components/Greet"
import { Person } from "./components/Person"
import { PersonList } from "./components/PersonList"
import { Status } from "./components/Status"
import { Heading } from "./components/Heading"
import { Oscar } from "./components/Oscar"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { Container } from "./components/Container"
import { ThemeContextProvider } from "./components/context/ThemeContext"
import { Box } from "./components/context/Box"
import { UserContextProvider } from "./components/context/UserContext"
import { User } from "./components/state/User"
import { Private } from "./components/auth/Private"
import { Profile } from "./components/auth/Profile"
import { List } from "./components/generics/List"
import { RandomNumber } from "./components/restriction/RandomNumber"
import { Toast } from "./components/templateliterals/Toast"
import { CustomButton } from "./components/html/Button"
import { Text } from "./components/polymorphic/Text"

function App() {
  return (
    <div className="App">
      <Text as='h1' size="lg">Heading</Text>
      <Text as='p' size="md">Paragraph</Text>
      <Text as='label' size="sm" color="secondary">
        Label
      </Text>
    </div>
  )
}

export default App



 