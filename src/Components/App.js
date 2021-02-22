import AddTask from '../Pages/AddTask'
import TaskList from '../Pages/TaskList'
import DoneTasks from '../Pages/DoneTasks'
import Navigation from './Navigation'
import Header from './Header'
import Welcome from '../Pages/Welcome'
import ErrorPage from '../Pages/ErrorPage'

import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import '../styles/App.css';
import calendar from '../img/calendar.svg'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'zagrać w Wiedźmina',
      date: '2021-02-15',
      important: true,
      active: true,
      finishDate: null
    },
    {
      id: 1,
      text: 'zrobic dobry uczynek',
      date: '2021-06-15',
      important: false,
      active: true,
      finishDate: null
    },
    {
      id: 2,
      text: 'Kupic mleko',
      date: '2021-01-25',
      important: true,
      active: true,
      finishDate: null
    },
    {
      id: 3,
      text: 'umyć samochód',
      date: '2021-02-24',
      important: true,
      active: true,
      finishDate: null
    },
  ])

  let counter = tasks.length

  const deleteTask = (id) => {
    const tasksList = [...tasks]
    const index = tasksList.findIndex(task => task.id === id)
    tasksList.splice(index, 1)
    setTasks(tasksList)
  }

  const changeTaskStatus = (id) => {
    const tasksList = [...tasks]
    tasksList.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    setTasks(tasksList)

  }

  const addTask = (text, date, important) => {
    const task = {
      id: counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    counter = counter + 1

    const tasksList = [...tasks, task];
    setTasks(tasksList)

    return true
  }

  const doneTasks = tasks.filter(task => !task.active);

  return (
    <div className="App">
      <Header calendar={calendar} tasks={tasks} />
      <Router>
        <Switch>
          <Route path={'/'} exact component={Welcome} />
          <Route path={'/tasks'} render={() => <TaskList tasks={tasks} delete={deleteTask} change={changeTaskStatus} />} />
          <Route path={'/add'} render={() => <AddTask add={addTask} />} />
          <Route path={'/done'} render={() => <DoneTasks doneTasks={doneTasks} delete={deleteTask} />} />
          <Route path={''} component={ErrorPage} />
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
