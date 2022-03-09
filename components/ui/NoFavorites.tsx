import { Container, Image, Text } from "@nextui-org/react"
import React from "react"

type Props = {}

const NoFavorites = (props: Props) => {
  return (
    <Container
      css={{
        display: "grid",
        placeItems: "center",
        height: "100%",
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image src="" alt="No hay favoritos" />
    </Container>
  )
}

export default NoFavorites
