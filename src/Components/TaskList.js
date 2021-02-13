import Task from './Task';
import '../styles/TaskList.css'

const TaskList = props => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if (done.length >= 2) done.sort((a, b) => b.finishDate - a.finishDate)

    // SORT BY DATE
    if (active.length >= 2) {
        active.sort((a, b) => {
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


    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <div>
            <div className="active">
                <h2> {activeTasks.length} tasks to do </h2>
                {activeTasks.length > 0 ? activeTasks : "brak zadań, ale z Ciebie KOX"}
            </div>
            <div className="done">
                <h3>Zadania zrobione <em>({doneTasks.length})</em></h3>
                {doneTasks.length > 3 && <span style={{ fontSize: 10 }}>Wyświetlone są jedynie 3 ostatnie elementy</span>}
                {/* {doneTasks.length > 0 ? doneTasks.slice(0,3) : "Mordo weź się do roboty!"} */}
                {doneTasks.slice(0, 3)}
            </div>

        </div>
    );
}

export default TaskList;