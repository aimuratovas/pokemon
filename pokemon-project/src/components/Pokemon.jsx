import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const pokemon = ({ pokemon }) => {

    return (
        <>
            <div>
                <Link to={`/pokemon/${pokemon.id}`}>
                </Link>
            </div>
            <div>
                <Link to={`/pokemon/${pokemon.name}`} className='link-name'>
                    <Card.Title as='div'><strong>{pokemon.id}. {pokemon.name}</strong></Card.Title>
                </Link>
            </div>
        </>
    )
}

export default pokemon;