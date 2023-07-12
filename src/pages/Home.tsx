import { Header } from "../components/Header";
import { SectionAbout } from "../components/SectionAbout";
import { SectionDelicious } from "../components/SectionDelicious";
import { SectionDiscover } from "../components/SectionDiscover";
import { SectionFood } from "../components/SectionFood";
import { SectionNumbers } from "../components/SectionNumbers";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SectionDelicious />
        <SectionAbout />
        <SectionFood />
        <SectionDiscover />
        <SectionNumbers />
      </main>
    </>
  );
};
