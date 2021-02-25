import React from "react";

import "./Header.css";
const Header = ({ calendar, totalActiveTasks }) => {
  return (
    <header>
      <h1>Good morning Mateusz</h1>
      <div>
        <img src={calendar} alt="calendar" />
        <h2> {totalActiveTasks.length} tasks to do </h2>
      </div>
    </header>
  );
};

export default Header;
