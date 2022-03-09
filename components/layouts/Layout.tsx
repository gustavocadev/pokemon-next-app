import { ReactNode, useState, useEffect } from "react"
import Head from "next/head"
import { Navbar } from "../ui"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => {
  const [location, setLocation] = useState("")
  useEffect(() => {
    setLocation(window.location.origin)
  }, [])

  console.log(location)
  return (
    <>
      <Head>
        <title>{title ?? "Pokemon App"}</title>
        <meta name="author" content="Gustavo" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${location}/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
