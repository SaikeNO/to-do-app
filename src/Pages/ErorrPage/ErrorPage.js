import { NavLink } from "react-router-dom";

import "./ErrorPage.css";

import error from "../../img/error.svg";
const ErrorPage = () => {
  return (
    <div className="error">
      <img src={error} alt="page not found" />
      <p>Something went wrong. Page not found.</p>
      <NavLink to={"/"}>
        <button>Back to home page</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
