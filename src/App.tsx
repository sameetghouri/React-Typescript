
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
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/Templateliterals/Toast';
import { CustomButton } from './components/html/CustomButton';
import { Text } from './components/polymorphic/Text';
import { DomRef } from './components/ref/DomRef';

function App() {
  const personNam ={
    first: 'Bruce',
    last: 'Wayne'
  }
  const namlist = [
    {
      id:1,
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      id:2,
      first: 'Clark',
      last: 'Kent'
    },
    {
      id:3,
      first: 'Diana',
      last: 'Prince'
    }
  ]
  return (
    <div className="App">
      <Person nam={personNam}/>
      <Personlist nam={namlist}/>
      <Status status='success'/>
      
      <Oscar><Heading>Oscar goes to the movies</Heading></Oscar>
      <Greet nam='Ali' isloggedIn={true}/>
      
      <Button handleClick={(event,id)=>{
        console.log('button clicked',event,id )
      }}/>
      <Input value='AK' handlechange={(event)=>{console.log(event)}}/>
      
      <Container style={{border:'2px solid black',margin:'10px', padding:'1rem'}}/>
      <ReducerCounter/> 

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

      <UserContextProvider>
        <User/>
      </UserContextProvider>

      <DomRef/>
      <Counter message='The Count is: '/>

      <Private isLoggedIn={true} Component={Profile}/>

      {/* <List items={['Blue', 'Green', 'Red']}
        onClick={(item)=>{console.log(item)}}
      />
      <List items={[1, 2, 3]}
        onClick={(item)=>{console.log(item)}}
      /> */}
      <List items={namlist}
        onClick={(item)=>{console.log(item)}}
      />

      <RandomNumber value={10} isPositive={true} />
      
      <Toast position='left-bottom'/>

      <CustomButton varient='primary' onClick={()=>{console.log('clicked')}}>Primary Button</CustomButton>
    
      <Text as='h1' size='lg' >Heading</Text>
      <Text as='p' size='md' >Paragraph</Text>
      <Text as='label' size='sm' color='secondary' >Label</Text>
    
    </div>

  );
}

export default App;
