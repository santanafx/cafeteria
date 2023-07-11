import { Button } from "./Button";

export const SectionAbout = () => {
  return (
    <section className="aboutCafeteriaBg">
      <div className="aboutCafeteriaContainer">
        <div>
          <img src="./images/food-1.jpg" alt="" />
        </div>
        <div>
          <h4>Our Introduction</h4>
          <h1>About Cafeteria</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <span>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures.
          </span>
          <Button text={"Discover more"} />
        </div>
      </div>
    </section>
  );
};
