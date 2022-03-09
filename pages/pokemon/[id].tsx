import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../components/layouts/Layout"
import { Pokemon } from "../../interfaces"
import confetti from "canvas-confetti"
import { getPokemonsInfo } from "../../utils/getPokemonInfo"
type Props = Pokemon

const PokemonPage: NextPage<Props> = (pokemon) => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<any[]>([])

  // save to local storage
  const handleSaveLocalStorage = () => {
    setFavoritesPokemons([...favoritesPokemons, pokemon])
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 170,
      angle: -100,
      origin: {
        x: 1,
        y: 0.2,
      },
    })
  }

  // remove pokemon from favorites
  const handleRemoveLocalStorage = () => {
    const newFavorites = favoritesPokemons.filter(
      (poke) => poke.id !== pokemon.id
    )
    setFavoritesPokemons(newFavorites)
  }

  // get all the pokemons from localStorage
  useEffect(() => {
    const pokemons = JSON.parse(localStorage.getItem("pokemons") ?? "[]")
    setFavoritesPokemons(pokemons)
  }, [])

  // save the pokemon in localStorage
  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(favoritesPokemons))
  }, [favoritesPokemons])

  return (
    <Layout title={pokemon.name}>
      <Grid.Container
        css={{
          marginTop: "5px",
        }}
        gap={2}
      >
        <Grid xs={12} sm={4}>
          <Card
            hoverable
            css={{
              padding: "30px",
            }}
          >
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default ?? ""}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>

              {favoritesPokemons.find((poke) => poke.id === pokemon.id) ? (
                <Button
                  color="gradient"
                  ghost
                  onClick={handleRemoveLocalStorage}
                >
                  Quitar de favoritos
                </Button>
              ) : (
                <Button color="gradient" ghost onClick={handleSaveLocalStorage}>
                  Agregar a favoritos
                </Button>
              )}
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default ?? ""}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default ?? ""}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny ?? ""}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny ?? ""}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((_, idx) => (idx + 1).toString())
  return {
    paths: pokemon151.map((id) => ({ params: { id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as {
    id: string
  }
  const pokemon = await getPokemonsInfo(id)

  return {
    props: {
      ...pokemon,
    },
  }
}

export default PokemonPage
