import "./Task.css";
const Task = (props) => {
  let { text, deadLine, id, isActive, finishDate } = props.task;
  console.log(deadLine);
  deadLine = deadLine.toLocaleString().slice(0, 10);

  if (isActive) {
    return (
      <div className="task">
        <h3 className="task__title">{text}</h3>
        <p className="task__date">{deadLine} </p>
        <div className="task__btns">
          <button onClick={() => props.change(id)}>
            {" "}
            <span className="fas fa-check-circle"></span> <span>Done</span>
          </button>
          <button onClick={() => props.delete(id)}>
            {" "}
            <span className="fas fa-times"></span> <span>Delete</span>{" "}
          </button>
        </div>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div className="task">
        <h3 className="task__title">{text}</h3>
        <p className="task__date">to {deadLine}</p>
        <div className="task__confirmation">
          <p>Confirmation</p>
          <span>{finish}</span>
        </div>
        <div className="task__btns">
          <button onClick={() => props.delete(id)}>
            {" "}
            <span className="fas fa-times"></span> <span>Delete</span>{" "}
          </button>
        </div>
      </div>
    );
  }
};

export default Task;
