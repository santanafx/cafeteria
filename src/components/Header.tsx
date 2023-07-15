import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/GlobalContext";
import React from "react";
import { Cart } from "./Cart";

export const Header = () => {
  const { cartQuantity } = useShoppingCart();
  const [openCart, setOpenCart] = React.useState<boolean>(false);

  const handleOpenCart = (openCart: boolean) => {
    setOpenCart(!openCart);
  };

  return (
    <header className="headerContainer">
      <nav>
        <div className="headerLogoContainer">
          <img src="./images/logo.jpg" alt="Logo da cafeteria." />
        </div>
        <div className="headerMenuOpt">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
        </div>
        <div className="headerViewCart">
          <button onClick={() => handleOpenCart(openCart)}>View Cart</button>
          <span>{cartQuantity}</span>
        </div>
      </nav>
      {openCart !== false ? (
        <>
          <div className="headerCartOpen">
            <Cart handleOpenCart={handleOpenCart} openCart={openCart} />
          </div>
          <div className="headerCartBg"></div>
        </>
      ) : (
        ""
      )}
    </header>
  );
};
