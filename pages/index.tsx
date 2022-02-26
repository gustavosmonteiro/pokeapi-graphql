import { gql } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import client from "../apolloClient";

// TODO: Add type definitions
const Home: NextPage<{ pokemons: any[] }> = ({ pokemons }) => {
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
          {pokemons.map((pokemon: any) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Pokemons {
        pokemon_v2_pokemon {
          id
          name
        }
      }
    `,
  });
  return {
    props: {
      pokemons: data.pokemon_v2_pokemon,
    },
  };
}

export default Home;
