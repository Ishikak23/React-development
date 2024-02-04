import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo-img" src={LOGO_URL} className="logo"></img>
      </div>
      <div className="nav-item-container">
        <h3>Online: {isOnline ? "✅" : "🔴"} </h3>
        <ul className="nav-item">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="contact">Conatct us</Link>
          </li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
