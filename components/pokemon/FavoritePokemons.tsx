import React from "react"
import { Grid, Card, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import FavoriteCardPokemon from "./FavoriteCardPokemon"
import { Pokemon } from "../../interfaces/pokemon-full"

type Props = {
  favoritesPokemons: Pokemon[]
}

const FavoritePokemons = ({ favoritesPokemons }: Props) => {
  return (
    <>
      {favoritesPokemons.map((pokemon) => (
        <FavoriteCardPokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  )
}

export default FavoritePokemons
