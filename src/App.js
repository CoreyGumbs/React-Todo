import React from 'react';

//Components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      task: '',
      todo: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
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

  render() {
   const {task, todo} = this.state;

   console.log(task)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={todo} />
        <TodoForm task={task} handleChanges={this.handleChanges} />
      </div>
    );
  }
}

export default App;
