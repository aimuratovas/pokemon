import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import PokemonCard from './PokemonCard';

const PokemonPage = ({ match }) => {

    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const id = match.params.id;

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <>
            <h3>
                Pokemon
            </h3>
            {loading ? (
                <Loader/>
            ) : (
               <PokemonCard pokemonDetails={pokemonDetails}/>
            )}
        </>
    )
}

export default PokemonPage;
