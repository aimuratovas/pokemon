import React, { useContext } from 'react';
import PokemonCard from './PokemonCard';
import PokemonContext from './PokemonContext';

function PokemonTeamPage() {
  const { caughtPokemon } = useContext(PokemonContext)

  return (
    <div>
      <h2>My Team</h2>
      {caughtPokemon.length === 0 ? (
      <p>You haven't captured any Pokemon yet.</p>
      ) : (
        <div className="d-flex flex-wrap" >
          {caughtPokemon.map((pokemon) => (
            <div key={pokemon.id} className="mx-2" style={{ flex: 1 }}>
              <PokemonCard pokemonDetails={pokemon} />
            </div>
          ))}
        </div>

      )}
    </div>
    );
    }

export default PokemonTeamPage;