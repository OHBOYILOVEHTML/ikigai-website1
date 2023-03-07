import Format from "../layout/format";

import SecondHero from "../components/SecondHero";
import ThirdHero from "../components/ThirdHero";
import InitialHero from "../components/InitialHero";

export default function Home() {
  return (
    <Format>
      <InitialHero/ >
      <SecondHero/ >
      <ThirdHero/ >
    </Format>
  );
}
