interface SectionMenuBgProps {
  text: string;
}

export const SectionContactBg = ({ text }: SectionMenuBgProps) => {
  return (
    <section className="contactBgContainer">
      <h1>{text}</h1>
    </section>
  );
};
