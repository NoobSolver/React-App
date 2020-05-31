import React, { Component } from 'react';
import ShowTask from './ShowTask';
import AddTask from './AddForm';

class Todo extends Component {
  state = {
    tasks : [
      {id: 0, content : "test_component"},  
      {id: 1, content : "test_component2"},  
    ]
  }

  addTask = (task) => {
    task.id = Math.random() * 100;
    let tasks = [...this.state.tasks, task];
    this.setState({
      tasks: tasks
    })
  }

  removeTask = (id) => {
    let tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    })
    this.setState({
      tasks: tasks
    })
  }

  render() {
    return ( 
      <div className="todo-app container">
        <ShowTask tasks = {this.state.tasks} removeTask = {this.removeTask}/>
        <AddTask addTask = {this.addTask}/>
      </div>
    );
  }

};

export default Todo;