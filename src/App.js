import React from 'react';

//Material UI Components

//css
import './components/TodoComponents/Todo.css';

//Components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoSearch from './components/TodoComponents/TodoSearch';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      search: '',
      task: '',
      todos: [
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
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state.search);
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

  toggleCompleted = id => {
    const {todos} = this.state;
    this.setState({
      todos: todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          };
        }else{
          return todo;
        }
      })
    });
  }

  clearCompleted = () => {
    const {todos} = this.state
    const completedTasks = todos.filter(todo => todo.completed === false);
    this.setState({
      todos: completedTasks
    })
  }

  searchSubmit = e => {
    e.preventDefault();
    const {search, todos} = this.state;
    const searchTerms = todos.filter(todo => todo.task === search); 
    console.log(searchTerms);

    if(searchTerms.length === 0){
      console.log('empty');
    }else{
      this.setState({
        todos: searchTerms
      });
    }
    this.setState({search: ''});
  }
  
  storeData = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  render() {
   const {task, todos, search} = this.state;
  
    return (
      <div className="container">
        <TodoSearch  handleChanges={this.handleChanges} searchSubmit={this.searchSubmit} value={search}/>
        <h1 id="app-main-header">TaskApp</h1>
        <TodoForm task={task} handleChanges={this.handleChanges} handleSubmit={this.handleSubmit} clearCompleted={this.clearCompleted} />
        <TodoList todos={todos} toggleCompleted={this.toggleCompleted}/>      
      </div>
    );
  }
}

export default App;
