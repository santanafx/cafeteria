import { SectionFoodMenu } from "../components/SectionFoodMenu";
import { SectionNumbersMenu } from "../components/SectionNumbersMenu";
import { SectionOurMenu } from "../components/SectionOurMenu";

export const Menu = () => {
  return (
    <main>
      <SectionFoodMenu />
      <SectionNumbersMenu />
      <SectionOurMenu />
    </main>
  );
};
