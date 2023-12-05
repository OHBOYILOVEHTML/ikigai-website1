import Format from "../layout/format";

import SecondHero from "../components/SecondHero";
import ThirdHero from "../components/ThirdHero";
import InitialHero from "../components/InitialHero";
import MainComponent from "../components/MainComp";
import SubjectContent from "../components/SubjectsPage.js";

export default function Home() {
  return (
    <Format>
      <SubjectContent />
    </Format>
  );
}
