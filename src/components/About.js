import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <h2>This is a food ordering app</h2>
      <h2>User : {loggedInUser}</h2>
    </div>
  );
};

export default About;
