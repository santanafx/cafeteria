import { Header } from "../components/Header";
import { SectionAbout } from "../components/SectionAbout";
import { SectionDelicious } from "../components/SectionDelicious";
import { SectionFood } from "../components/SectionFood";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SectionDelicious />
        <SectionAbout />
        <SectionFood />
      </main>
    </>
  );
};
