import { capitalizeFirstLetter, formatGender } from './strings';

export const getPokemonImg = (pokemonName: string) => {
	// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
	return `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`;
};

export const formatPokemonName = (pokemonName: string) => {
	return capitalizeFirstLetter(formatGender(pokemonName));
};
