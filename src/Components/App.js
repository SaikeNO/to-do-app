import AddTask from './AddTask'
import TaskList from './TaskList'
import Navigation from './Navigation'

import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import '../styles/App.css';
import calendar from '../calendar.svg'

class App extends Component {

  state = {
    tasks: [
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
    ],
    isActive: {
      tasks: false,
      add: false,
      done: false,
    }

  }

  counter = this.state.tasks.length

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })

  }

  addTask = (text, date, important) => {
    console.log('dodaj')
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++;

    const tasks = [...this.state.tasks, task];
    this.setState({
      tasks
    })

    return true
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div className='welcome'>
              <h1>Good morning Mateusz</h1>
              <img src={calendar} alt="calendar" />
            </div>

            <h2> {this.state.tasks.length} tasks to do </h2>
          </header>
          <Switch>
            <Route path={'/tasks'} render={() => <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />} />
            <Route path={'/add'} render={() => <AddTask add={this.addTask} />} />
          </Switch>
          <Navigation isActive={this.state.isActive} />
        </div>
      </Router>
    );
  }

}

export default App;
