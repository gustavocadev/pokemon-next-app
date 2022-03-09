import { Grid, Image } from "@nextui-org/react"
import type { GetStaticProps, NextPage } from "next"
import Layout from "../components/layouts/Layout"
import PokemonCard from "../components/pokemon/PokemonCard"
import { getAllPokemons } from "../helpers/getAllPokemons"
import { PokemonListResponse, SmallPokemon } from "../interfaces"

type Props = {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="center">
        {pokemons.map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const pokemons = await getAllPokemons()

  return {
    props: {
      pokemons,
    },
  }
}

export default HomePage
