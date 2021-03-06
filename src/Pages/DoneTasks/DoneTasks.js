import React from "react";
import InactiveTask from "../../Components/Task/InactiveTask";

const DoneTasks = (props) => {
  const { doneTasks } = props;

  const done = doneTasks.map((task) => (
    <InactiveTask key={task.id} task={task} delete={props.delete} />
  ));

  return (
    <div className="done-tasks">
      <p className="priority__title">
        Done
        <span className="line line--red"></span>
      </p>
      <span className="priority__counter">{done.length} tasks done</span>
      <div className="active-tasks__container">
        {done.length > 0 ? done : null}
      </div>
    </div>
  );
};

export default DoneTasks;
