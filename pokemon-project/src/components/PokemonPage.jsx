import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



// Components
import Loader from '../components/Loader';

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


const [team, setTeam] = useState([]);

const handleCatch = (pokemonDetails) => {
    if (team.length >= 6) {
        alert('You cannot catch more than 6 Pokemon!');
    return;
    }
    if (team.find(p => p.id === pokemonDetails.id)) {
        alert('You have already caught this Pokemon!');
    return;
    }
    setTeam([...team, pokemonDetails]);
}  


    return (
        <>
            <h3>
                Pokemon
            </h3>
            {loading ? (
                <Loader/>
            ) : (
                <Row>
                    <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                        <Card className='p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <Link to={`/pokemon/${pokemonDetails.id}`}>
                                <Card.Img style={{ width: '15rem' }} src={pokemonDetails.sprites.front_default} variant='top'/>
                            </Link>
                            <Card.Body>
                                <Card.Text>
                                    <Row className='text-center'>
                                        {pokemonDetails.moves.slice(0, 4).map(a => (
                                            <Col key={a.move.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <div className={`rounded px-4 py-1`}>
                                                    {a.move.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                            <Link to="/">Home</Link>
                            <button onClick={() => handleCatch(pokemonDetails)}>Catch</button>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default PokemonPage;








