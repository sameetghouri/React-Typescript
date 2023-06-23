
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { Personlist } from './components/Personlist';
import { Status } from './components/Status';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { ReducerCounter } from './components/state/ReducerCounter';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';

function App() {
  const personNam ={
    first: 'Bruce',
    last: 'Wayne'
  }
  const namlist = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Diana',
      last: 'Prince'
    }
  ]
  return (
    <div className="App">
      <Person nam={personNam}/>
      <Personlist nam={namlist}/>
      <Status status='loading'/>
      
      <Oscar><Heading>Oscar goes to the movies</Heading></Oscar>
      <Greet nam='Ali' isloggedIn={false}/>
      
      <Button handleClick={(event,id)=>{
        console.log('button clicked',event,id )
      }}/>
      <Input value='' handlechange={(event)=>{console.log(event)}}/>
      
      <Container style={{border:'2px solid black',margin:'10px', padding:'1rem'}}/>
      <ReducerCounter/>

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

      <UserContextProvider>
        <User/>
      </UserContextProvider>

      <Counter message='The Count is: '/>

      <Private isLoggedIn={true} Component={Profile}/>

      <List items={['Blue', 'Green', 'Red']}
        onClick={(item)=>{console.log(item)}}
      />
      <List items={['1', '2', '3']}
        onClick={(item)=>{console.log(item)}}
      />
      <List items={[{first:'bruce', last:'wayne'}, 
      {first:'clark', last:'kent'}, 
      {first:'diana', last:'prince'}]}
        onClick={(item)=>{console.log(item)}}
      />
      
    </div>

  );
}

export default App;
