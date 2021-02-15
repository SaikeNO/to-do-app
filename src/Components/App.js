import AddTask from './AddTask'
import TaskList from './TaskList'
import Navigation from './Navigation'

import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import '../styles/App.css';
import calendar from '../calendar.svg'

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
  const activeTasks = tasks.filter(task => task.active);
  return (
    <Router>
      <div className="App">
        <header>
          <div className='welcome'>
            <h1>Good morning Mateusz</h1>
            <img src={calendar} alt="calendar" />
          </div>

          <h2> {activeTasks.length} tasks to do </h2>
        </header>
        <Switch>
          <Route path={'/tasks'} render={() => <TaskList tasks={tasks} delete={deleteTask} change={changeTaskStatus} />} />
          <Route path={'/add'} render={() => <AddTask add={addTask} />} />
        </Switch>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
