import Image from 'next/image';
import { VFC } from 'react';

import PokemonTypesList from '@/components/pokemon-types-list';

import { formatPokemonName, getPokemonImg } from '@/utils/pokemons';

import { PokemonFragment } from '@/graphql-generated';

import { StyledP } from './PokemonCard.styles';

interface PokemonCardProps {
	pokemon: PokemonFragment;
}
const PokemonCard: VFC<PokemonCardProps> = ({ pokemon }) => (
	<>
		<Image
			src={getPokemonImg(pokemon.name)}
			alt={'Image of pokemon ' + pokemon.name}
			width={100}
			height={100}
		/>
		<StyledP>{formatPokemonName(pokemon.name)}</StyledP>
		<PokemonTypesList pokemon={pokemon} />
	</>
);

export default PokemonCard;
