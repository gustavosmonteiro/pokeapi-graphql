import type { NextPage } from 'next';
import Head from 'next/head';

import PokemonList from '@/components/pokemon-list';

import { usePokemonListQuery } from '@/graphql-generated';

import { StyledH1 } from '@/styles/pages';

const Home: NextPage = () => {
	const { data, loading, error, fetchMore } = usePokemonListQuery({
		variables: { limit: 20 },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<>
			<Head>
				<title>Learning Graphql with PokeAPI</title>
				<meta
					name="description"
					content="Learning Graphql with PokeAPI"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<StyledH1>Pokemons</StyledH1>
				{data?.pokemons && <PokemonList pokemons={data?.pokemons} />}

				<button
					onClick={() =>
						fetchMore({
							variables: {
								offset: data?.pokemons.length,
							},
						})
					}
				>
					Load More
				</button>
			</main>
		</>
	);
};

export default Home;
