import { useShoppingCart } from "../context/GlobalContext";
import { comidasListaObj } from "../data/ComidasLista";
import { CartItem } from "./CartItem";

interface CartProps {
  openCart: boolean;
  handleOpenCart: (openCart: boolean) => void;
}

export const Cart = ({ openCart, handleOpenCart }: CartProps) => {
  const { cartItems } = useShoppingCart();
  return (
    <div className="cartContainer">
      <button onClick={() => handleOpenCart(openCart)}>X</button>
      <div>
        {cartItems.map((item) => (
          <CartItem key={JSON.stringify(item)} {...item} />
        ))}
        <div className="cartPrecoTotal">
          <span>
            Total: $
            {cartItems.reduce((total, cartItem) => {
              const item = comidasListaObj.find((i) => i.id === cartItem.id);
              return total + (item?.preco || 0) * cartItem.quantity;
            }, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};
