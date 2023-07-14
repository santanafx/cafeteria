interface ComidaProps {
  imgLink: string;
  nomeComida: string;
  descricaoComida: string;
  preco: number;
}

export const Comida = ({
  imgLink,
  nomeComida,
  descricaoComida,
  preco,
}: ComidaProps) => {
  return (
    <div className="comidaContainer">
      <img src={imgLink} alt="Foto de comidas." />
      <div>
        <h3>{nomeComida}</h3>
        <span>{descricaoComida}</span>
      </div>
      <p>${preco}</p>
    </div>
  );
};
