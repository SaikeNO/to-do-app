import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const BottomPanel = () => {
    // const taskClassName = isActive.tasks ? 'tasks active' : 'tasks'
    // const addTaskClassName = isActive.add ? 'add-task active' : 'add-task'
    // const doneTasksClassName = isActive.done ? 'done-tasks active' : 'done-tasks'

    return (
        <nav className="bottom-panel ">
            <NavLink className='tasks' to={'/tasks'}>
                <span></span><span></span><span></span><span></span>
            </NavLink>
            <NavLink className='add-task' to={'/add'}>
                <span></span><span></span>
            </NavLink>
            <NavLink className='done-tasks' to={'/done'}>
            </NavLink >
        </nav>
    );
}

export default BottomPanel;