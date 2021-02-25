import "./Task.css";

const InactiveTask = (props) => {
  let { text, deadLine, id, finishDate } = props.task;
  deadLine = deadLine.toLocaleString().slice(0, 10);
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
};

export default InactiveTask;
