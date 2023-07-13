import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="footerBg">
      <div className="footerCafeteriaContainer">
        <div className="footerLogo">
          <img src="./images/logo.jpg" alt="" />
          <p>
            Nunc ac lectus ullamcorper ultrices felis quis condimentum nunc.
          </p>
          <div>
            <AiFillFacebook size="40" />
            <AiFillTwitterSquare size="40" />
            <AiFillInstagram size="40" />
            <AiOutlineWhatsApp size="40" />
          </div>
        </div>
        <div className="footerImportant">
          <div>
            <h1>Important</h1>
          </div>
          <div className="footerImportantLinksContainer">
            <div>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Menu</a>
            </div>
            <div>
              <a href="">Gallery</a>
              <a href="">FAQ</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
        <div className="footerContact">
          <div>
            <h1>Contact us</h1>
          </div>
          <div className="footerContactContainer">
            <p>info&example.com</p>
            <p>(888) 1234-5678</p>
            <p>121 king st. mcg VIC 3000, Australia</p>
          </div>
        </div>
      </div>
      <div className="footerCopyRight">
        <span>Lucas Santana Figueiredo © All Rights Reserved</span>
      </div>
    </footer>
  );
};
