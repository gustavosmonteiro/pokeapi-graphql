import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

import PokemonList from '@/components/pokemon-list';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

import { usePokemonListQuery } from '@/graphql-generated';

import { StyledH1 } from '@/styles/pages';

const Home: NextPage = () => {
	const { data, loading, error, fetchMore } = usePokemonListQuery({
		variables: { limit: 20 },
	});

	const [ref, setRef] = useState<Element | null>(null);
	const entry = useIntersectionObserver(ref as Element, {});
	const isVisible = !!entry?.isIntersecting;

	const getRef = useCallback((node) => {
		if (node !== null) {
			setRef(node);
		}
	}, []);

	useEffect(() => {
		if (isVisible) {
			fetchMore({
				variables: {
					offset: data?.pokemons.length,
				},
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<>
			<Head>
				<title>GraphQL PokeAPI</title>
				<meta name="description" content="GraphQL PokeAPI" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<StyledH1>Pokemons</StyledH1>
				{data?.pokemons && <PokemonList pokemons={data?.pokemons} />}
				<span ref={getRef} />
			</main>
		</>
	);
};

export default Home;
