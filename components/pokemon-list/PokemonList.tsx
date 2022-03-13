import { VFC } from 'react';

import PokemonCard from '@/components/pokemon-card';

import { PokemonFragment } from '@/graphql-generated';

import { StyledLi, StyledUl } from './PokemonList.styles';

interface PokemonListProps {
	pokemons: PokemonFragment[];
}

const PokemonList: VFC<PokemonListProps> = ({ pokemons }) => {
	return (
		<StyledUl>
			{pokemons.map((pokemon: PokemonFragment) => (
				<StyledLi key={pokemon.id}>
					<PokemonCard pokemon={pokemon} />
				</StyledLi>
			))}
		</StyledUl>
	);
};

export default PokemonList;
