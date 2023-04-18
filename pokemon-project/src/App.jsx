import './index.css';
import React, {useState} from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import PokemonPage from './components/PokemonPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PokemonTeamPage from './components/PokemonTeamPage';
import PokemonContext from './components/PokemonContext';
import { Switch } from 'react-router-dom';

function App() {

const [caughtPokemon, setCaughtPokemon] = useState([]);

  return (
    <Router>
      <PokemonContext.Provider
      value={{ caughtPokemon, setCaughtPokemon}}
      >
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pokemon/:id' component={PokemonPage}/>
        <Route path="/team" component={PokemonTeamPage} />
      </Switch>
      </PokemonContext.Provider>
    </Router>
  );
}
 
export default App;
