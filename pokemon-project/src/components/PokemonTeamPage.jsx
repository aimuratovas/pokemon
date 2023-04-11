import React, { useState } from 'react';
import PokemonPage from './PokemonPage';

function PokemonTeamPage() {
  const [team, setTeam] = useState([]);

//   const handleCatch = (pokemon) => {
//     if (team.length >= 6) {
//         alert('You cannot catch more than 6 Pokemon!');
//     return;
//     }
//     if (team.find(p => p.id === pokemon.id)) {
//         alert('You have already caught this Pokemon!');
//     return;
//     }
//     setTeam([...team, pokemon]);
//   }

  const handleRelease = (pokemon) => {
    setTeam(team.filter(p => p.id !== pokemon.id));
    }  

  return (
    <div>
      <h1>My Team</h1>
      {team.length === 0 ? (
        <h2>You haven't caught any Pokemon yet!</h2>
      ) : (
        <div>
            <h2>List of Pokemon:</h2>
            {team.map(pokemon => (
                <div key={pokemon.id}>
                <PokemonPage pokemon={pokemon} />
                <button onClick={() => handleRelease(pokemon)}>Release</button>
        </div>
      ))}
        </div>
        )}
    </div>
)
}

export default PokemonTeamPage;