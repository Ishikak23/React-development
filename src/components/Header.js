import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo-img" src={LOGO_URL} className="logo"></img>
      </div>
      <div className="nav-item-container">
        <ul className="nav-item">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
