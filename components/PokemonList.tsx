import Image from 'next/image';
import { VFC } from 'react';

import { formatPokemonName, getPokemonImg } from '@/utils/pokemons';

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
					<Image
						src={getPokemonImg(pokemon.name)}
						alt={pokemon.name}
						width={100}
						height={100}
					/>
					{formatPokemonName(pokemon.name)}
				</StyledLi>
			))}
		</StyledUl>
	);
};

export default PokemonList;
