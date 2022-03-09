import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"

type Props = {}

const Navbar = (props: Props) => {
  const { theme } = useTheme()
  return (
    <nav
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        padding: "0 30px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <NextLink href="/">
        <a
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png"
            alt="Greninja Image"
            width={70}
            height={70}
          />

          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </a>
      </NextLink>
      <Spacer
        css={{
          flex: 1,
        }}
      />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </nav>
  )
}

export { Navbar }
