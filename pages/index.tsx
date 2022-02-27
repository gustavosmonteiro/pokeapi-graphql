import Head from "next/head";
import type { NextPage } from "next";
import { usePokemonsQuery } from "../graphql-generated";

const Home: NextPage = () => {
  const { data: pokemons, loading, error } = usePokemonsQuery();

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
          {pokemons?.pokemon_v2_pokemon.map((pokemon: any) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
