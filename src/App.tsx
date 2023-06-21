
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
      
      <Container style={{border:'1px solid black', padding:'1rem'}}/>
    </div>

  );
}

export default App;
