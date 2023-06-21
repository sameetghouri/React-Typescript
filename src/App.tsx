
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { Personlist } from './components/Personlist';

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
      <Greet nam='Ali' messageCount={10} isloggedIn={false}/>
      <Person nam={personNam}/>
      <Personlist nam={namlist}/>
    </div>
  );
}

export default App;
