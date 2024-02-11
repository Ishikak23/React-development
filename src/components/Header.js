import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnlineStatus();
  const [loginText, setLoginText] = useState("Login");
  const data = useContext(UserContext);
  const { items } = useSelector((store) => store.cart);
  const handleLoginclick = () => {
    setLoginText(loginText === "Login" ? "Logout" : "Login");
  };
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
            <Link to="/contact">Conatct us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({items.length})</Link>
          </li>
          <li>
            <button className="px-4 w-[82px]" onClick={handleLoginclick}>
              {loginText}
            </button>
          </li>
          <li className="px-4">User : {data?.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
