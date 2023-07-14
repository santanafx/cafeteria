import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="headerContainer">
      <nav>
        <div className="headerLogoContainer">
          <img src="./images/logo.jpg" alt="Logo da cafeteria." />
        </div>
        <div className="headerMenuOpt">
          <Link to="/">Home</Link>
          <Link to="/">About us</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/">Our Chef</Link>
          <Link to="/">Reservation</Link>
          <Link to="/">Contact us</Link>
        </div>
        <div className="headerReservation">
          <Link to="/">Cart</Link>
        </div>
      </nav>
    </header>
  );
};
