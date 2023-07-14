interface SectionMenuBgProps {
  img: string;
}

export const SectionMenuBg = ({ img }: SectionMenuBgProps) => {
  return (
    <section
      className="menuBgContainer"
      style={{ backgroundImage: `url(${img})` }}
    ></section>
  );
};
