import React, {useContext, useEffect, useState} from "react";
import { Link, useHistory } from 'react-router-dom';
import PokemonContext from "./PokemonContext";

const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const { caughtPokemon } = useContext(PokemonContext) 
    const [pokemonCount, setPokemonCount] = useState(caughtPokemon.length)
    const history = useHistory();

    useEffect( () =>{
        setPokemonCount(caughtPokemon.length)
    }, [caughtPokemon])

    const handleSearch = () => {
        if (searchTerm) {
            history.push(`/pokemon/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (  
        <nav className="nav">
            <h1>POKEDEX</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>           
                </li>
                <li>
                    <Link to="/team">My Team #{pokemonCount}</Link>
                </li>
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)}/> 
                    <button> Search </button>
                </form>
            </ul>
        </nav>
    );
}
 
export default Navbar;



