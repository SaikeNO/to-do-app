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

import "./styles/App.css";
import calendar from "./img/calendar.svg";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      text: "zagrać w Wiedźmina",
      date: "2021-02-15",
      isImportant: true,
      isActive: true,
      finishDate: null,
    },
    {
      id: uuid(),
      text: "zrobic dobry uczynek",
      date: "2021-06-15",
      isImportant: false,
      isActive: true,
      finishDate: null,
    },
    {
      id: uuid(),
      text: "Kupic mleko",
      date: "2021-01-25",
      isImportant: true,
      isActive: true,
      finishDate: null,
    },
    {
      id: uuid(),
      text: "umyć samochód",
      date: "2021-02-24",
      isImportant: true,
      isActive: true,
      finishDate: null,
    },
  ]);

  const deleteTask = (id) => {
    const tasksList = [...tasks];
    const index = tasksList.findIndex((task) => task.id === id);
    tasksList.splice(index, 1);
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

  const addTask = (text, date, isImportant) => {
    const task = {
      id: uuid(),
      text,
      date,
      isImportant,
      isActive: true,
      finishDate: null,
    };

    const tasksList = [...tasks, task];
    setTasks(tasksList);

    return true;
  };

  const doneTasks = tasks.filter((task) => !task.isActive);

  return (
    <div className="App">
      <Header calendar={calendar} tasks={tasks} />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={"/"} exact component={Welcome} />
          <Route
            path={"/tasks"}
            render={() => (
              <TaskList
                tasks={tasks}
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
