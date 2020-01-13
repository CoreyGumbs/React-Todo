import React from 'react';

//Components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      task: '',
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleChanges = e => {
    this.setState({task: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const {task, todos} = this.state;
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [
        ...todos,
        newTask
      ]
    });

    this.setState({task: ''});
  }

  clearCompleted = () => {
    const {todos} = this.state
    const completedTasks = todos.filter(todo => todo.completed === false);
    this.setState({
      todos: completedTasks
    })
  }

  render() {
   const {task, todos} = this.state;

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm task={task} handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} clearCompleted={this.clearCompleted} />
        <TodoList todos={todos} />      
      </div>
    );
  }
}

export default App;
