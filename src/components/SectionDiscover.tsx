import { Button } from "./Button";

export const SectionDiscover = () => {
  return (
    <section className="discoverCafeteriaBg">
      <div className="discoverCafeteriaContainer">
        <div className="discoverCafeteriaService">
          <h4>Discover More</h4>
          <h1>High Professional Service</h1>
          <p>
            Morbi pharetr se id lectus iaculis, nec commodo mauris interdum.
            Quisque ipsum neque, ullamcorper in diam nec.
          </p>
          <ul>
            <li> All the lorem ipsum generators on the Internet</li>
            <li> When an unknown printer took a galley</li>
            <li> Various versions have evolved years</li>
          </ul>
          <Button text={"Discover more"} />
        </div>
        <div className="discoverEmptyContainer"></div>
        <div className="discoverCafeteriaImg"></div>
      </div>
    </section>
  );
};
