import { NavLink } from "react-router-dom";
import "./Navigation.css";

const BottomPanel = () => {
  return (
    <nav className="navigation ">
      <NavLink className="tasks" to={"/tasks"}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </NavLink>
      <NavLink className="add-task" to={"/add"}>
        <span></span>
        <span></span>
      </NavLink>
      <NavLink className="done-tasks" to={"/done"}></NavLink>
    </nav>
  );
};

export default BottomPanel;
