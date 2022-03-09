import Layout from "../../components/layouts/Layout"
import { useEffect, useState } from "react"
import PokemonCard from "../../components/pokemon/PokemonCard"
import { Grid, Card, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import NoFavorites from "../../components/ui/NoFavorites"
import FavoritePokemons from "../../components/pokemon/FavoritePokemons"

type Props = {}

const Index = (props: Props) => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<any[]>([])
  // console.log(query)

  useEffect(() => {
    const pokemons = JSON.parse(localStorage.getItem("pokemons") ?? "[]")
    setFavoritesPokemons(pokemons)
  }, [])

  return (
    <Layout title="Favorites Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {favoritesPokemons.length === 0 ? (
          <NoFavorites />
        ) : (
          <FavoritePokemons favoritesPokemons={favoritesPokemons} />
        )}
      </Grid.Container>
    </Layout>
  )
}

export default Index
