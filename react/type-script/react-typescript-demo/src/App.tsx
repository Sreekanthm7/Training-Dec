import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/state/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
function App() {

  // <Private isLoggedIn={true} component={Profile} />

  // <UserContextProvider>
  //   <User />
  // </UserContextProvider>
  // const personName = {
  //   first: 'John',of render in react
  //   last: 'Wayne',
  // }

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne',
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent',
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana',
  //   },
  //   {
  //     first: 'Alen',
  //     last: 'Paul'
  //   }
  // ]

  return (
    <div className="App">

    <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={(item) => console.log(item)} />

    <List 
    items={[
      {
        first: 'Bruce',
        last: 'Wayne',
      },
      {
        first: 'Clark',
        last: 'Kent',
      },
      {
        first: 'Princess',
        last: 'Diana',
      },
    ]}
    onClick={(item) => console.log(item)} 
/>
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}


     {/* <Greet name = "Vishwas" messageCount={40} isLoggedIn={false}/>
     <Person name={personName}/>
     <PersonList names = {nameList} /> */}

     {/* <Status status = 'success' />
     <Heading>Placeholder text</Heading>
     <Oscar>
      <Heading>Oscar goes to Leonardo Dicpario!</Heading>
     </Oscar>
     <Greet name = 'Shamil' messageCount={100} isLoggedIn={true} /> */}

     {/* <Button handleClick={(event, id) => {
      console.log('Button Clicked', event, id);
      
     }} />
    <Input value ="" handleChange={(event) => console.log(event)}/> */}

    {/* <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}

    </div>
  );
}

export default App;
