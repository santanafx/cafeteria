import { Comida } from "./Comida";

interface ComidaObj {
  imgLink: string;
  nomeComida: string;
  descricaoComida: string;
  preco: number;
}

export const SectionMenuListBreakfast = () => {
  const comidas: ComidaObj[] = [
    {
      imgLink: "./images/breakfast-food-1.webp",
      nomeComida: "Yummy Pasta & Noddles",
      descricaoComida: "Short description about the menu item goes here...",
      preco: 5.99,
    },
    {
      imgLink: "./images/breakfast-food-2.webp",
      nomeComida: "Yummy Pasta & Noddles",
      descricaoComida: "Short description about the menu item goes here...",
      preco: 10.99,
    },
    {
      imgLink: "./images/breakfast-food-3.webp",
      nomeComida: "Yummy Pasta & Noddles",
      descricaoComida: "Short description about the menu item goes here...",
      preco: 8.99,
    },
    {
      imgLink: "./images/breakfast-food-4.webp",
      nomeComida: "Yummy Pasta & Noddles",
      descricaoComida: "Short description about the menu item goes here...",
      preco: 10.99,
    },
    {
      imgLink: "./images/breakfast-food-5.webp",
      nomeComida: "Yummy Pasta & Noddles",
      descricaoComida: "Short description about the menu item goes here...",
      preco: 7.0,
    },
    {
      imgLink: "./images/breakfast-food-6.webp",
      nomeComida: "Yummy Pasta & Noddles",
      descricaoComida: "Short description about the menu item goes here...",
      preco: 10.99,
    },
    {
      imgLink: "./images/breakfast-food-7.webp",
      nomeComida: "Yummy Pasta & Noddles",
      descricaoComida: "Short description about the menu item goes here...",
      preco: 6.99,
    },
    {
      imgLink: "./images/breakfast-food-8.webp",
      nomeComida: "Yummy Pasta & Noddles",
      descricaoComida: "Short description about the menu item goes here...",
      preco: 2.99,
    },
  ];

  return (
    <section className="menuListBreakfastContainerBg">
      <div className="menuListBreakfastContainer">
        <h4>Menu List</h4>
        <h1>BREAKFAST</h1>
        <div className="menuListBreakfast">
          {comidas.map((element) => (
            <Comida
              imgLink={element.imgLink}
              nomeComida={element.nomeComida}
              descricaoComida={element.descricaoComida}
              preco={element.preco}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
