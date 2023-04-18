import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Row } from 'react-bootstrap';
import Pokemon from "./Pokemon";
import Loader from '../components/Loader';

const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 30; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        setPokemon(pokemonArray);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemonList();
    }, [])

    return ( 
        <div>
            <div className="home">
                <h2>Home</h2>
            </div>
            {loading ? (
                <Loader/>
            ) : (
                <Row>
                    {pokemon.map( p =>(
                        <Pokemon pokemon={p.data}/>
                    ))}
             </Row>
        )}
        </div>
     );
}
 
export default Home;