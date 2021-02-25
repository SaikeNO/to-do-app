import React, { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
  const minDate = new Date().toISOString().slice(0, 10);

  const [text, setText] = useState("");
  const [priorityChecked, setPriorityCheked] = useState(false);
  const [date, setDate] = useState(minDate);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCheckbox = (e) => {
    setPriorityCheked(e.target.checked);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleClick = () => {
    if (text.length < 2) return;
    const add = props.add(text, date, priorityChecked);
    if (add) {
      setText("");
      setPriorityCheked(false);
      setDate(minDate);
    }
  };
  let maxDate = minDate.slice(0, 4) * 1 + 1;
  maxDate = `${maxDate}-12-31`;
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
          checked={priorityChecked}
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
          value={date}
          min={minDate}
          max={maxDate}
          onChange={handleDate}
        />
      </div>
      <button onClick={handleClick}>Confirm</button>
    </div>
  );
};

export default AddTask;
