import React from 'react';

import '../styles/Header.css'
const Header = ({ calendar, tasks }) => {
    const activeTasks = tasks.filter(task => task.active);
    return (
        <header>
            <h1>Good morning Mateusz</h1>
            <div>
                <img src={calendar} alt="calendar" />
                <h2> {activeTasks.length} tasks to do </h2>
            </div>
        </header>
    );
}

export default Header;