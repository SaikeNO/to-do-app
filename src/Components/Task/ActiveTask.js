import "./Task.css";
const ActiveTask = (props) => {
  let { text, deadLine, id } = props.task;
  deadLine = deadLine.toLocaleString().slice(0, 10);

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
};

export default ActiveTask;
