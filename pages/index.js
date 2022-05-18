import Head from "next/head"
import FirstSection from "../components/Header/FirstSection"
import MenuComponent from "../components/Header/MenuComponent"
import PigSection from "../components/PigSection"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header>
        <MenuComponent />
        <FirstSection />
      </header>
      <PigSection />
    </>
  )
}
