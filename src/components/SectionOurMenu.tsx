export const SectionOurMenu = () => {
  return (
    <section className="ourMenuContainerBg">
      <div className="ourMenuContainer">
        <div className="ourMenuTitle">
          <h1>OUR MENU</h1>
        </div>

        <div className="ourMenuText">
          <h3>All Special Items Choose Our Chefs</h3>
          <h4>
            Fusce sed urna lobortis, ultrices nulla ac, euismod odio. Nunc ac
            lectus ullamcorper ultrices felis quis condimentum nunc. Duis
            tristique justo sit amet aliquet porttitor turpis tellus auctor
            tortor vel dignissim nibh dolor sit amet ante.
          </h4>
        </div>

        <div className="ourMenuImgsContainer">
          <div className="ourMenuImgs">
            <img src="./images/rolls.jpg" alt="Imagem de comida." />
            <span>flat 20% off</span>
            <p>Starter items</p>
          </div>
          <div className="ourMenuImgs">
            <img src="./images/fish.jpg" alt="Imagem de um peixe assado." />
            <span>7 combo included</span>
            <p>main courses</p>
          </div>
          <div className="ourMenuImgs">
            <img src="./images/hamburguer.jpg" alt="Imagem de um hamburguer." />
            <span>23 items</span>
            <p>desserts</p>
          </div>
          <div className="ourMenuImgs">
            <img src="./images/drinks.jpg" alt="Imagem de drinks." />
            <span>Free</span>
            <p>Drinks</p>
          </div>
        </div>
      </div>
    </section>
  );
};
