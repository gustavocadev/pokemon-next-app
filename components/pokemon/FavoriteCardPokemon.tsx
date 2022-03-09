import React from "react"
import { Grid, Card, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { Pokemon } from "../../interfaces/pokemon-full"

type Props = {
  pokemon: Pokemon
}

const FavoriteCardPokemon = ({ pokemon }: Props) => {
  const router = useRouter()

  const handleLinkToPokemon = () => {
    router.push(`/name/${pokemon.name}`)
  }
  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={() => handleLinkToPokemon()}>
        <Card.Body
          css={{
            p: 1,
          }}
        >
          <Card.Image
            src={pokemon.sprites.other?.dream_world.front_default ?? ""}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default FavoriteCardPokemon
