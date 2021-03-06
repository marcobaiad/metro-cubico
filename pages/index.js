import Head from "next/head"
import BannerSection from "../components/BannerSection"
import Footer from "../components/Footer"
import FormSection from "../components/FormSection"
import FirstSection from "../components/Header/FirstSection"
import MenuComponent from "../components/Header/MenuComponent"
import OurProjects from "../components/OurProjects"
import PigSection from "../components/PigSection"
import ProposalSection from "../components/ProposalSection"
import StepsSection from "../components/StepsSection"

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
        }}
      >
        <Head>
          <title>Home</title>
        </Head>
        <header>
          <MenuComponent />
          <FirstSection />
        </header>
        <PigSection />
        <ProposalSection />
        <StepsSection />
        <BannerSection />
        <OurProjects />
        <FormSection />
        <Footer />
      </div>
    </div>
  )
}
