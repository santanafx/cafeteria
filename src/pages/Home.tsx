import { Header } from "../components/Header";
import { SectionAbout } from "../components/SectionAbout";
import { SectionDelicious } from "../components/SectionDelicious";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SectionDelicious />
        <SectionAbout />
      </main>
    </>
  );
};
