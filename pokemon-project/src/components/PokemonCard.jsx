import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from 'react-bootstrap';
import PokemonContext from "./PokemonContext";

function PokemonCard({ pokemonDetails }) {
    const {caughtPokemon, setCaughtPokemon} = useContext(PokemonContext)

    const addordropPokemon = () => {
        console.log(pokemonDetails.name)
        const pokemonIndex = caughtPokemon.findIndex((poke) => poke.name == pokemonDetails.name)
        if (pokemonIndex === -1) {
            if (caughtPokemon.length < 6) {
                setCaughtPokemon((prevState) => prevState.concat(pokemonDetails))
            }
            else {
                alert('You cannot catch more than 6 Pokemon!');
            }
        }
        else {
            setCaughtPokemon(caughtPokemon.filter((p) => p !== pokemonDetails))
        }
    }

    useEffect(() =>{
        console.log(caughtPokemon)
    }, [caughtPokemon]) 

 
    const typeColorMap = {
        grass: "green",
        fire: "red",
        electric: "yellow",
        ground: "brown",
        rock: "brown",
        water: "blue",
        psychic: "purple",
        poison: "purple",
        dragon: "silver",
        steel: "silver",
        flying: "cyan",
        ice: "cyan",
        normal: "gray",
    };

  return (
    <>
    <Row>
        <Col xs={5} sm={5} md={5} lg={5} xl={3}>
            <Card className='text-center' style={{ backgroundColor: typeColorMap[pokemonDetails.types[0].type.name], width: '25rem', height: '35rem', margin: "10px", padding: "10px"}}>
                <Link to={`/pokemon/${pokemonDetails.id}`}>
                    <Card.Img style={{ width: '15rem', height: '20rem' }} src={pokemonDetails.sprites.front_default} variant='top'/>
                </Link>
            <Card.Body>
                <Card.Text>
                    <Row className='text-center'>
                        {pokemonDetails.moves.slice(0, 4).map(a => (
                            <Col key={a.move.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                <div className={`rounded px-4 py-1`}>
                                    {a.move.name}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Card.Text>
            </Card.Body>
            <Link to="/">
                <button className="homebutton" style={{ backgroundColor: typeColorMap[pokemonDetails.types[0].type.name]}}>Home</button>
            </Link> 
            <button onClick={addordropPokemon} style={{ backgroundColor: typeColorMap[pokemonDetails.types[0].type.name]}}>Catch / Release</button> 
            </Card>
        </Col>
    </Row>
    </>
  );
}

export default PokemonCard;
