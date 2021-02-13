import "../styles/Task.css";
const Task = props => {

    const { text, date, id, active, finishDate } = props.task

    if (active) {
        return (
            <div className='task'>
                <h3 className="task__title">{text}</h3>
                <p className="task__date">{date} </p>
                <div className="task__btns">
                    <button onClick={() => props.change(id)}> <span className="fas fa-check-circle"></span> <span>Done</span></button>
                    <button onClick={() => props.delete(id)}> <span className="fas fa-times"></span> <span>Delete</span> </button>
                </div>

            </div>
        );
    } else {
        const finish = new Date(finishDate).toLocaleString()
        return (
            <div className='task'>
                <h3 className="task__title" >{text}</h3>
                <em> (zrobić do {date})</em>
                <br />
                    -potwierdzenie wykonania <span>{finish}</span>
                <button onClick={() => props.delete(id)}>X</button>
            </div>
        )
    }
}

export default Task;