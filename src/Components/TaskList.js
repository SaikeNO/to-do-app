import Task from './Task';
import '../styles/TaskList.css'

const TaskList = props => {
    const tasks = props.tasks.filter(task => task.active);
    const priorityTasks = tasks.filter(task => task.important)
    const notPriorityTasks = tasks.filter(task => !task.important);

    // if (done.length >= 2) done.sort((a, b) => b.finishDate - a.finishDate)

    // SORT BY DATE
    if (tasks.length >= 2) {
        tasks.sort((a, b) => {
            a = a.date
            b = b.date

            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        })
    }

    // SORT BY FIRST LETTER
    // if(active.length >= 2) {
    //     active.sort((a,b) => {
    //         a = a.text.toLowerCase()
    //         b = b.text.toLowerCase()

    //         if(a < b) return -1;
    //         if(a > b) return 1;
    //         return 0

    //     })
    // }

    const activePriorityTasks = priorityTasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const activeNotPriorityTasks = notPriorityTasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    // const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <div>
            <div className="active-tasks">
                <div className="priotity">
                    <p className="priority__title">
                        Priority
                        <span className='line line--red'></span>
                    </p>
                    <span className="priority__counter">{activePriorityTasks.length} tasks</span>
                    <div className="active-tasks__container">
                        {activePriorityTasks.length > 0 ? activePriorityTasks : <p>0 priority tasks. Add a few</p>}
                    </div>
                </div>
                <div className="not-priority">
                    <p className="not-priority__title">
                        In progress
                        <span className='line line--blue'></span>
                    </p>
                    <div className="active-tasks__container">
                        {activeNotPriorityTasks.length > 0 ? activeNotPriorityTasks : <p>Add few tasks</p>}
                    </div>
                </div>

            </div>
            {/* <div className="done">
                <h3>Zadania zrobione <em>({doneTasks.length})</em></h3>
                {doneTasks.length > 3 && <span style={{ fontSize: 10 }}>Wyświetlone są jedynie 3 ostatnie elementy</span>}
                {/* {doneTasks.length > 0 ? doneTasks.slice(0,3) : "Mordo weź się do roboty!"} }
                {doneTasks.slice(0, 3)}
            </div> */}

        </div>
    );
}

export default TaskList;