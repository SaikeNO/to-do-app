import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'
import { Component } from 'react';

class App extends Component {

  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrać w Wiedźmina 3',
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
    ]
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
    tasks.forEach(task =>{
      if (task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
    
  }

  addTask = (text,date,important) =>{
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

  render(){
    return (
    <div className="App">
      <h1>TO DO APP</h1>
      <AddTask add={this.addTask}/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
    </div>
  );
  }
  
}

export default App;
