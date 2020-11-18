import './App.css';
import Main from './views/Main';
import OnePet from './views/OnePet';
import UpdatePet from './views/UpdatePet';
import { Router } from '@reach/router';
import NewPet from './views/NewPet';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './doggie.png';

function App() {
  return (
    <div className="App">
      <div className="Header">
      <h1><img src={logo} className="rounded float-right" alt="Dog Image"/>&nbsp;&nbsp;&nbsp;Pet Shelter </h1>
      </div>
      <Router>
        <Main path="/"/>
        <NewPet path="/pets/new"/>
        <OnePet path="/pets/:_id"/>
        <UpdatePet path="/pets/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
