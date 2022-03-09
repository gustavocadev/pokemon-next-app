import { PokemonListResponse } from "../interfaces/pokemon-list"
import { Pokemon } from "../interfaces/pokemon-full"

const getAllPokemons = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  const data: PokemonListResponse = await res.json()

  const pokemons = data.results.map((pokemon, idx) => {
    return {
      ...pokemon,
      id: idx + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        idx + 1
      }.svg`,
    }
  })

  return pokemons
}

export { getAllPokemons }
