import { Pokemon } from "../interfaces/pokemon-full"
export const getPokemonsInfo = async (nameOrId: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
  const data: Pokemon = await res.json()

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }
}
