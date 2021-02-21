import React from 'react';
import Task from '../Components/Task'

const DoneTasks = (props) => {

    const { doneTasks } = props

    const done = doneTasks.map(task => <Task key={task.id} task={task} delete={props.delete} />)

    return (
        <div className="done-tasks">
            <p className="priority__title">
                Done
                <span className='line line--red'></span>
            </p>
            <span className="priority__counter">{done.length} tasks done</span>
            <div className="active-tasks__container">
                {done.length > 0 ? done : <p>0 priority tasks. Add a few</p>}
            </div>
        </div>
    );
}

export default DoneTasks;