import { SectionFoodMenu } from "../components/SectionFoodMenu";
import { SectionMenuList } from "../components/SectionMenuList";
import { SectionNumbersMenu } from "../components/SectionNumbersMenu";
import { SectionOurMenu } from "../components/SectionOurMenu";

export const Menu = () => {
  return (
    <main>
      <SectionFoodMenu />
      <SectionNumbersMenu />
      <SectionOurMenu />
      <SectionMenuList breakfast={true} lunch={false} dinner={false} />
      <SectionMenuList lunch={true} breakfast={false} dinner={false} />
      <SectionMenuList dinner={true} breakfast={false} lunch={false} />
    </main>
  );
};
