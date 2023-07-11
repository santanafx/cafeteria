export const Header = () => {
  return (
    <header className="headerContainer">
      <nav>
        <div className="headerLogoContainer">
          <img src="./images/logo.jpg" alt="Logo da cafeteria." />
        </div>
        <div className="headerMenuOpt">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Menu</a>
          <a href="">Our Chef</a>
          <a href="">Reservation</a>
          <a href="">Contact us</a>
        </div>
        <div className="headerReservation">
          <a href="">Reservation</a>
        </div>
      </nav>
    </header>
  );
};
