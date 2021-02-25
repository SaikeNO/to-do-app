import { NavLink } from "react-router-dom";

import "./Welcome.css";
import to_do from "../../img/to_do.svg";

const Welcome = () => {
  return (
    <div className="welcome-panel">
      <img src={to_do} alt="girl with to do list" />
      <NavLink to={"/tasks"}>
        <button> Let's start</button>
      </NavLink>
      <p>Simple TO DO APP | &copy; Mateusz Lengiewicz </p>
    </div>
  );
};

export default Welcome;
