import AddTask from "./Pages/AddTask/AddTask";
import TaskList from "./Pages/TaskList/TaskList";
import DoneTasks from "./Pages/DoneTasks/DoneTasks";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Welcome from "./Pages/Welcome/Welcome";
import ErrorPage from "./Pages/ErorrPage/ErrorPage";

import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import uuid from "react-uuid";

import initialTasks from "./data/initialTasks";

import "./styles/App.css";
import calendar from "./img/calendar.svg";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const deleteTask = (id) => {
    let tasksList = [...tasks];
    tasksList = tasksList.filter((task) => task.id !== id);
    setTasks(tasksList);
  };

  const changeTaskStatus = (id) => {
    const tasksList = [...tasks];
    tasksList.forEach((task) => {
      if (task.id === id) {
        task.isActive = false;
        task.finishDate = new Date().getTime();
      }
    });
    setTasks(tasksList);
  };

  const addTask = (text, deadLine, isImportant) => {
    const task = {
      id: uuid(),
      text,
      deadLine,
      isImportant,
      isActive: true,
      finishDate: null,
    };

    const tasksList = [...tasks, task];
    setTasks(tasksList);

    return true;
  };

  const doneTasks = tasks.filter((task) => !task.isActive);
  const activeTasks = tasks.filter((task) => task.isActive);

  return (
    <div className="App">
      <Header calendar={calendar} totalActiveTasks={activeTasks} />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={"/"} exact component={Welcome} />
          <Route
            path={"/tasks"}
            render={() => (
              <TaskList
                activeTasks={activeTasks}
                delete={deleteTask}
                change={changeTaskStatus}
              />
            )}
          />
          <Route path={"/add"} render={() => <AddTask add={addTask} />} />
          <Route
            path={"/done"}
            render={() => (
              <DoneTasks doneTasks={doneTasks} delete={deleteTask} />
            )}
          />
          <Route path={""} component={ErrorPage} />
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
};

export default App;
