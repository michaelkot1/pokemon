import React, { useState, useEffect } from 'react';
import './RandomPokemon.css';

interface IPokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const getRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // generate a random ID between 1 and 898
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const pokemonData = await response.json();

  const pokemon: IPokemon = {
    id: pokemonData.id,
    name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
    imageUrl: pokemonData.sprites.front_default,

  };

  return pokemon;
};

const RandomPokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  const handleNewPokemonClick = async () => {
    const newPokemon = await getRandomPokemon();
    setPokemon(newPokemon);
  };

  useEffect(() => {
    async function fetchRandomPokemon() {
      const randomPokemon = await getRandomPokemon();
      setPokemon(randomPokemon);
    }

    fetchRandomPokemon();
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="random-pokemon-container">
      <h1>Random Pokemon:</h1>
      <img src={pokemon.imageUrl} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <button onClick={handleNewPokemonClick}>Generate new random Pokemon</button>
    </div>
  );
};

export default RandomPokemon;

