import { SectionAbout } from "../components/SectionAbout";
import { SectionDelicious } from "../components/SectionDelicious";
import { SectionDiscover } from "../components/SectionDiscover";
import { SectionFood } from "../components/SectionFood";
import { SectionNumbers } from "../components/SectionNumbers";
import { SectionReview } from "../components/SectionReview";

export const Home = () => {
  return (
    <main>
      <SectionDelicious />
      <SectionAbout />
      <SectionFood />
      <SectionDiscover />
      <SectionNumbers />
      <SectionReview />
    </main>
  );
};
