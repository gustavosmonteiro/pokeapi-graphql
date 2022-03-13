import { VFC } from 'react';

import { capitalizeFirstLetter } from '@/utils/strings';

import { PokemonFragment, PokemonTypesFragment } from '@/graphql-generated';

import { StyledLi, StyledUl } from './PokemonTypesList.styles';

interface PokemonTypesListProps {
	pokemon: PokemonFragment;
}

const PokemonTypesList: VFC<PokemonTypesListProps> = ({ pokemon }) => {
	return (
		<StyledUl>
			{pokemon.types.map((type: PokemonTypesFragment, index) => (
				<StyledLi
					key={`${pokemon.name}_type_${index}`}
					type={type.type?.name || ''}
				>
					{capitalizeFirstLetter(type.type?.name || '')}
				</StyledLi>
			))}
		</StyledUl>
	);
};

export default PokemonTypesList;
