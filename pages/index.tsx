import Head from "next/head";
import type { NextPage } from "next";
import { usePokemonsQuery } from "../graphql-generated";
import Image from "next/image";

const Home: NextPage = () => {
  const { data, loading, error } = usePokemonsQuery({
    variables: { limit: 151 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Head>
        <title>Learning Graphql with PokeAPI</title>
        <meta name="description" content="Learning Graphql with PokeAPI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Pokemons</h1>
        <ul>
          {data?.pokemons.map((pokemon: any) => (
            <li key={pokemon.id}>
              <Image
                // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              {pokemon.name}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
