import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import PokemonPage from './components/PokemonPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import PokemonTeamPage from './components/PokemonTeamPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Route exact path='/' component={Home} />
        <Route path='/pokemon/:id' component={PokemonPage}/>
        <Route path="/team" component={PokemonTeamPage} />
      </Container>
    </Router>
  );
}
 
export default App;


