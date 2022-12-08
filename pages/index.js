import Format from "../layout/format";

//components
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import SecondHero from "../components/SecondHero";
import ThirdHero from "../components/ThirdHero";
import InitialHero from "../components/InitialHero";

export default function Home() {
  return (
    <Format>
      <Hero></Hero>
      <Hero2></Hero2>
    </Format>
  );
}
