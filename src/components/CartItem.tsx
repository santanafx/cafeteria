import { useShoppingCart } from "../context/GlobalContext";
import { comidasListaObj } from "../data/ComidasLista";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = comidasListaObj.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="cartItemContainer">
      <img src={item.imgLink} alt="" />
      <h1>{item.nomeComida}</h1>
      <p>x{quantity}</p>
      <span>${item.preco}</span>
      <button
        className="cartItemButton"
        onClick={() => removeFromCart(item.id)}
      >
        X
      </button>
    </div>
  );
};
