import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useShoppingCart } from "../context/GlobalContext";

interface ComidaProps {
    id: number;
    imgLink: string;
    nomeComida: string;
    descricaoComida: string;
    preco: number;
}

export const Comida = ({
    id,
    imgLink,
    nomeComida,
    descricaoComida,
    preco,
}: ComidaProps) => {
    const [quantidade, setQuantidade] = React.useState<boolean>(false);
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();
    const quantity: number = getItemQuantity(id);

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
                        onClick={() => {
                            setQuantidade(false);
                            removeFromCart(id);
                        }}
                    >
                        Remove
                    </button>
                    <div className="comidaButtonPlusMinusContainer">
                        <button
                            className="comidaButtonPlusMinus"
                            onClick={() => decreaseCartQuantity(id)}
                        >
                            <AiFillMinusCircle size="25" />
                        </button>
                        <span>{quantity}</span>
                        <button
                            className="comidaButtonPlusMinus"
                            onClick={() => increaseCartQuantity(id)}
                        >
                            <AiFillPlusCircle size="25" />
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
