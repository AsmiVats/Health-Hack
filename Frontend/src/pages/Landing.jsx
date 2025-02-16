import Hero from "../components/Hero"
import Feature from "../components/Features"
import Stats from "../components/Stats"
import AllDoctors from "./AllDoctors"
// import Cta from "../components/Cta"
import Chatbot from "hhsdk-consultant";

const Landing = () => {
  return (
    <>
    <Hero />
    <Feature />
    <Stats />
    <AllDoctors />
    <Chatbot/>
    </>
  )
}

export default Landing