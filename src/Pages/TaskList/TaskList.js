import ActiveTask from "../../Components/Task/ActiveTask";
import "./TaskList.css";

const TaskList = (props) => {
  const { activeTasks } = props;
  const priorityTasks = activeTasks.filter((task) => task.isImportant);
  const notPriorityTasks = activeTasks.filter((task) => !task.isImportant);
  // SORT BY DATE
  if (priorityTasks.length >= 2) {
    priorityTasks.sort((a, b) => {
      a = a.deadLine;
      b = b.deadLine;

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activePriorityTasks = priorityTasks.map((task) => (
    <ActiveTask
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const activeNotPriorityTasks = notPriorityTasks.map((task) => (
    <ActiveTask
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <div>
      <div className="active-tasks">
        <div className="priority">
          <p className="priority__title">
            Priority
            <span className="line line--red"></span>
          </p>
          <span className="priority__counter">
            {activePriorityTasks.length} tasks
          </span>
          <div className="active-tasks__container">
            {activePriorityTasks.length > 0 ? (
              activePriorityTasks
            ) : (
              <p>0 priority tasks. Add a few</p>
            )}
          </div>
        </div>
        <div className="not-priority">
          <p className="not-priority__title">
            In progress
            <span className="line line--blue"></span>
          </p>
          <div className="active-tasks__container">
            {activeNotPriorityTasks.length > 0 ? (
              activeNotPriorityTasks
            ) : (
              <p>Add few tasks</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
