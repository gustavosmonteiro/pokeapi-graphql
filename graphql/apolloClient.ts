import { ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

import { TypedTypePolicies } from '@/graphql-generated';

const GRAPHQL_ENDPOINT = 'https://beta.pokeapi.co/graphql/v1beta';

const typePolicies: TypedTypePolicies = {
	Query: {
		fields: {
			pokemon_v2_pokemon: offsetLimitPagination(),
		},
	},
};

const client = new ApolloClient({
	uri: GRAPHQL_ENDPOINT,
	cache: new InMemoryCache({
		typePolicies,
	}),
});

export default client;
