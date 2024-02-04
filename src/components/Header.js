import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg">
      <div className="flex items-center">
        <img alt="logo-img" src={LOGO_URL} className="w-24"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-8">
          <li className="px-4">Online: {isOnline ? "✅" : "🔴"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Conatct us</Link>
          </li>
          <li className="px-4">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
