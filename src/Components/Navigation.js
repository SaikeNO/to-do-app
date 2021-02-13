import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const BottomPanel = ({ isActive }) => {
    const taskClassName = isActive.tasks ? 'tasks active' : 'tasks'
    const addTaskClassName = isActive.add ? 'add-task active' : 'add-task'
    const doneTasksClassName = isActive.done ? 'done-tasks active' : 'done-tasks'
    return (
        <div className="bottom-panel ">
            <NavLink className={taskClassName} to={'/tasks'}>
                <span></span><span></span><span></span><span></span>
            </NavLink>
            <NavLink className={addTaskClassName} to={'/add'}>
                <span></span><span></span>
            </NavLink>
            <NavLink className={doneTasksClassName} to={'/done'}>
            </NavLink >
        </div>
    );
}

export default BottomPanel;