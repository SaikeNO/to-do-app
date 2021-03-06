import React, { useState } from "react";
import { addYears, endOfYear } from "date-fns";
import "./AddTask.css";

const AddTask = (props) => {
  const minDate = new Date();

  const [text, setText] = useState("");
  const [isPriorityChecked, setIsPriorityCheked] = useState(false);
  const [deadLine, setDeadline] = useState(minDate);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCheckbox = (e) => {
    setIsPriorityCheked(e.target.checked);
  };

  const handleDate = (e) => {
    const deadLine = new Date(e.target.value);
    setDeadline(deadLine);
  };

  const handleClick = () => {
    if (text.length < 2) return;
    const add = props.add(text, deadLine, isPriorityChecked);
    if (add) {
      setText("");
      setIsPriorityCheked(false);
      setDeadline(minDate);
    }
  };
  const maxDate = endOfYear(addYears(minDate, 1));
  return (
    <div className="form">
      <label htmlFor="add">Add task</label>
      <input
        type="text"
        placeholder="add task"
        value={text}
        id="add"
        onChange={handleText}
      />
      <div className="priority-checkbox">
        <input
          type="checkbox"
          checked={isPriorityChecked}
          id="important"
          onChange={handleCheckbox}
        />
        <label htmlFor="important">Priority</label>
      </div>
      <div className="date">
        <label htmlFor="date">Choose when to do</label>
        <input
          type="date"
          id="date"
          value={deadLine.toISOString().slice(0, 10)}
          min={minDate.toISOString().slice(0, 10)}
          max={maxDate.toISOString().slice(0, 10)}
          onChange={handleDate}
        />
      </div>
      <button onClick={handleClick}>Confirm</button>
    </div>
  );
};

export default AddTask;
