import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

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
  const [quantidade, setQuantidade] = React.useState<boolean>(false);

  return (
    <div className="comidaContainer">
      <img src={imgLink} alt="Foto de comidas." />
      <div>
        <h3>{nomeComida}</h3>
        <span>{descricaoComida}</span>
      </div>
      <p>${preco}</p>
      {quantidade !== false ? (
        <div className="comidaButtonsContainer">
          <button
            className="comidaButtonAddRemove"
            onClick={() => setQuantidade(false)}
          >
            Remove
          </button>
          <div className="comidaButtonPlusMinusContainer">
            <button className="comidaButtonPlusMinus">
              <AiFillPlusCircle size="25" />
            </button>
            <span>0</span>
            <button className="comidaButtonPlusMinus">
              <AiFillMinusCircle size="25" />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="comidaButtonAddRemove"
          onClick={() => setQuantidade(true)}
        >
          + Add to Cart
        </button>
      )}
    </div>
  );
};
