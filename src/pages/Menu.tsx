import { SectionFoodMenu } from "../components/SectionFoodMenu";
import { SectionMenuBg } from "../components/SectionMenuBg";
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
      <SectionMenuBg img="./images/bg-menu-1.jpg" />
      <SectionMenuList lunch={true} breakfast={false} dinner={false} />
      <SectionMenuBg img="./images/bg-menu-2.webp" />
      <SectionMenuList dinner={true} breakfast={false} lunch={false} />
      <SectionMenuBg img="./images/bg-menu-3.webp" />
    </main>
  );
};
