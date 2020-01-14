import React from 'react';

const Todo= ({todo}) => { 
    return(
        <div className="todo-task-container">
            <p className={todo.completed ? 'completed': ' '}>Task: {todo.task}</p>
            <p className={todo.completed ? 'completed': ' '}>Completed: {todo.completed ? "Yes" : "No"}</p>
            <p className={todo.completed ? 'completed': ' '}>ID:{ todo.id }</p>
        </div>
    )
}

export default Todo;